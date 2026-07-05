# Abhishek & Neha's Wedding Website — Development Guide

This repository contains the complete frontend and backend code for Abhishek & Neha's wedding invitation card and RSVP management dashboard.

---

## 📂 Project Structure

```
Wedding/
├── frontend/
│   ├── index.html        # Main wedding invitation page (with animations & music)
│   └── admin.html        # RSVP guest response dashboard
├── backend/
│   ├── server.js         # Express & Mongoose Node.js server
│   ├── package.json      # Dependencies and execution scripts
│   ├── .env              # Environment configurations (local settings)
│   └── .env.example      # Template for environment settings
└── README.md             # This instructions file
```

---

## ⚙️ Prerequisites

To run this application locally, you will need:
1. **Node.js** (v14 or higher recommended)
2. **MongoDB** (running locally on `mongodb://localhost:27017` or a remote MongoDB Atlas URI)
3. **Python 3** (used to serve frontend locally, or any web server of your choice)

---

## 🚀 How to Run Locally

### 1. Run the Backend Database & Server

1. Open your terminal and navigate to the `backend/` directory:
   ```bash
   cd backend
   ```
2. Install the backend dependencies:
   ```bash
   npm install
   ```
3. Make sure MongoDB is running on your machine. If you are using a cloud database (MongoDB Atlas), edit the `MONGODB_URI` inside `backend/.env`.
4. Start the Node.js server:
   ```bash
   npm start
   ```
   *For development with auto-reloads, you can use:*
   ```bash
   npm run dev
   ```
   *The backend will boot up on port `5001`.*

### 2. Run the Frontend Invitation Site

1. Open a new terminal window and navigate to the `frontend/` directory:
   ```bash
   cd frontend
   ```
2. Serve the static HTML files using Python:
   ```bash
   python3 -m http.server 3000
   ```
3. Open your browser and go to:
   - **Wedding Card:** [http://localhost:3000](http://localhost:3000)
   - **Admin RSVP Dashboard:** [http://localhost:3000/admin.html](http://localhost:3000/admin.html)

---

## 🔒 RSVP Dashboard Credentials (Local)

- **Passcode:** `AbhishekNeha2026` (configured in `backend/.env`)

---

## ☁️ Deployment Instructions

### Deploy the Backend (e.g., Render, Railway, Heroku)
1. Push the `backend/` subfolder (or the whole repo) to GitHub.
2. Link the repository to your host provider (e.g., [Render](https://render.com/)).
3. Set the **Root Directory** as `backend`.
4. Configure the following **Environment Variables**:
   - `PORT`: `5001` or let the platform choose.
   - `MONGODB_URI`: Set to your production MongoDB Atlas Connection String.
   - `ADMIN_PASSCODE`: Create a secure passcode for the admin dashboard.
   - `CLIENT_ID`: `AbhishekwedsNeha-wedding-2026`.

### Deploy the Frontend (e.g., Vercel, Netlify, GitHub Pages)
1. Deploy the `frontend/` folder to Vercel or Netlify.
2. In the deployed code, if you host the backend on a different domain (like `https://your-backend.onrender.com`), make sure to update the production URL in the frontend:
   - In `frontend/index.html` (around line 1135), replace `https://wedding-backend-k67l.onrender.com/api/rsvp` with your custom backend URL.
   - In `frontend/admin.html` (around line 430), replace `http://localhost:5001/api/rsvps` or `/api/rsvps` with your custom backend URL.
