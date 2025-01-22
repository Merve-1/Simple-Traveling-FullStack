const admin = require("firebase-admin");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

// Initialize Firebase Admin SDK
const serviceAccount = require("./softwie-task-firebase-adminsdk-fbsvc-c4f1d15af3.json");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

// Routes
app.get("/api/users", async (req, res) => {
    try {
        const snapshot = await db.collection("users").get();
        const users = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        res.status(200).send(users);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

app.post("/api/register", async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await admin.auth().createUser({ email, password });
        res.status(201).send({ userId: user.uid });
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

app.post("/api/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await admin.auth().getUserByEmail(email);
        res.status(200).send({ userId: user.uid, email: user.email });
    } catch (error) {
        res.status(401).send({ error: error.message });
    }
});

app.post("/api/contact", async (req, res) => {
    const { name, email, message } = req.body;
    try {
        await db.collection("contacts").add({ name, email, message });
        res.status(201).send({ message: "Contact saved successfully" });
    } catch (error) {
        console.error("Firestore error:", error);
        res.status(400).send({ error: error.message });
    }
});


