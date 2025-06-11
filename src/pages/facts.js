import { useState, useEffect } from "react";
import CoreNavbar from "../components/navbar";

export default function Facts() {
    const [facts, setFacts] = useState([]);

    useEffect(() => {
        const apiURL = "https://meowfacts.herokuapp.com/";
        fetch(apiURL)
            .then((response) => response.json())
            .then((data) => {
                setFacts(data.data);
            })
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    return (
        <div style={styles.container}>
            <CoreNavbar />

            <h1 style={styles.title}>🐾 Kočičí Fakta</h1>

            <img
                src="https://http.cat/200.jpg"
                alt="Success Cat"
                style={styles.image}
            />

            <p style={styles.subtitle}>Něco o tvých chlupatých kámoších:</p>

            <div style={styles.factsContainer}>
                {facts.map((fact, index) => (
                    <div key={index} style={styles.factCard}>
                        {fact}
                    </div>
                ))}
            </div>
        </div>
    );
}

const styles = {
    container: {
        background: "linear-gradient(135deg, #0f0c29, #302b63, #24243e)",
        minHeight: "100vh",
        padding: "100px 20px 40px 20px", 
        fontFamily: "'Poppins', sans-serif",
        color: "#f0f0f0",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    title: {
        fontSize: "3rem",
        marginBottom: "20px",
        fontWeight: "600",
        color: "#ffffff",
    },
    subtitle: {
        fontSize: "1.3rem",
        marginBottom: "30px",
        color: "#d1c4e9",
        maxWidth: "600px",
    },
    image: {
        maxWidth: "300px",
        borderRadius: "20px",
        boxShadow: "0 6px 24px rgba(0, 0, 0, 0.5)",
        marginBottom: "30px",
    },
    factsContainer: {
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        maxWidth: "600px",
        width: "100%",
    },
    factCard: {
        background: "rgba(255, 255, 255, 0.08)",
        padding: "20px",
        borderRadius: "12px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
        fontSize: "1.1rem",
        fontWeight: "500",
        color: "#f0f0f0",
        border: "1px solid rgba(255,255,255,0.1)",
    },
};
