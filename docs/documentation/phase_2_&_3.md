# 🚀 MediSync AI — Phase 2, 3 & 4 Development Guide

---

# 🧩 PHASE 2 — Backend Setup & Database Schema

## 🎯 Objective

Set up a scalable backend with:

* Express server
* PostgreSQL database
* Sequelize ORM
* Clean architecture

---

## 🏗️ Backend Setup

### Initialize Project

```bash
npm init -y
npm install express dotenv cors pg sequelize
npm install --save-dev nodemon
```

---

### Folder Structure

```
backend/
 ├── src/
 │   ├── config/
 │   ├── models/
 │   ├── controllers/
 │   ├── routes/
 │   ├── services/
 │   ├── middlewares/
 │   ├── utils/
 │   └── app.js
 ├── server.js
 ├── .env
 └── package.json
```

---

### Environment Variables

```
PORT=5000
DB_HOST=localhost
DB_USER=postgres
DB_PASSWORD=postgres
DB_NAME=medisync_ai
DB_PORT=5432
JWT_SECRET=mysecretkey
```

---

## 🗄️ Database Setup (PostgreSQL + Sequelize)

### Connection (`config/db.js`)

* Initialize Sequelize
* Connect using env variables

---

## 🧱 Database Schema Design

### Tables

#### 1. Users

* id (UUID)
* name
* email (unique)
* password
* role
* timestamps

---

#### 2. Medical Reports

* id
* user_id (FK)
* file_url
* report_type
* timestamps

---

#### 3. Report Data

* id
* report_id (FK)
* parameter_name
* value
* unit
* normal_range

---

#### 4. Comparisons

* id
* user_id
* report1_id
* report2_id
* result_summary

---

#### 5. AI Insights

* id
* report_id
* insight_text
* severity_level

---

## 🔗 Relationships

```
User → MedicalReports → ReportData
User → Comparisons → Reports
Report → AIInsights
```

---

## ⚙️ Sequelize Setup

* Define models in `/models`
* Add relationships using:

  * `hasMany`
  * `belongsTo`

---

## 🔄 Sync Database

```js
await connectDB();
await sequelize.sync({ alter: true });
```

---

## ✅ Outcome of Phase 2

* Backend server running
* PostgreSQL connected
* Tables created
* Relationships defined
* Scalable architecture ready

---

# 🔐 PHASE 3 — Authentication System

## 🎯 Objective

Implement secure authentication using:

* Password hashing
* JWT tokens
* Auth APIs

---

## 📦 Install Dependencies

```bash
npm install bcrypt jsonwebtoken
```

---

## 🔑 Authentication Flow

```
Register → Hash Password → Store in DB
Login → Verify Password → Generate JWT
```

---

## 📁 Structure

```
controllers/auth.controller.js
routes/auth.routes.js
middlewares/auth.middleware.js
```

---

## 🧩 Features Implemented

### 1. Register API

* Check existing user
* Hash password using bcrypt
* Store user
* Return JWT

---

### 2. Login API

* Validate user
* Compare password
* Generate JWT

---

### 3. JWT Token

* Contains user id + email
* Used for protected routes

---

### 4. Auth Middleware

* Extract token from header
* Verify JWT
* Attach user to request

---

## 🔒 Example Protected Header

```
Authorization: Bearer <token>
```

---

## ✅ Outcome of Phase 3

* Secure authentication system
* Encrypted passwords
* Token-based access control
* Middleware for route protection

---

# 🔒 PHASE 4 — Protected Routes & Report Upload

## 🎯 Objective

* Restrict access to authenticated users
* Allow users to create reports
* Connect auth with database

---

## 🛡️ Protected Route Example

```
GET /api/user/profile
```

* Requires JWT
* Returns user info

---

## 📄 Report Upload API

### Endpoint

```
POST /api/reports
```

### Body

```json
{
  "file_url": "report1.pdf",
  "report_type": "blood_test"
}
```

---

## ⚙️ Functionality

* Uses `authMiddleware`
* Extracts user from token
* Stores report linked to user

---

## 🔗 Flow

```
User → Login → Token
     → Create Report → Stored in DB
```

---

## ✅ Outcome of Phase 4

* Protected APIs working
* User-specific data handling
* Report creation system ready
* Backend becomes functional

---

# 🧠 Final Summary

## What You Built

✔ Scalable backend architecture
✔ Relational database design
✔ Authentication system (JWT)
✔ Protected APIs
✔ Core business logic (reports)

---

## What’s Next

* File upload (Cloud / Storage)
* Data extraction (OCR / parsing)
* Comparison engine
* AI insights generation

---

# 🚀 Project Status

```
Foundation ✅
Auth System ✅
Core Backend Flow ✅
Next: AI + Data Processing 🚀
```

---
