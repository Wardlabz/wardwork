# 🚀 Generating TypeScript Bindings for Stellar Contracts

This guide explains how to generate TypeScript bindings for your deployed Stellar smart contracts.

## 📋 Prerequisites

Before generating bindings, ensure you have:

### 1. **Deployed Contracts**
Your contracts must be deployed to Stellar (testnet or mainnet). You should have contract IDs that look like:
```
CBQHNAXSI55GX2GN6D67GK7BHVPSLJUGZQEU7WJ5LKR5PNUCGLIMAO4K
```

> **Note**: Contract deployment is handled separately. This guide assumes you already have contract IDs.

### 2. **Required Tools**

Install these tools if you haven't already:

#### Stellar CLI
```bash
# macOS
brew install stellar-cli

# Verify installation
stellar --version
```

#### Rust & Cargo (for building contracts)
```bash
# Install Rust
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh

# Add wasm32 target
rustup target add wasm32-unknown-unknown

# Verify
cargo --version
```

#### Bash 4.0+ (macOS users)
```bash
# Install modern bash
brew install bash

# Verify version (should be 4.0+)
/opt/homebrew/bin/bash --version
```

#### Node.js & pnpm
```bash
# Should already be installed
node --version  # v18.18.0+
pnpm --version  # 9.15.4+
```

---

## ⚙️ Configuration Steps

### Step 1: Add Contract IDs to Environment

Open `backend/.env` and add your deployed contract IDs:

```bash
# Stellar Network Configuration
STELLAR_NETWORK=testnet
STELLAR_RPC_URL=https://soroban-testnet.stellar.org
STELLAR_NETWORK_PASSPHRASE=Test SDF Network ; September 2015

# Backend Signer Secret Key
STELLAR_BACKEND_SECRET_KEY=SXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

# ✨ CONTRACT IDs (Replace with your deployed contract IDs)
ESCROW_FACTORY_CONTRACT_ID=CBQHNAXSI55GX2GN6D67GK7BHVPSLJUGZQEU7WJ5LKR5PNUCGLIMAO4K
FEE_MANAGER_CONTRACT_ID=CXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
USER_REGISTRY_CONTRACT_ID=CXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

> **Important**: Replace the example IDs with your actual contract IDs from deployment.

### Step 2: Verify Configuration

The system reads contract IDs from `backend/src/config/contract-ids.ts`, which loads them from environment variables.

You can verify your configuration:
```typescript
import { CONTRACT_IDS, validateContractIds } from "./config/contract-ids";

const validation = validateContractIds();
console.log(validation); // { valid: true, missing: [] }
```

---

## 🎯 Generate Bindings

Once your contract IDs are configured, generate the TypeScript bindings:

### Quick Command

```bash
# From repository root
pnpm run bindings:generate
```

### What This Does

The script will automatically:

1. ✅ **Validate Prerequisites**
   - Check Stellar CLI is installed
   - Check Cargo is installed
   - Check pnpm is installed
   - Verify contract IDs are set

2. ✅ **Build Contracts**
   - Compiles Rust contracts to WASM
   - Located in `contracts-offerhub/target/wasm32-unknown-unknown/release/`

3. ✅ **Generate TypeScript Bindings**
   - Runs `stellar contract bindings typescript` for each contract
   - Creates packages in `packages/` directory:
     - `packages/escrow-factory-client/`
     - `packages/fee-manager-client/`
     - `packages/user-registry-client/`

4. ✅ **Setup Packages**
   - Creates `package.json` for each bindings package
   - Installs dependencies
   - Compiles TypeScript to JavaScript

### Expected Output

```bash
═══════════════════════════════════════
Stellar TypeScript Bindings Generator
═══════════════════════════════════════

Checking Prerequisites
✓ Stellar CLI installed: stellar 25.0.0
✓ Cargo installed: cargo 1.75.0
✓ pnpm installed: 9.15.4
✓ Contracts directory found

═══════════════════════════════════════
Processing: escrow-factory
═══════════════════════════════════════
✓ Contract ID found: CBQH...MAO4K
✓ Built escrow-factory successfully
✓ Generated bindings for escrow-factory
✓ Created package.json
✓ Built package escrow-factory-client

[... similar for other contracts ...]

═══════════════════════════════════════
Summary
═══════════════════════════════════════
Successfully processed: 3 contract(s)

✓ All bindings generated successfully!

Next steps:
  1. Import generated clients in backend services
  2. Update backend/.env with contract IDs
  3. Test contract client instantiation
