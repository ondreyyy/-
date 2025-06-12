import { useState, useEffect } from "react";
import CoreNavbar from '../components/navbar';
import "../utilities/about.css";

export default function About() {
  const [facts, setFacts] = useState([]);
  const [statusCode, setStatusCode] = useState(200);
  const [openImage, setOpenImage] = useState(false);
  const [buttonHover, setButtonHover] = useState(false);
  const [imageHover, setImageHover] = useState(false);

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
        <div style={styles.card}>
          <h1 style={styles.title}>Kočičí fun facts!</h1>

          <img
            src={`https://http.cat/${statusCode}.jpg`}
            alt={`HTTP Cat ${statusCode}`}
            style={{
              ...styles.image,
              transform: imageHover ? "scale(1.05)" : "scale(1)",
              boxShadow: imageHover ? "0 12px 40px rgba(255, 0, 0, 0.7)" : "0 8px 30px rgba(0,0,0,0.4)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseEnter={() => setImageHover(true)}
            onMouseLeave={() => setImageHover(false)}
            onClick={() => setOpenImage(true)}
          />

          <button
            style={{
              ...styles.button,
              backgroundColor: buttonHover ? "#000" : "#8b0000",
              transition: "background-color 0.3s ease",
            }}
            onMouseEnter={() => setButtonHover(true)}
            onMouseLeave={() => setButtonHover(false)}
            onClick={fetchFacts}
          >
            Další fakt
          </button>

          <div style={styles.factContainer}>
            {facts.length === 0 ? (
              <p style={styles.loading}>⏳ Načítám fakt...</p>
            ) : (
              facts.map((fact, index) => (
                <div key={index} style={styles.factBox}>
                  {fact}
                </div>
              ))
            )}
          </div>
        </div>
      </div>

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
    minHeight: "100vh",
    background: "linear-gradient(135deg, #4a0000, #8b0000)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "80px 20px",
  },

  card: {
    backgroundColor: "#ffffff",
    borderRadius: "20px",
    padding: "40px",
    maxWidth: "800px",
    width: "100%",
    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  },
  title: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: "2.2rem",
    marginBottom: "10px",
    color: "#8b0000",
  },
  subtitle: {
    fontFamily: "'Montserrat', sans-serif",
    fontSize: "1.1rem",
    marginTop: "20px",
    marginBottom: "10px",
    color: "#555",
  },
  image: {
    width: "100%",
    maxWidth: "700px",
    height: "60vh",
    objectFit: "cover",
    borderRadius: "20px",
    boxShadow: "0 8px 30px rgba(0,0,0,0.4)",
    marginBottom: "40px",
    cursor: "pointer",
  },
  button: {
    backgroundColor: "#8b0000",
    color: "#fff",
    border: "none",
    padding: "12px 24px",
    borderRadius: "30px",
    fontSize: "1rem",
    fontWeight: "600",
    cursor: "pointer",
    marginBottom: "25px",
  },
  factContainer: {
    textAlign: "left",
    padding: "10px",
  },
  factBox: {
    background: "linear-gradient(135deg, #c3ecf9, #e5d3ff)",
    padding: "20px 25px",
    borderRadius: "16px",
    marginBottom: "15px",
    fontSize: "1.2rem",
    color: "#222",
    fontFamily: "'Rubik', sans-serif",
    boxShadow: "0 5px 12px rgba(0,0,0,0.1)",
  },
  loading: {
    fontStyle: "italic",
    color: "#999",
  },
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    background: "rgba(0,0,0,0.7)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  fullImage: {
    maxWidth: "90%",
    maxHeight: "90%",
    borderRadius: "16px",
    boxShadow: "0 0 30px rgba(255, 255, 255, 0.3)",
  },
};
