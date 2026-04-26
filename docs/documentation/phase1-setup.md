# 🚀 Phase 1: Environment Setup (Dockerized Full-Stack Foundation)

## 📌 Objective

Set up a **production-ready, multi-service architecture** using Docker for:

* Frontend
* Backend
* AI Service
* (Future: Database)

---

## 🧱 Project Structure

```
ai-fullstack-project/
│
├── frontend/          # UI (React / Static)
├── backend/           # Node.js API
├── ai-service/        # Python Flask AI service
├── database/          # SQL scripts (future)
├── infra/             # Docker & orchestration
├── docs/              # Documentation
└── README.md
```

---

## 🐳 Docker Architecture Overview

* Each service runs in its own container
* Containers communicate via Docker network
* Dependencies are installed inside containers

---

## ⚙️ Services Setup

### 🟢 Backend (Node.js)

**Features:**

* Express server
* Runs on port `5000`

**Key Files:**

* `index.js`
* `package.json`

---

### 🌐 Frontend

**Features:**

* Basic static server using `serve`
* Runs on port `3000`

**Key Files:**

* `index.html`
* `package.json`

---

### 🤖 AI Service (Python Flask)

**Features:**

* Simple Flask API
* Runs on port `8000`

**Key Files:**

* `app.py`
* `requirements.txt`

---

## 🐳 Docker Configuration

### 🔹 Dockerfiles

Each service includes:

* Base image (Node / Python)
* Working directory setup
* Dependency installation
* Port exposure
* Startup command

---

### 🔹 docker-compose.yml

Located in `/infra`

**Responsibilities:**

* Build all services
* Define ports
* Start containers together

---

## ▶️ Running the Project

```bash
cd infra
docker-compose up --build
```

---

## 🌍 Service Endpoints

| Service  | URL                   |
| -------- | --------------------- |
| Frontend | http://localhost:3000 |
| Backend  | http://localhost:5000 |
| AI       | http://localhost:8000 |

---

## 🧠 Key Learnings

### ✅ Docker Concepts

* Containers isolate environments
* No need for local dependency installation
* Portable and consistent setup

---

### ✅ Debugging Lessons

| Issue              | Cause                   | Fix                  |
| ------------------ | ----------------------- | -------------------- |
| Docker not running | Engine stopped          | Start Docker Desktop |
| Wrong build path   | Incorrect relative path | Use `../`            |
| JSON parse error   | Invalid `package.json`  | Fix JSON format      |
| Dependency error   | Typo (`flaska`)         | Correct to `flask`   |
| Port conflict      | Same port used          | Separate ports       |

---

### ✅ Best Practices Followed

* Clean folder structure
* Step-by-step commits
* Service isolation
* Minimal working setup (MVP)
* Proper debugging approach

---

## ⚠️ Current Limitations

* No database integration yet
* No API communication between services
* No authentication
* No production configs

---

## 🔮 Next Phase (Phase 2)

* System Design (HLD + LLD)
* API Contracts
* Database Schema
* Service Communication
* AI Integration Flow

---

## 🏁 Summary

Phase 1 establishes a **strong foundation**:

* Dockerized full-stack architecture
* Multiple services running independently
* Ready for scaling and real-world features

---

🔥 This setup is now **industry-level ready for expansion**
