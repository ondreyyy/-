import { useState, useEffect } from "react";
import CoreNavbar from '../components/navbar';
import "../utilities/about.css";

export default function About() {
  const [facts, setFacts] = useState([]);
  const [statusCode, setStatusCode] = useState(200);
  const [openImage, setOpenImage] = useState(false);

  const fetchFacts = () => {
    fetch("https://meowfacts.herokuapp.com/")
      .then((response) => response.json())
      .then((data) => {
        setFacts(data.data);

        const availableStatusCodes = [
          100, 101, 102, 200, 201, 202, 203, 204, 206, 207, 300, 301, 302,
          303, 304, 305, 307, 308, 400, 401, 402, 403, 404, 405, 406, 408,
          409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 420, 421, 422,
          423, 424, 425, 426, 429, 431, 444, 450, 451, 500, 502, 503, 504,
          506, 507, 508, 509, 510, 511, 599
        ];
        const randomIndex = Math.floor(Math.random() * availableStatusCodes.length);
        setStatusCode(availableStatusCodes[randomIndex]);
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  useEffect(() => {
    fetchFacts();
  }, []);

  return (
    <>
      <CoreNavbar />
      <div style={styles.container}>
        <h1 style={styles.title}>MŇAUKOVNÍ FAKTA O KOČIČKÁCH!</h1>
        <h2 style={styles.subtitle}>(a kočkové obrázky)</h2>

        {}
        <img
          src={`https://http.cat/${statusCode}.jpg`}
          alt={`HTTP Cat ${statusCode}`}
          style={styles.image}
          onClick={() => setOpenImage(true)}
          className="hover-scale"
        />

        <p style={styles.subtitle}>Zajímavost o kočkách z internetu:</p>
        <button style={styles.button}  className="button-hover" onClick={fetchFacts}>Nový fakt!</button>
        <div style={styles.factsContainer}>
          {facts.map((fact, index) => (
            <div key={index} style={styles.factCard}>
              {fact}
            </div>
          ))}
        </div>
      </div>

      {}
      {openImage && (
        <div style={styles.overlay} onClick={() => setOpenImage(false)}>
          <img
            src={`https://http.cat/${statusCode}.jpg`}
            alt={`Zvětšený HTTP Cat ${statusCode}`}
            style={styles.fullImage}
          />
        </div>
      )}
    </>
  );
}

const styles = {
  container: {
    background: "linear-gradient(to right, #1e1e2f, #3a3a55, #2c2c44)",
    minHeight: "100vh",
    padding: "40px 20px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: "#e0e0ff",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: "2.5rem",
    marginTop: "50px",
    marginBottom: "10px",
    fontWeight: "700",
    fontFamily: "'Poppins', sans-serif",
    color: "#bb86fc",
  },
  subtitle: {
    fontSize: "1.2rem",
    marginBottom: "20px",
    fontFamily: "'Montserrat', sans-serif",
    color: "#d0c9ff",
  },
  image: {
    maxWidth: "500px",
    width: "80%",
    borderRadius: "16px",
    boxShadow: "0 4px 20px rgba(187, 134, 252, 0.6)",
    marginBottom: "30px",
    cursor: "pointer",
    transition: "transform 0.3s ease",
  },
  factsContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    maxWidth: "600px",
    margin: "0 auto",
  },
  factCard: {
    background: "rgba(187, 134, 252, 0.2)",
    padding: "15px 20px",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(187, 134, 252, 0.3)",
    fontSize: "1rem",
    fontWeight: "500",
    color: "#e0e0ff",
  },
  button: {
    padding: "12px 25px",
    fontSize: "1.2rem",
    fontWeight: "600",
    color: "#fff",
    backgroundColor: "#7f39fb",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    marginBottom: "30px",
    boxShadow: "0 4px 15px rgba(127, 57, 251, 0.7)",
    transition: "background-color 0.3s ease",
  },
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    background: "rgba(0,0,0,0.8)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
    cursor: "zoom-out",
  },
  fullImage: {
    maxWidth: "90%",
    maxHeight: "90%",
    borderRadius: "15px",
    boxShadow: "0 0 40px rgba(187, 134, 252, 0.9)",
  },
};
