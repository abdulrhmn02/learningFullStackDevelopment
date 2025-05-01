
---

```markdown
# 🔐 RBAC App – Role-Based Authentication System

This is a secure authentication system built with **Node.js**, **Express**, and **JWT** implementing:
- 🔁 Access & Refresh Tokens
- 🚪 Login & Logout
- 👥 Role-Based Access Control (RBAC)
- 🍪 Secure Cookie Handling

---

## 📁 Project Structure

```
rbac-app/
├── controllers/
│   └── authController.js
├── middlewares/
│   ├── authMiddleware.js
│   └── roleMiddleware.js
├── models/
│   └── User.js
├── routes/
│   └── authRoutes.js
├── .env
├── app.js
└── package.json
```

---

## 🚀 Features

- 🔐 **JWT Authentication**: Uses short-lived access tokens and long-lived refresh tokens
- 🔄 **Refresh Tokens**: Automatically generate a new access token when the old one expires
- 👋 **Logout**: Clears the refresh token securely from cookies
- 👮 **RBAC**: Middleware to protect routes based on user roles (e.g., admin, user)
- 🛡️ **Secure Cookies**: Stores refresh token in HTTP-only, secure cookies

---

## 🧪 API Endpoints

| Method | Route             | Description                  | Access        |
|--------|------------------|------------------------------|---------------|
| POST   | `/register`       | Register a new user          | Public        |
| POST   | `/login`          | Login and get tokens         | Public        |
| POST   | `/refresh-token`  | Get new access token         | Public (cookie-based) |
| GET    | `/dashboard`      | User dashboard (protected)   | Authenticated |
| GET    | `/admin`          | Admin panel (RBAC protected) | Admin only    |
| POST   | `/logout`         | Clear refresh token cookie   | Authenticated |

---

## ⚙️ Setup & Run

1. **Clone the repo**
```bash
git clone https://github.com/your-username/rbac-app.git
cd rbac-app
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**

Create a `.env` file:
```
JWT_SECRET=your_jwt_secret_key
REFRESH_TOKEN_SECRET=your_refresh_secret_key
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

4. **Start the server**
```bash
npm run dev
```

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB (via Mongoose)
- JWT (jsonwebtoken)
- bcryptjs
- dotenv
- cookie-parser

---

## ✅ To Do

- [ ] Google OAuth Login
- [ ] Frontend integration
- [ ] Add password reset
- [ ] Token revocation logic

---

## 🙌 Author

**Abdul Rahman**  
Building full-stack apps while learning in public.  
📌 _#100DaysOfCode | #NodeJS | #FullStack_

---

