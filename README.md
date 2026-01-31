# 🌟 WardWork - Decentralized Freelance Platform

WardWork is a decentralized freelance marketplace built on Stellar blockchain, featuring smart contract-based escrow, user registry, and fee management.

## 🚀 Quick Start

### Prerequisites

- Node.js 18.18.0+
- pnpm 9.15.4+
- Stellar CLI
- Rust & Cargo (for contract building)

### Installation

```bash
# Clone repository
git clone <your-repo-url>
cd wardwork-monorepo

# Install dependencies
pnpm install
```

### Configuration

1. **Backend Setup**:
   ```bash
   cd backend
   cp .env.example .env
   # Edit .env with your configuration
   ```

2. **Add Contract IDs**:
   After deploying your Stellar contracts, add their IDs to `backend/.env`:
   ```bash
   ESCROW_FACTORY_CONTRACT_ID=CXXXXXX...
   FEE_MANAGER_CONTRACT_ID=CXXXXXX...
   USER_REGISTRY_CONTRACT_ID=CXXXXXX...
   ```

3. **Generate TypeScript Bindings**:
   ```bash
   pnpm run bindings:generate
   ```

4. **Start Development**:
   ```bash
   # Backend
   cd backend && pnpm run dev
   
   # Frontend
   pnpm run dev
   ```

## 📂 Project Structure

```
wardwork-monorepo/
├── backend/              # Node.js/Express backend
├── src/                  # Next.js frontend
├── contracts-offerhub/   # Stellar smart contracts (Rust)
├── packages/             # Generated TypeScript bindings
├── docs/                 # Documentation
└── scripts/              # Build and deployment scripts
```

## 🔧 Smart Contracts Integration

This project uses TypeScript bindings for type-safe smart contract interactions.

### Contract IDs Configuration

Contract IDs are configured in `backend/src/config/contract-ids.ts` and loaded from environment variables.

### Generating Bindings

```bash
# Generate all bindings
pnpm run bindings:generate

# Generate specific contract
pnpm run bindings:generate -- --contract escrow-factory

# Test setup
cd backend && ./test-contracts.sh
```

📖 **Full Guide**: [Generate Bindings Documentation](./docs/GENERATE_BINDINGS.md)

## 📚 Documentation

- [Generate Bindings Guide](./docs/GENERATE_BINDINGS.md) - TypeScript bindings for Stellar contracts
- [Backend Documentation](./backend/README.md) - Backend API documentation
- [Stellar Bindings Reference](./docs/STELLAR_BINDINGS.md) - Complete reference guide

## 🛠️ Available Scripts

### Root Level
```bash
pnpm run dev              # Start frontend dev server
pnpm run build            # Build frontend
pnpm run bindings:generate # Generate contract bindings
pnpm run bindings:build   # Build bindings packages
```

### Backend
```bash
cd backend
pnpm run dev              # Start backend dev server
pnpm run build            # Build backend
pnpm run test             # Run tests
```

## 🤝 Contributing

Please read our contributing guidelines before submitting PRs.

## 📄 License

[Your License Here]
