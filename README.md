# 🎵 MoodyPlayerProject

MoodyPlayer is a full-stack web application that plays music tailored to your current mood. By mapping songs to different emotional states (such as Happy, Relaxed, Energetic, Sad, or Focused), the player provides a curated listening experience designed to match or shift how you feel.

---

## 🚀 Key Features

*   **Mood-Based Categorization**: Easily browse and filter music by emotional themes.
*   **User Accounts & Personalization**: Register and log in securely to save favorite tracks and custom playlists.
*   **Dynamic Audio Player**: Responsive audio player with playback controls, progress bar, and volume settings.
*   **Curated Playlists**: Personalized recommendation lists based on user preferences and mood selection.

---

## 🛠️ Tech Stack

### Backend
*   **Node.js & Express**: Fast, unopinionated, minimalist web framework.
*   **MongoDB & Mongoose**: Document-based NoSQL database with object data modeling (ODM) for schema validation.
*   **Authentication**: JWT (JSON Web Tokens) for stateless user sessions.
*   **Security**: Password hashing using `bcryptjs`.

### Frontend
*   **React (v19)**: Component-based UI library.
*   **Vite**: Next-generation frontend tooling for rapid development and building.
*   **CSS**: Modern, clean vanilla CSS layout and styling.

---

## 📁 Project Structure

```
MoodyPlayerProject/
├── backend/                   # Express REST API
│   ├── src/
│   │   ├── config/            # DB configuration
│   │   ├── controllers/       # Route handlers
│   │   ├── middlewares/       # Auth/Validation middlewares
│   │   ├── models/            # Mongoose Schemas (User, Song, Playlist)
│   │   ├── routes/            # Express routes
│   │   ├── services/          # Business logic
│   │   ├── utils/             # Helper utilities
│   │   ├── app.js             # Express app config
│   │   └── server.js          # App server and DB connection
│   └── package.json
└── frontend/                  # React Frontend
    ├── src/                   # React components, contexts, hooks, assets
    └── package.json
```

---

## ⚙️ Getting Started

### Prerequisites
*   Node.js (v18 or higher)
*   MongoDB Cluster or local installation

### Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `backend/` root directory and fill in your details:
   ```env
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Vite development server:
   ```bash
   npm run dev
   ```
