# 📊 Zerodha Clone – Full Stack Trading Platform

A comprehensive full-stack clone of the Zerodha Kite trading platform, designed with the MERN stack. This project replicates real-world trading functionality such as user authentication, stock orders, holdings visualization, and a responsive dashboard. It's perfect for showcasing practical skills in backend, frontend, and full-stack integration.

>   🚀 **Live Demo**: [https://zerodha-clone-tau.vercel.app/](https://zerodha-clone-tau.vercel.app/) </br>
>   💻 **GitHub Repo**: [Zerodha Clone](https://github.com/krishnatejaswi2005/Zerodha-clone)

---

## 📌 Table of Contents

* [Tech Stack](#tech-stack)
* [Features](#features)
* [Data Visualization](#data-visualization)
* [Authentication](#authentication)
* [Learnings](#learnings)
* [Setup Instructions](#setup-instructions)
* [Deployment](#deployment)
* [Future Improvements](#future-improvements)


---

## ⚙️ Tech Stack

### Backend

* **Node.js** – JavaScript runtime environment
* **Express.js** – Web application framework
* **MongoDB Atlas** – NoSQL cloud database
* **JWT** – Secure token-based authentication
* **bcrypt.js** – For password hashing
* **cookie-parser** – Handling session cookies
* **dotenv** – Environment variable management

### Frontend

* **React.js** – Component-based UI library
* **Material UI** – UI component framework for React
* **Bootstrap** – CSS framework for responsiveness
* **React Hooks** – Functional component logic (state, effects)

### Charts and Analytics

* **Chart.js**
    * Doughnut Chart for Watchlist analysis
    * Vertical Bar Chart for Holdings distribution

### Hosting Services

* **Frontend**: Vercel
* **Backend**: Render / Railway
* **Database**: MongoDB Atlas (Cloud)

---

## ✨ Features

### ✅ Core Functionality

* User **Signup & Login** with JWT-based authentication
* **Watchlist** view of stocks with Buy/Sell options
* Interactive **Action Window** when placing orders
* Dashboard updates with holdings, order history (planned)
* **Session tokens** are stored in cookies until logout

---

## 📊 Data Visualization

* **Holdings Section**:
    * Vertical bar chart showing investment breakdown
* **Watchlist Section**:
    * Doughnut chart representing stock categories
* Built using `Chart.js`

### 💡 UI/UX

* Responsive UI using **Material UI** & **Bootstrap**
* Clean, minimalist design inspired by Zerodha Kite
* Smooth routing and component transitions using React

---

## 🔐 Authentication

Implemented using **JWT Tokens** and browser **cookies**:

* On successful login/signup, a JWT token is issued
* Stored securely in cookies until logout
* Backend validates token for protected routes
* Passwords are securely hashed using `bcrypt.js`

---

## 📚 Learnings

While building this project, I gained hands-on experience with:

* Full-stack development using the **MERN stack**
* **User authentication** using JWT and cookies
* REST API development and integration
* **React hooks** like `useState`, `useEffect`, and `useContext`
* Working with UI libraries: **Material UI** and **Bootstrap**
* Chart.js usage for **interactive data visualization**
* Deployment and environment configuration on **Vercel**, **Render**, and **Railway**

---

## 🛠️ Setup Instructions

>   Make sure you have **Node.js**, **npm**, and **MongoDB Atlas URI** configured.

### 1. Clone the Repository

```bash
git clone https://github.com/krishnatejaswi2005/Zerodha-clone.git
cd Zerodha-clone
```
### 2. Setup Backend
```bash
cd Backend
npm install
```
 Create a .env file in backend/ and add:
```bash
MONGO_URI=your_mongodb_atlas_uri
JWT_SECRET=your_jwt_secret
```

Start the backend server:
```bash
npm start
```
### 3. Setup Frontend
```bash
cd ../Frontend
npm install
npm run dev
```

### 4. Setup Dashboard
```bash
cd ../Dashboard
npm install
npm run dev
```

---

## ☁️ Deployment

    Frontend:
        Deployed on Vercel
        → https://zerodha-clone-tau.vercel.app/
    Backend:
        Deployed on Render or Railway
        → Ensure the server is connected with MongoDB Atlas and serving APIs

---

## 🔮 Future Improvements

    🔁 Real-time stock data using market APIs (like Alpha Vantage, Finnhub)
    🧠 Smart recommendations based on user's portfolio trends
    📱 Responsive mobile-first UI using Tailwind CSS
    🧾 Transaction history and order logs
    📑 User profile and portfolio settings
    🔒 Two-factor authentication (2FA)
