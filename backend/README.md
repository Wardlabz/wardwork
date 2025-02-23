# 🚀 WARDWORK Backend

Welcome to the **WARDWORK** backend, a blockchain-based freelance services platform using Stellar.

This backend is built with **NestJS** and configured with **Docker + PostgreSQL**, ready for future **Hasura** integration.

---

## 📌 **Prerequisites**
Before getting started, ensure you have the following installed:

- **Node.js** (LTS recommended)
- **PNPM** (or `npm`/`yarn`)
- **Docker & Docker Compose**

---

## ⚡ **Installation & Setup**
### 1️⃣ **Clone the repository**
```sh
git clone https://github.com/user/wardwork.git  
cd wardwork/backend  
```

### 2️⃣ **Install dependencies**
```sh
pnpm install  
```

### 3️⃣ **Set up environment variables**
Create a `.env` file in `backend/` with the following content:

```sh
NODE_ENV=development  
PORT=3000  
DATABASE_URL=postgres://postgres:postgres@postgres:5432/offerhub_db  
JWT_SECRET=your_jwt_secret  
STELLAR_SECRET_KEY=your_stellar_secret  
STELLAR_PUBLIC_KEY=your_stellar_public  
```
### 4️⃣ **Start PostgreSQL with Docker**
```sh
pnpm docker:up  
```
This will initialize **PostgreSQL** in the background, ready for future **Hasura** integration.

### 5️⃣ **Run the backend in development mode**
```sh
pnpm build 
```
This command compiles the TypeScript code

### 6️⃣ **Run the backend in development mode**
```sh
pnpm start:dev  
```

This will start **NestJS** in development mode with live reload.

---

## ✅ **Useful Commands**
| Command               | Description |
|-----------------------|-------------|
| pnpm install        | Install dependencies |
| pnpm start:dev      | Start the backend in development mode |
| pnpm build         | Build the backend for production |
| pnpm lint          | Check for code errors |
| pnpm format        | Format the code |
| pnpm docker:up     | Start PostgreSQL in Docker |
| pnpm docker:down   | Stop PostgreSQL |

---

## 🛠 **Stopping or Restarting the Backend**
When finished working, stop the containers with:  
```sh
pnpm docker:down  
```
To clear NestJS cache and rebuild:  
```sh
rm -rf dist && pnpm build  
```
---

Thank you for contributing to **WARDWORK**! 🚀
