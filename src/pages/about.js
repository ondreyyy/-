import { useState, useEffect } from "react";

export default function About() {
    const [facts, setFacts] = useState([]);
    const [statusCode, setStatusCode] = useState(200); // výchozí

    useEffect(() => {
        const apiURL = "https://meowfacts.herokuapp.com/";
        fetch(apiURL)
            .then((response) => response.json())
            .then((data) => {
                setFacts(data.data);
            })
            .catch((error) => console.error("Error fetching data:", error));

    
        const availableStatusCodes = [
            100, 101, 102, 200, 201, 202, 203, 204, 206, 207, 300, 301, 302,
            303, 304, 305, 307, 308, 400, 401, 402, 403, 404, 405, 406, 408,
            409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 420, 421, 422,
            423, 424, 425, 426, 429, 431, 444, 450, 451, 500, 502, 503, 504,
            506, 507, 508, 509, 510, 511, 599
        ];
        const randomIndex = Math.floor(Math.random() * availableStatusCodes.length);
        setStatusCode(availableStatusCodes[randomIndex]);
    }, []);

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>mňau mňau fakta ong!!111!!§!1!11!1!</h1>
            <h1 style={styles.title}>(a kockove obrazky!!!§)</h1>
            <img
                src={`https://http.cat/${statusCode}.jpg`}
                alt={`HTTP Cat ${statusCode}`}
                style={styles.image}
            />
            <p style={styles.subtitle}>Zajímavosti o kočkách z internetu:</p>
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
        background: "linear-gradient(to right, #ff9a9e, #fad0c4, #fad0c4, #fbc2eb, #a18cd1)",
        minHeight: "100vh",
        padding: "40px 20px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: "#4a004e",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",  // Vodorovně centrováno
        alignItems: "center",      // Vertikálně centrováno
    },
    title: {
        fontSize: "2.5rem",
        marginBottom: "10px",
    },
    subtitle: {
        fontSize: "1.2rem",
        marginBottom: "20px",
    },
    image: {
        maxWidth: "500px",  // Zvětšení obrázku
        width: "80%",       // Dynamická šířka
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
        background: "rgba(255, 255, 255, 0.8)",
        padding: "15px 20px",
        borderRadius: "12px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.15)",
        fontSize: "1rem",
        fontWeight: "500",
    },
};
