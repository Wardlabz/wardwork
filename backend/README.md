# 🚀 WARDWORK Backend

Backend for **WARDWORK**, a blockchain-based freelance services platform using Stellar.

---

## 📌 **Prerequisites**

- **Node.js** (LTS recommended)
- **NPM** or `yarn`
- **Docker & Docker Compose**

---

## ⚡ **Setup & Installation**

### 1️⃣ **Clone the repository**

```sh
git clone https://github.com/user/wardwork.git
cd wardwork/backend
```

### 2️⃣ **Install dependencies**

```sh
npm install
```

### 3️⃣ **Set up environment variables**

Create a `.env` file in `backend/` with:

```typescript
DATABASE_HOST=wardwork_database
DATABASE_PORT=5432
DATABASE_USER=offerhub_admin
DATABASE_PASSWORD=offerhub_pass
DATABASE_NAME=wardwork_database
DOCKER_ENV=true
PORT=3002
HASURA_GRAPHQL_DATABASE_URL=postgres://${DATABASE_USER}:${DATABASE_PASSWORD}@${DATABASE_HOST}:${DATABASE_PORT}/${DATABASE_NAME}
HASURA_GRAPHQL_ADMIN_SECRET=offerhub_secret
```

---

## 🛠 **Starting Backend & Database**

### 1️⃣ **Start Database, Hasura & Backend**

```sh
docker compose up --build
```

### 2️⃣ **Verify Database**

```sh
docker logs wardwork_database
```

---

## ✅ **Useful Commands**

| Command                          | Description                      |
| -------------------------------- | -------------------------------- |
| `npm install`                    | Install dependencies             |
| `docker compose up --build`      | Start database, Hasura & Backend |
| `docker logs wardwork_database` | Check database logs              |

---

## 🎯 **Next Steps**

- Set up **GraphQL APIs** in Hasura
- Configure **authentication & authorization**
- Implement **Stellar blockchain transactions**

🚀 **WARDWORK** development in progress! 🚀
