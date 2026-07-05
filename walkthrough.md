# Walkthrough: Abhishek & Neha's Wedding Website & RSVP Dashboard

We have completely set up the development package for **Abhishek & Neha's** wedding invitation website. The files are organized in a standard, production-ready structure under the [Wedding/](file:///Users/abhishekvarshney/Wedding%20) folder.

## 📂 Project Layout

### 1. Frontend ([Wedding/frontend/](file:///Users/abhishekvarshney/Wedding%20/frontend))
- **[index.html](file:///Users/abhishekvarshney/Wedding%20/frontend/index.html):** The main invitation card with name adjustments (*Neha & Abhishek*), family details, the scratch reveal target date (*24 Nov 2026*), event schedules (*22, 23, 24 Nov 2026*), and background music controls.
  - *Dynamic API Call:* We modified the JavaScript fetch block. If running locally, it targets `http://localhost:5001/api/rsvp`. Otherwise, it falls back to the production API.
  - *Monogram Wax Seal Cover Overlay:* Integrated your custom edited video (`Entry_Video_Best_Wedding_Invite_edited_v4_2.mp4` from the Desktop) containing the pre-rendered **N&A** monogram and **The Varshney family** text. Because the video has this built-in, we removed the static image overlay and positioned the animated "Tap to Reveal" indicator directly above the video's custom wax seal.
  - *Local Media Assets:* Downloaded all remote video and audio files from the CDN and saved them to [assets/](file:///Users/abhishekvarshney/Wedding%20/frontend/assets). All references in the HTML are updated to load these files locally, making the website offline-ready!
  - *Ceremonies Customization:* 
    - **Haldi (Replaced Sangeet):** Converted the Sangeet ceremony card to **Haldi**. Copied `haldi.mp4` from your Desktop folder to **[haldi.mp4](file:///Users/abhishekvarshney/Wedding%20/frontend/assets/haldi.mp4)**. Since this video already contains the correct text, names, date, and venue details fully rendered inside the video file itself, we removed the HTML overlay card completely to let the video's custom design show natively. Ceremony subtitle date updated to **22nd Nov, 2026 (Sunday)**. Venue set to *Mitra Nagar, Aligarh* with Maps link `https://maps.app.goo.gl/pM7mTBV8XVaS5GCH8`.
    - **Mehndi:** Added a brand new ceremony card for **Mehndi** placed directly below Haldi. Set the date to **23rd Nov, 2026 (Monday)**. Copied your newly edited Mehndi video (`mehndi.mp4` from your Desktop folder) to **[mehndi.mp4](file:///Users/abhishekvarshney/Wedding%20/frontend/assets/mehndi.mp4)**. Since this video already contains the correct text, names, date, and venue details fully rendered inside the video file itself, we removed the HTML overlay card completely to let the video's custom design show natively. Venue set to *Mitra Nagar, Aligarh* with Maps link `https://maps.app.goo.gl/pM7mTBV8XVaS5GCH8`.
    - **Sangeet:** Added the **Sangeet** ceremony card back directly below Mehndi. Set the date to **23rd Nov, 2026 (Monday)**. Copied your newly edited Sangeet video (`sangeet .mp4` from your Desktop folder) to **[sangeet.mp4](file:///Users/abhishekvarshney/Wedding%20/frontend/assets/sangeet.mp4)**. Since this video already contains the correct text, names, date, and venue details fully rendered inside the video file itself, we removed the HTML overlay card completely to let the video's custom design show natively. Venue set to *Mitra Nagar, Aligarh* with Maps link `https://maps.app.goo.gl/pM7mTBV8XVaS5GCH8`.
    - **Engagement (Replaced Reception):** Converted the Reception slot to **Engagement** and placed it before the Marriage card. Copied your newly edited Engagement video (`Engagement.mp4` from your Downloads folder) to **[Enagement.mp4](file:///Users/abhishekvarshney/Wedding%20/frontend/assets/Enagement.mp4)**. Since this video already contains the correct text, names, date, and venue details fully rendered inside the video file itself, we removed the HTML overlay card completely to let the video's custom design show natively. Ceremony subtitle date updated to **24th Nov, 2026 (Tuesday)**. Venue set to *Hotel The Royal Residency, Aligarh* with Maps link `https://maps.app.goo.gl/SvtP2xKaUzCTSebm7`.
    - **Marriage:** Converted the Marriage card to the night version and placed it after the Engagement card. Copied `night.mp4` from your Desktop folder to **[marriage_night.mp4](file:///Users/abhishekvarshney/Wedding%20/frontend/assets/marriage_night.mp4)**. Since this video already contains the correct text, names, date, and venue details fully rendered inside the video file itself, we removed the HTML overlay card completely to let the video's custom design show natively. Venue set to *Hotel The Royal Residency, Aligarh* with Maps link `https://maps.app.goo.gl/SvtP2xKaUzCTSebm7`.
- **[admin.html](file:///Users/abhishekvarshney/Wedding%20/frontend/admin.html):** A brand new guest dashboard. It is passcode-protected and connects to the backend to retrieve and display RSVP statistics, totals, guest counts, and guest advice tables in real-time.

### 2. Backend ([Wedding/backend/](file:///Users/abhishekvarshney/Wedding%20/backend))
- **[server.js](file:///Users/abhishekvarshney/Wedding%20/backend/server.js):** An Express and Mongoose server defining a MongoDB schema for guest replies. It supports:
  - `POST /api/rsvp`: Submits responses and locks them to a unique client identifier (`AbhishekwedsNeha-wedding-2026`).
  - `GET /api/rsvps`: Accesses responses, protected by a passcode header (`x-admin-passcode`).
- **[package.json](file:///Users/abhishekvarshney/Wedding%20/backend/package.json):** Lists script runs (`npm start` and `npm run dev`) and dependencies (`mongoose`, `express`, `cors`, `dotenv`).
- **[.env](file:///Users/abhishekvarshney/Wedding%20/backend/.env):** Pre-configured environment variables for local database connection and default dashboard passcodes.

### 3. Readme ([Wedding/README.md](file:///Users/abhishekvarshney/Wedding%20/README.md))
- A comprehensive developer guide explaining database dependencies, configuration files, setup guides for local runs, and final deployment tips to staging/production hosts.

---

## 🚀 Running and Testing Locally

### 1. Serve Frontend
A python web server is running on port **3000** serving the frontend files:
- **Invitation Card:** [http://localhost:3000](http://localhost:3000)
- **Guest Admin Dashboard:** [http://localhost:3000/admin.html](http://localhost:3000/admin.html)

### 2. Run Backend
To boot up the Node backend API:
1. Open a terminal and run `cd backend`
2. Make sure MongoDB is active on your system (default `mongodb://localhost:27017`)
3. Run `npm start` to run on port **5001**
