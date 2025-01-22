# 🌍 Full-Stack Travel Website - Backend  

This branch contains the **backend** of the travel website, which powers the API and handles secure data transactions.  

## ✨ Features  
- **Authentication**: Secure user authentication and session management.  
- **API Routing**: Endpoints for user login, registration, and data retrieval. (FUTURE ENHANCEMENT 🟡) 

---

## 🚀 Technologies Used  
- **Backend Framework**: [Express.js](https://expressjs.com/) for API routing. (FUTURE ENHANCEMENT 🟡) 
- **Database**: [Firebase](https://firebase.google.com/) for user authentication and data storage.  

---

## 🛠️ Installation Steps  

1. **Clone the Repository**  
   ```bash
   git clone -b backend https://github.com/Merve-1/full-stack.git
   cd full-stack/backend
   ```

2. **Install Dependencies**  
   ```bash
   npm install
   ```

3. **Start the Backend Server**  
   ```bash
   npm start
   ```

4. **Set Up Firebase**  
   - Add your Firebase Admin SDK credentials in `firebaseConfig.json`:  
     ```json
     {
       "type": "service_account",
       "project_id": "YOUR_PROJECT_ID",
       "private_key_id": "YOUR_PRIVATE_KEY_ID",
       "private_key": "YOUR_PRIVATE_KEY",
       "client_email": "YOUR_CLIENT_EMAIL",
       "client_id": "YOUR_CLIENT_ID",
       "auth_uri": "https://accounts.google.com/o/oauth2/auth",
       "token_uri": "https://oauth2.googleapis.com/token",
       "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
       "client_x509_cert_url": "YOUR_CLIENT_X509_CERT_URL"
     }
     ```

5. **Test the API**  
   - Use tools like [Postman](https://www.postman.com/) to test endpoints at `http://localhost:3000`. (FUTURE ENHANCEMENT 🟡) 

---

