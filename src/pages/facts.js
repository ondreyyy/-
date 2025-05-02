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
            <CoreNavbar ></CoreNavbar>

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
        background: "linear-gradient(to right, #ff9a9e, #fad0c4, #fbc2eb, #a18cd1)",
        minHeight: "100vh",
        padding: "40px 20px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: "#4a004e",
        textAlign: "center",
    },
    title: {
        fontSize: "2.5rem",
        marginBottom: "10px",
    },
    subtitle: {
        fontSize: "1.2rem",
        marginBottom: "30px",
    },
    image: {
        maxWidth: "300px",
        borderRadius: "16px",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
        marginBottom: "30px",
    },
    factsContainer: {
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        maxWidth: "600px",
        margin: "0 auto",
    },
    factCard: {
        background: "rgba(255, 255, 255, 0.85)",
        padding: "15px 20px",
        borderRadius: "12px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.15)",
        fontSize: "1rem",
        fontWeight: "500",
    },
};