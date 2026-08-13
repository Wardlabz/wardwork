# npm Packages

> The WardWork Orchestrator ships three npm packages. This guide explains what each one does, when to use it, and how to use it correctly.

---

## Overview

| Package | Who uses it | What it does |
|---|---|---|
| [`create-wardwork-orchestrator`](#create-wardwork-orchestrator) | DevOps / platform engineers | Interactive setup wizard — configures `.env`, runs migrations, bootstraps platform user |
| [`@wardwork/sdk`](#wardworksdk) | Marketplace backend developers | TypeScript client for the Orchestrator API |
| [`@wardwork/cli`](#wardworkcli) | Platform administrators | Manage API keys and run maintenance tasks from the terminal |

---

## `create-wardwork-orchestrator`

### What it is

A one-time setup tool you run **inside a cloned WardWork Orchestrator repo** to configure your instance. It replaces manually editing `.env` files and running setup commands one by one.

### When to use it

- First time deploying the Orchestrator on a new environment
- Setting up a staging or production instance
- Onboarding a new team member who needs their own development environment

### How to use it

**Prerequisites:**
- Node.js 20+
- A running PostgreSQL instance (Supabase recommended)
- A running Redis instance (Upstash recommended)
- A Trustless Work API key from [dapp.trustlesswork.com](https://dapp.trustlesswork.com)

**Steps:**

```bash
# 1. Clone the Orchestrator
git clone https://github.com/Wardlabz/wardwork.git
cd WardWork

# 2. Install dependencies
npm install

# 3. Run the setup wizard
npx create-wardwork-orchestrator
```

The wizard will ask for:

| Prompt | Description |
|---|---|
| API Port | Default: `4000` |
| PostgreSQL URL | Use the **pooler** URL (port 6543) for Supabase |
| Redis URL | `redis://` or `rediss://` for TLS |
| Payment provider | `crypto` (Stellar, default) or `airtm` |
| Stellar network | `testnet` for development, `mainnet` for production |
| Trustless Work API key | From your TW dashboard |
| Trustless Work Webhook Secret | From your TW dashboard |
| Public URL | Your server's HTTPS URL (for webhook callbacks) |
| Run migrations? | Yes — applies all pending DB migrations |
| Generate API key? | Optional — requires the server to be running |

**What it does automatically:**
1. Generates a secure `WARDWORK_MASTER_KEY`
2. Generates a secure `WALLET_ENCRYPTION_KEY` (crypto mode only)
3. Writes `.env` with all values filled in
4. Runs `prisma migrate deploy`
5. Runs `npm run bootstrap` — creates the platform Stellar wallet and writes `PLATFORM_USER_ID` into `.env`
6. Optionally generates your first API key

### How to do it right

- **Back up `WALLET_ENCRYPTION_KEY` immediately** — if you lose it, all user wallets become unrecoverable. Store it in a secrets manager (Railway Variables, AWS Secrets Manager, 1Password).
- Run the wizard with `testnet` first. Switch to `mainnet` only when ready for production.
- The wizard is **idempotent for bootstrap** — safe to re-run. It will ask before overwriting an existing `.env`.
- Do **not** commit the generated `.env` to git.

---

## `@wardwork/sdk`

### What it is

The official TypeScript/JavaScript client for the WardWork Orchestrator API. Marketplace backends use it to create users, manage escrows, handle disputes, and query balances — without writing raw HTTP calls.

### When to use it

- Building the backend of a marketplace that integrates with WardWork
- Any Node.js or TypeScript service that needs to talk to the Orchestrator API

### How to install it

```bash
npm install @wardwork/sdk
```

### How to use it

```typescript
import { WardWorkSDK } from '@wardwork/sdk';

const sdk = new WardWorkSDK({
  baseUrl: 'https://your-orchestrator.com',
  apiKey: process.env.WARDWORK_API_KEY,
});

// Create a user (auto-creates Stellar wallet in crypto mode)
const user = await sdk.users.create({
  externalId: 'marketplace-user-123',
  email: 'buyer@example.com',
});

// Get deposit address
const deposit = await sdk.wallet.getDepositAddress(user.data.id);
console.log(deposit.address); // Stellar address to send USDC to

// Create an escrow order
const order = await sdk.orders.create({
  buyerId: buyerUser.data.id,
  sellerId: sellerUser.data.id,
  amount: '100.00',
  currency: 'USDC',
  title: 'Logo design project',
});

// Release funds after work is complete
await sdk.orders.release(order.data.id);
```

### Available resources

| Resource | Methods | Description |
|---|---|---|
| `sdk.users` | `create()`, `get()`, `list()` | User management |
| `sdk.wallet` | `getInfo()`, `getDepositAddress()`, `getTransactions()` | Stellar wallet operations |
| `sdk.balance` | `get()`, `sync()` | User balance |
| `sdk.orders` | `create()`, `get()`, `list()`, `fund()`, `release()`, `cancel()` | Escrow orders |
| `sdk.disputes` | `create()`, `get()`, `list()` | Dispute management |
| `sdk.topups` | `create()`, `get()` | AirTM top-ups (AirTM mode only) |
| `sdk.withdrawals` | `create()`, `get()` | AirTM withdrawals (AirTM mode only) |

### Error handling

```typescript
import { WardWorkSDK, WardWorkError, NotFoundError, ValidationError } from '@wardwork/sdk';

try {
  const order = await sdk.orders.get('ord_nonexistent');
} catch (error) {
  if (error instanceof NotFoundError) {
    // 404 — resource does not exist
  } else if (error instanceof ValidationError) {
    // 422 — invalid input
    console.log(error.details);
  } else if (error instanceof WardWorkError) {
    // Other API error
    console.log(error.statusCode, error.message);
  }
}
```

### How to do it right

- Store the API key in environment variables — never hardcode it.
- Use one SDK instance per service (singleton pattern).
- Handle `NotFoundError` and `ValidationError` explicitly — they indicate business logic issues, not infrastructure failures.
- In crypto mode, call `sdk.wallet.getDepositAddress()` to show the user where to send USDC. Do not hardcode addresses.
- The SDK is **read-safe**: `get()` and `list()` calls are idempotent and safe to retry.

---

## `@wardwork/cli`

### What it is

A command-line tool for platform administrators to manage API keys and run maintenance operations on a running Orchestrator instance.

### When to use it

- Creating or revoking API keys for marketplace integrations
- Checking the status of an Orchestrator instance
- Running maintenance tasks (e.g., reconciliation checks)

### How to install it

```bash
# Use directly without installing
npx @wardwork/cli <command>

# Or install globally
npm install -g @wardwork/cli
```

### Configuration

```bash
# Point the CLI at your Orchestrator instance
wardwork config set

# Or pass flags directly
wardwork --url https://your-orchestrator.com --key wwk_live_xxx <command>
```

### Common commands

```bash
# List all API keys
wardwork keys list

# Create a new API key
wardwork keys create --name "My Marketplace" --scopes read,write

# Revoke a key
wardwork keys revoke key_xxx

# Show current config
wardwork config show
```

### How to do it right

- Use the CLI for **administration only** — not for marketplace integration (use the SDK for that).
- Restrict CLI access to platform engineers — it uses the `WARDWORK_MASTER_KEY` or a key with `support` scope.
- Rotate API keys whenever a team member leaves or a key may have been exposed.
- In production, prefer creating keys via the API directly (`POST /api/v1/auth/api-keys`) in your CI/CD pipeline rather than manually via CLI.

---

## Summary: Which package do I need?

```
I'm setting up a new Orchestrator instance
  → npx create-wardwork-orchestrator

I'm building a marketplace that uses the Orchestrator
  → npm install @wardwork/sdk

I'm an admin managing API keys or running maintenance
  → npx @wardwork/cli
```

---

## Related Guides

- [Deployment Guide](./deployment.md) — Full self-hosting setup
- [SDK Integration Guide](../sdk/integration-guide.md) — Detailed SDK usage
- [CLI Quick Reference](../cli/quick-reference.md) — All CLI commands
- [Installer Reference](../deployment/installer.md) — Full installer documentation
