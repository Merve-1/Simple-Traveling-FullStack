import React, { useState } from "react";
import "./styles/home.scss";
import { db } from "./firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

function Home() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [questions, setQuestions] = useState("");
    const [message, setMessage] = useState("");
    const [messageType, setMessageType] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage("");
        setMessageType("");

        if (!name || !email || !questions) {
            setMessage("All fields are required!");
            setMessageType("error");
            return;
        }

        try {
            await addDoc(collection(db, "contact"), {
                FullName: name,
                Email: email,
                Questions: questions,
                timestamp: serverTimestamp(),
            });
            setMessage("Thank you for contacting us! We will get back to you soon.");
            setMessageType("success");
            setName("");
            setEmail("");
            setQuestions("");
        } catch (error) {
            setMessage("An error occurred while submitting your request. Please try again.");
            setMessageType("error");
            console.error("Error adding document: ", error);
        }
    };

    return (
        <div className="homepage-container">
            <header className="header">
                <div className="logo">
                    <img src="src/assets/logoH.png" alt="Logo" className="logo-icon" />
                    <span>OLAF</span>
                </div>
                <nav className="navigation">
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#price">Prices</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </header>
            <main className="main">
                <section className="hero-section" id="home">
                    <img src="src/assets/image1.png" alt="AirPlane" className="hero-icon" />
                    <h1>Travel with OLAF in Just One Click!</h1>
                </section>
                <section className="about-section" id="about">
                    <section className="text-sec">
                        <h2>About OLAF</h2>
                        <p>OLAF Company was established in 1999 and has since offered 
                            more than 150 travel options across the globe. We provide 
                            a range of services, including private flights, business-class 
                            seats, and standard seating options, ensuring a comfortable 
                            and tailored travel experience for all our customers.
                        </p>
                    </section>
                    <section className="img-sec">
                        <img src="src/assets/image2.png" alt="about" className="about-icon" />
                    </section>
                </section>
                <section className="pricing-section" id="price">
                    <h2>Pricing</h2>
                    <section className="text-sec">
                        <ul>
                            <li>Private Flight: $10,000</li>
                            <li>Business-Class: $500</li>
                            <li>Standard Seat $100</li>
                        </ul>
                    </section>
                    <section className="img-sec">
                        <img src="src/assets/image3.png" alt="pricing" className="pricing-icon" />
                    </section>
                </section>
                <section className="contact-section" id="contact">
                    <h2>Contact</h2>
                    {message && (
                        <p className={`message ${messageType}`}>
                            {message}
                        </p>
                    )}
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="Full Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <textarea
                            placeholder="Questions"
                            value={questions}
                            onChange={(e) => setQuestions(e.target.value)}
                        />
                        <button type="submit">Submit</button>
                    </form>
                </section>
            </main>
        </div>
    );
}

export default Home;
