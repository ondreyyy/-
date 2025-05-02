import Mucha from "../assets/mucha.png";
import Button from "../components/button";
import CoreNavbar from "../components/navbar";

export default function Home() {
    return (
        <div style={styles.container}>
            <CoreNavbar ></CoreNavbar>

            <h1 style={styles.title}>Vítej na stránce s kočkama </h1>

            <img src={Mucha} alt="Mucha" style={styles.image} />

            <p style={styles.subtitle}>
                Klikni na tlačítko níže a objev něco cool!!!!!!!!!!!!!!!!!!!!!!!!!!!
            </p>

            <div style={styles.buttonWrapper}>
                <Button name="Ondrej" ></Button>
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
        marginBottom: "20px",
    },
    subtitle: {
        fontSize: "1.2rem",
        marginBottom: "30px",
    },
    image: {
        maxWidth: "350px",
        borderRadius: "16px",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
        marginBottom: "20px",
    },
    buttonWrapper: {
        marginTop: "20px",
    },
};