import React, { useState } from "react";
import Colors from "../constants/Colors";
import { useNavigate } from "react-router-dom";
import "../styles/MobileDesign.scss";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

function MobileDesignRegister() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        if (!email || !password) {
            setError("Email and password cannot be empty");
            return;
        }
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            console.log("Registered user: ", userCredential.user);
            navigate("/home");
        } catch (err) {
            setError(err.message);
        }
    };

    const handleLoginClick = () => {
        navigate("/");
    };

    return (
        <div
            className="mobile-container"
            style={{ background: Colors.backgroundGradient }}
        >
            <header className="header">
                <div className="logo">
                    <img src="src/assets/logoH.png" alt="Logo" className="logo-icon" />
                    <span style={{ color: Colors.primary }}>OLAF</span>
                </div>
            </header>
            <main className="main">
                <div className="left-section">
                    <h1 className="tagline">
                        Wherever<br />
                        You Go<br />
                        Go with<br />
                        Us
                    </h1>
                </div>
                <div className="right-section">
                    <div
                        className="login-card"
                        style={{ boxShadow: `0 4px 10px ${Colors.shadow}` }}
                    >
                        <div className="tabs">
                            <button
                                className="tab active"
                                style={{
                                    background: Colors.primary,
                                    color: Colors.white,
                                }}
                            >
                                Sign Up
                            </button>
                            <button className="tab" onClick={handleLoginClick}>
                                Log In
                            </button>
                        </div>
                        {error && <p className="error-message">{error}</p>}
                        <form>
                            <div className="input-group">
                                <input
                                    type="email"
                                    placeholder="Enter email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="input-group">
                                <input
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <span className="eye-icon">👁</span>
                            </div>
                            <a
                                href="#forget"
                                className="forget-password"
                                style={{ color: Colors.primary }}
                            >
                                Forget Password?
                            </a>
                            <br />
                            <button
                                type="submit"
                                className="login-btn"
                                onClick={handleRegister}
                                style={{
                                    background: Colors.primary,
                                    color: Colors.white,
                                }}
                            >
                                Sign Up
                            </button>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default MobileDesignRegister;
