# MoodyPlayerProject Progress Tracking

## 📁 Project Structure Overview
A full-stack React and Express application designed to play music based on the user's mood.

```
MoodyPlayerProject/
├── backend/                  # Node.js/Express Backend (ESM)
│   ├── src/
│   │   ├── config/
│   │   │   └── db.js         # MongoDB connection configuration
│   │   ├── controllers/      # Empty (controllers to handle requests)
│   │   ├── middlewares/      # Empty (middleware for auth, logging, etc.)
│   │   ├── models/           # Empty (database schemas)
│   │   ├── routes/           # Empty (API endpoints)
│   │   ├── services/         # Empty (business logic services)
│   │   ├── utils/            # Empty (utility helpers)
│   │   ├── app.js            # Express app initialization
│   │   └── server.js         # Entry point (Server listener & DB connection trigger)
│   ├── .env                  # Port, MongoDB URI, and JWT Secret
│   ├── package.json          # Express, Mongoose, Dotenv, Cors, Nodemon
│   └── package-lock.json
├── frontend/                 # Vite + React Frontend
│   ├── src/                  # React source files
│   ├── package.json          # React, React-DOM, Vite, ESLint
│   └── ...
└── PROGRESS.md               # Current file (Project progress tracker)
```

---

## 🛠️ Completed Setup

### 1. Backend Server Configuration
*   Initialized Express in [`app.js`](file:///E:/personal_learning/Backend/Backend-Express/Projects/MoodyPlayerProject/backend/src/app.js).
*   Configured [`server.js`](file:///E:/personal_learning/Backend/Backend-Express/Projects/MoodyPlayerProject/backend/src/server.js) to:
    *   Load environment variables using `dotenv`.
    *   Start the database connection.
    *   Listen on port `5000` (or `PORT` from `.env`).

### 2. Database Configuration
*   Created [`db.js`](file:///E:/personal_learning/Backend/Backend-Express/Projects/MoodyPlayerProject/backend/src/config/db.js) using `mongoose` to connect to MongoDB.
*   Added connection listeners (`connected`, `disconnected`, `error`) to track database connection health.
*   Configured the `.env` file with placeholders for the MongoDB URI and JWT secrets.

### 3. User Model Configuration
*   Installed `bcryptjs` and `bcrypt` dependencies for password hashing.
*   Created the User schema in [`User.js`](file:///E:/personal_learning/Backend/Backend-Express/Projects/MoodyPlayerProject/backend/src/models/User.js).
*   Implemented a pre-save hook to hash passwords automatically before storing.
*   Added a custom schema method (`comparePassword`) to verify user passwords securely.

---

## 🚀 Next Steps

### 1. Authentication Flow (Current Task)
*   [ ] Create authentication controller (`authController.js`) to handle User Registration and Login.
*   [ ] Setup authentication routes (`authRoutes.js`) to map to `/api/auth/register` and `/api/auth/login`.
*   [ ] Import the authentication routes in [`app.js`](file:///E:/personal_learning/Backend/Backend-Express/Projects/MoodyPlayerProject/backend/src/app.js).
*   [ ] Create JWT middleware (`authMiddleware.js`) to secure specific endpoints.

### 2. Core MoodyPlayer Features
*   [ ] Design the Song/Playlist Schema (attributes like title, artist, mood tags, file URL).
*   [ ] Create endpoints to fetch music by selected moods.

