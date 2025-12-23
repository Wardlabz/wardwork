# 💼 WARDWORK Backend

Backend API for WARDWORK, built with Node.js, Express, and Supabase.

## 🚀 Getting Started

### Prerequisites

- Node.js >= 18
- npm or yarn
- Supabase Project

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/WARDWORK/wardwork.git
   cd wardwork/backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure Environment Variables:
   Create a `.env` file in the root directory based on `.env.example`:
   ```bash
   cp .env.example .env
   ```
   Fill in your Supabase credentials and other required variables.

4. Run Migrations:
   Ensure your Supabase instance is up to date with the migrations in `supabase/migrations`.

5. Start the Development Server:
   ```bash
   npm run dev
   ```
   The server will start at `http://localhost:4000`.

## 📁 Project Structure

```
backend/
├── src/
│   ├── config/         # App configuration
│   ├── controllers/    # Route controllers (Auth, User)
│   ├── middlewares/    # Express middlewares
│   ├── routes/         # API route definitions
│   ├── services/       # Business logic
│   ├── types/          # TypeScript definitions
│   ├── utils/          # Utility functions
│   └── index.ts        # Entry point
├── supabase/
│   └── migrations/     # Database migrations
└── docs/               # Project documentation & standards
```

## 🛠 Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: PostgreSQL (via Supabase)
- **Authentication**: JWT & Supabase Auth
- **Blockchain**: Stellar SDK
- **Language**: TypeScript

## 📚 Documentation

For detailed documentation on standards, error handling, and API formats, please check the `docs/` directory:

- [Error Handling & Validation](docs/ERROR_HANDLING_AND_VALIDATION.md)
- [API Response Format](docs/API_RESPONSE_FORMAT.md)

## 🔐 Key Features (Current)

- **Authentication**: Email/Password & Wallet-based registration/login.
- **User Management**: Profile management.
- **Wallets**: Stellar wallet integration (Invisible & External).

## 🤝 Contributing

Please follow the coding standards defined in the documentation. Ensure all new features include appropriate tests and types.