```

---

## 🔧 Advanced Options

### Generate Specific Contract Only

```bash
pnpm run bindings:generate -- --contract escrow-factory
```

Available contracts:
- `escrow-factory`
- `fee-manager`
- `user-registry`

### Skip Building Contracts

If contracts are already built:
```bash
pnpm run bindings:generate -- --skip-build
```

### Dry Run (Preview)

See what would happen without making changes:
```bash
pnpm run bindings:generate -- --dry-run
```

### View Help

```bash
bash scripts/generate-bindings.sh --help
```

---

## ✅ Verify Installation

After generating bindings, verify everything works:

### 1. Check Generated Packages

```bash
ls -la packages/
# Should show:
# - escrow-factory-client/
# - fee-manager-client/
# - user-registry-client/
```

### 2. Run Tests

```bash
cd backend
./test-contracts.sh
```

Expected output:
```
═══════════════════════════════════════
Testing Configuration
═══════════════════════════════════════
✓ Configuration loaded successfully
✓ Configuration validation passed

═══════════════════════════════════════
Testing Client Factory
═══════════════════════════════════════
✓ Client factory instance created
✓ Network config accessible: testnet
✓ Signer public key: GXXXXXX...

═══════════════════════════════════════
Testing Escrow Factory Client
═══════════════════════════════════════
✓ Escrow Factory client initialized successfully

[... similar for other contracts ...]

═══════════════════════════════════════
Test Summary
═══════════════════════════════════════
✓ Configuration: PASSED
✓ Client Factory: PASSED
✓ Escrow Factory Client: PASSED
✓ Fee Manager Client: PASSED
✓ User Registry Client: PASSED

All tests passed! ✨
```

---

## 💻 Using Generated Bindings

Once bindings are generated, use them in your backend code:

```typescript
import { getStellarClientFactory } from "@/services/stellar";
import { Address } from "@stellar/stellar-sdk";

async function createEscrow() {
  // Get the client factory
  const factory = getStellarClientFactory();
  
  // Get typed contract client
  const escrowClient = await factory.getEscrowFactory();
  
  // Call contract methods with full type safety and IntelliSense!
  const result = await escrowClient.deployNewEscrow({
    client: Address.fromString("GXXXXXX..."),
    freelancer: Address.fromString("GXXXXXX..."),
    amount: BigInt(1000000), // 0.1 XLM
    fee_manager: Address.fromString("CXXXXXX..."),
    salt: new Uint8Array(32),
  });
  
  return result.result.toString();
}
```

### Benefits

- ✅ **Type Safety**: TypeScript validates your parameters at compile time
- ✅ **IntelliSense**: IDE shows available methods and parameters
- ✅ **Autocomplete**: No need to remember method names
- ✅ **Error Prevention**: Catch mistakes before runtime

---

## 🐛 Troubleshooting

### Error: "Contract ID not set"

**Solution**: Add the contract ID to `backend/.env`:
```bash
ESCROW_FACTORY_CONTRACT_ID=CXXXXXX...
```

### Error: "Cannot find module '@offerhub/escrow-factory-client'"

**Problem**: Bindings haven't been generated yet.

**Solution**:
```bash
pnpm run bindings:generate
```

### Error: "stellar: command not found"

**Problem**: Stellar CLI not installed.

**Solution**:
```bash
brew install stellar-cli
```

### Error: "declare: -A: invalid option"

**Problem**: Using bash 3.x (macOS default).

**Solution**: Install bash 4.0+
```bash
brew install bash
/opt/homebrew/bin/bash scripts/generate-bindings.sh
```

### Bindings Build Fails

**Solution**: Ensure TypeScript and dependencies are correct:
```bash
rm -rf packages/*/node_modules packages/*/dist
pnpm run bindings:generate
```

---

## 🔄 When to Regenerate Bindings

Regenerate bindings when:

1. **Contract Code Changes**: After modifying Rust contract code
2. **Contract Redeployment**: After deploying with new contract ID
3. **New Methods Added**: When contract interface changes
4. **Network Switch**: Moving from testnet to mainnet

---

## 📁 Generated File Structure

After generation, your project will have:

```
wardwork-monorepo/
├── packages/
│   ├── escrow-factory-client/
│   │   ├── src/
│   │   │   └── index.ts           # Generated TypeScript bindings
│   │   ├── dist/                   # Compiled JavaScript
│   │   ├── package.json
│   │   └── tsconfig.json
│   ├── fee-manager-client/
│   │   └── [same structure]
│   └── user-registry-client/
│       └── [same structure]
└── backend/
    └── src/
        └── services/
            └── stellar/
                └── client-factory.ts  # Uses generated bindings
```

---

## 📚 Additional Resources

- [Stellar TypeScript Bindings Guide](https://developers.stellar.org/docs/build/apps/guestbook/bindings)
- [Backend Architecture](../backend/README.md)
- [Contract Deployment Guide](./CONTRACT_DEPLOYMENT.md) _(if you need deployment info)_

---

## ✨ Quick Reference

```bash
# Generate all bindings
pnpm run bindings:generate

# Generate specific contract
pnpm run bindings:generate -- --contract escrow-factory

# Test setup
cd backend && ./test-contracts.sh

# View help
bash scripts/generate-bindings.sh --help
```

---

**That's it!** Once you've generated the bindings, you can use type-safe contract clients throughout your backend. 🚀
