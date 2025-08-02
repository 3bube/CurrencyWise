# 💸 CurrencyWise Copilot – Personal Finance Manager (Multi-Currency)

CurrencyWise is a **full-stack global personal finance management** app with support for **multi-currency budgeting, expense tracking, and real-time exchange rates**.

---

## 🏗️ Architecture Overview

CurrencyWise uses a **monorepo structure** with a clean separation of concerns:

- `frontend/` – Built with **Next.js 15+**, **TypeScript**, **App Router**, and **shadcn/ui**
- `server/` – Backend API using **Express.js + TypeScript**, with CommonJS compilation
- **Database**: PostgreSQL (transactional data), Redis (cached exchange rates)

---

## 🔧 Development Setup

### Prerequisites

Make sure you have the following installed:

- Node.js (v18+)
- Docker (optional, for PostgreSQL/Redis)
- Git
- pnpm / npm / bun
- Redis + PostgreSQL (local or Docker)
- Firebase Auth or Auth0 for authentication

---

### 🔥 Quick Start

#### Clone and Install

```bash
git clone https://github.com/your-username/currencywise.git
cd currencywise
Run Everything with Docker (Recommended)
bash
Copy
Edit
docker-compose up --build
Manual Run (Dev Mode)
Frontend (Next.js)
bash
Copy
Edit
cd frontend
npm install
npm run dev  # Uses turbopack
Server (Express + TypeScript)
bash
Copy
Edit
cd server
npm install
npm run dev  # Uses nodemon + ts-node
📂 Folder Structure
bash
Copy
Edit
currencywise/
├── frontend/           # Next.js App Router project
│   ├── app/            # Route-based layout structure
│   ├── components/     # UI + layout components
│   └── tailwind.config.ts
├── server/             # Express backend
│   ├── src/
│   │   ├── routes/
│   │   ├── controllers/
│   │   ├── config/
│   │   └── middlewares/
│   └── .env
├── docker-compose.yml
├── README.md
└── github-instruction.md
🔐 Environment Setup
frontend/.env
env
Copy
Edit
VITE_API_URL=http://localhost:5000
VITE_FIREBASE_API_KEY=your_firebase_key
server/.env
env
Copy
Edit
PORT=5000
DATABASE_URL=postgres://postgres:postgres@localhost:5432/currencywise
REDIS_URL=redis://localhost:6379
JWT_SECRET=your_jwt_secret
EXCHANGE_API_URL=https://api.exchangerate.host/latest
🎯 Project-Specific Conventions
🔹 Frontend Architecture
App Router – All routes live inside app/, following file-based routing

Layouts – Shared dashboard layout in app/dashboard/layout.tsx

Component Patterns

components/ui/ – shadcn/ui primitives (Button, Card, Dialog, etc.)

components/layout/ – Sidebar, Topbar

components/modals/ – Modals (Add Transaction, etc.)

🔹 Server Structure
Entry Point: src/server.ts loads src/app.ts

Error Handling: Centralized in src/middlewares/errorHandler.ts

Config: All environment settings in src/config/config.ts

Compiled Output: Outputs to dist/ using CommonJS

💱 Currency & Data Handling
Currency Logic
ts
Copy
Edit
account.currency === "USD" ? "$" : account.currency === "EUR" ? "€" : "£";
Sample Data Models
ts
Copy
Edit
// Transaction
{
  id, description, amount, currency, category, date, type
}

// Account
{
  name, balance, currency, icon
}

// Budget
{
  category, budgetAmount, spentAmount, currency, period, status
}

// Goal
{
  title, targetAmount, currentAmount, currency, deadline, status
}
🔌 Key Dependencies
Frontend
Framework: Next.js 15+

UI: Tailwind CSS + shadcn/ui (Radix)

Icons: Lucide React

State: Zustand (optional)

API: Axios

PWA (optional): Workbox

Backend
Framework: Express.js

Validation: Zod

DB Clients: pg, redis

Security: JWT, Helmet, CORS, express-rate-limit

⚙️ Developer Workflows
✅ Add New Route (Frontend)
Create page.tsx inside app/dashboard/your-page/

Add it to components/layout/Sidebar.tsx

Wrap in dashboard layout

✅ Add New UI Component
Use npx shadcn add [component] (for primitive components)

Custom logic? Create in components/your-section/

Always use interface Props and enforce currency structure

✅ Add New API Endpoint (Backend)
Create route in src/routes/

Connect to src/app.ts

Handle validation with Zod and wrap errors with middleware

🧪 Testing
Frontend
bash
Copy
Edit
cd frontend
npx cypress open  # or npm run test
Backend
bash
Copy
Edit
cd server
npm run test
📊 API Docs
Auto-generated Swagger docs will be available at:

bash
Copy
Edit
http://localhost:5000/api/docs
🛠️ Troubleshooting
Ports Busy?

bash
Copy
Edit
lsof -i :5000
kill -9 <PID>
Docker Permissions?

Restart Docker Desktop or try sudo docker-compose up

DB Not Connecting?

Confirm your .env matches PostgreSQL container or service

🙋‍♀️ Contributing
Fork the repo

Create a new branch: git checkout -b feature/your-feature

Make changes and commit: git commit -m "Add: feature XYZ"

Push and open a PR

✨ Credits
Created by Ugbor Ebubechukwu
Open for collaboration and improvement.
Give it a ⭐ if you find it helpful!
```
