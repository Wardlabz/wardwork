<div align="center">
  <img src="https://github.com/user-attachments/assets/7799a3c4-ccec-42fc-80d0-226309b8169b" alt="O-H" width="200">
</div>

# 🌟 WARDWORK | Decentralized Freelance Platform


[![Backend CI/CD](https://github.com/WARDWORK/wardwork/workflows/Backend%20CI%20CD/badge.svg)](https://github.com/WARDWORK/wardwork/actions/workflows/backend-ci.yml)

[![Frontend CI/CD](https://github.com/WARDWORK/wardwork/workflows/Frontend%20CI%20CD/badge.svg)](https://github.com/WARDWORK/wardwork/actions/workflows/frontend-ci.yml)


Welcome to **WARDWORK**! This platform aims to revolutionize the freelance marketplace by leveraging **blockchain technology**, **cryptocurrency payments**, and **smart contracts** to create a secure and efficient environment for freelancers and clients worldwide.

Our mission is to remove intermediaries, reduce fees, and empower users with tools to collaborate seamlessly in areas like design, programming, writing, and consulting. 🚀

---

## 📘 Getting Started

Please read carefully and follow our contribution guide step by step — this will allow everything to flow in the best way:

👉 [CONTRIBUTORS\_GUIDELINE.md](https://github.com/WARDWORK/wardwork/blob/main/docs/CONTRIBUTORS_GUIDELINE.md)

---

## 🚀 Prerequisites

Before contributing, ensure your system meets these requirements:

* **Node.js**: v23.3.0
* **npm**: v10+

---

## 🛠 Installation Guide

1️⃣ **Fork this repository** to your GitHub account.

2️⃣ Clone your forked repo locally:

```bash
git clone https://github.com/<your_user>/wardwork
```

3️⃣ Navigate into the project directory:

```bash
cd wardwork
```

4️⃣ Install frontend dependencies:

```bash
npm install
```

5️⃣ Run the development server:

```bash
npm run dev
```

6️⃣ Open the app in your browser at:

```
http://localhost:3000
```

---

## 🧩 Backend Setup

The backend lives in the `/backend` folder and includes all APIs and database migration logic using **Supabase**.

👉 For full instructions, refer to the dedicated backend guide:
[`/backend/README.md`](./backend/README.md)

---

## 📋 Smart Contracts Documentation

The WardWork platform is powered by a comprehensive suite of Soroban smart contracts. Each contract serves a specific purpose in creating a secure, decentralized freelance marketplace.

### 📚 Contract Documentation

#### Core Infrastructure
- **[Contracts Overview](./docs/CONTRACTS_OVERVIEW.md)** - Complete system architecture and contract interactions
- **[User Registry Contract](./docs/USER_REGISTRY_CONTRACT.md)** - User verification and access control system
- **[Emergency Contract](./docs/EMERGENCY_CONTRACT.md)** - Platform safety and crisis management

#### Payment System
- **[Escrow Contract](./docs/ESCROW_CONTRACT.md)** - Secure payment management with milestone support
- **[Escrow Factory](./docs/ESCROW_FACTORY.md)** - Standardized deployment and batch management
- **[Fee Manager Contract](./docs/FEE_MANAGER_CONTRACT.md)** - Centralized fee calculation and collection

#### Dispute & Content
- **[Dispute Resolution Contract](./docs/DISPUTE_CONTRACT.md)** - Two-tier mediation and arbitration system
- **[Publication Contract](./docs/PUBLICATION_CONTRACT.md)** - On-chain registry for services and projects

#### Reputation System
- **[Rating System Integration](./docs/RATING_SYSTEM_INTEGRATION.md)** - User rating and feedback system
- **[Reputation NFT Contract](./docs/REPUTATION_NFT_CONTRACT.md)** - Achievement-based NFT rewards

### 🔗 Contract Interactions

The contracts work together to create a seamless platform experience:

```
User Registration → Service/Project Publication → Escrow Creation → 
Payment Processing → Work Completion → Rating & Reputation → NFT Rewards
```

For disputes: `Escrow → Dispute Resolution → Mediation/Arbitration → Resolution`

### 🛠 Development Resources

- **[Freelancer Profile Implementation](./docs/FREELANCER_PROFILE_IMPLEMENTATION.md)** - Frontend profile system
- **[Contributors Guidelines](./docs/CONTRIBUTORS_GUIDELINE.md)** - Development standards and practices

---

## 💬 Need Help?

If you get stuck or want to discuss implementation ideas, open an issue or start a discussion in the repo. Let's build something amazing together 💫

---

## 🧠 Maintained by

**[@Josué](https://github.com/Josue1908)** 
**[@Kevin](https://github.com/KevinMB0220)** 
