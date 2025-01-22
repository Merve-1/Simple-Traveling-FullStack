# 🌍 Full-Stack Travel Website

A full-stack travel website built to streamline travel experiences. It provides a clean and modern interface for users to log in, sign up, and access a personalized home page.

## ✨ Features
- **Login Page**: Users can securely log in to their accounts.
- **Sign-Up Page**: New users can register with email and password.
- **Home Page**: Displays a personalized dashboard for travelers.

---

## 🎨 Figma Design
Check out the Figma design for this project [here](https://www.figma.com/design/eqaOdaFCD4302gwVGcQ2Sf/Pages?node-id=0-1&t=fPkZUFvOLtqpxwjR-1).

---

## 🚀 Technologies Used
- **Frontend**:  
  - [React](https://reactjs.org/) with [Vite](https://vitejs.dev/) for fast development.
  - [Sass](https://sass-lang.com/) for styling.
- **Backend**:  
  - [Express.js](https://expressjs.com/) for API routing.
- **Database**:  
  - [Firebase](https://firebase.google.com/) for user authentication and data storage.

---

## 🛠️ Installation Steps

1. **Clone the Repository**
   ```bash
   git clone https://github.com/Merve-1/full-stack.git
   cd full-stack
   ```

2. **Set Up the Frontend**
   - Navigate to the `frontend` folder:
     ```bash
     cd frontend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Start the development server:
     ```bash
     npm run dev
     ```

3. **Set Up the Backend**
   - Navigate to the `backend` folder:
     ```bash
     cd backend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Start the Express server:
     ```bash
     npm start
     ```

4. **Connect Firebase**
   - Create a Firebase project and enable authentication (email/password).
   - Add your Firebase configuration to the frontend in `firebase.js`:
     ```javascript
     const firebaseConfig = {
       apiKey: "YOUR_API_KEY",
       authDomain: "YOUR_AUTH_DOMAIN",
       projectId: "YOUR_PROJECT_ID",
       storageBucket: "YOUR_STORAGE_BUCKET",
       messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
       appId: "YOUR_APP_ID",
     };

     export default firebaseConfig;
     ```

5. **Run the App**
   - Ensure both frontend and backend are running.
   - Open the app in your browser (e.g., `http://localhost:5173`).

---

## 📸 GIF Preview
![demo](https://github.com/user-attachments/assets/adcb4516-d18a-4806-82c8-0d0a3817cc04)


---

## 📂 Folder Structure
```
project/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── assets/
│   │   ├── styles/
│   │   ├── constants/
│   │   ├── App.jsx
│   │   ├── Home.jsx
│   │   └── firebase.js
│   └── package.json
├── backend/
│   ├── function
│   ├── public
│   ├── index.js
│   └── package.json
└── README.md
```
