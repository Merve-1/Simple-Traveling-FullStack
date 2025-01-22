# 🌍 Full-Stack Travel Website - Frontend  

This branch contains the **frontend** of the travel website, providing a modern and responsive user interface for travelers.  

## ✨ Features  
- **Login Page**: Secure login functionality with Firebase authentication.  
- **Sign-Up Page**: User registration with email and password.  
- **Home Page**: Personalized dashboard displaying user data and travel options.  

---

## 🚀 Technologies Used  
- **Frontend Framework**: [React](https://reactjs.org/) with [Vite](https://vitejs.dev/) for fast development.  
- **Styling**: [Sass](https://sass-lang.com/) for modern, maintainable CSS.  
- **State Management**: React Hooks.  

---

## 🛠️ Installation Steps  

1. **Clone the Repository**  
   ```bash
   git clone -b frontend https://github.com/Merve-1/full-stack.git
   cd full-stack/frontend
   ```

2. **Install Dependencies**  
   ```bash
   npm install
   ```

3. **Run the Development Server**  
   ```bash
   npm run dev
   ```

4. **Connect Firebase**  
   - Add your Firebase configuration to the `firebase.js` file:  
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

5. **Open the App**  
   - Visit the app at `http://localhost:5173` in your browser.  

---
