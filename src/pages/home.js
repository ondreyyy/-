import { useState } from "react";
import Mucha from "../assets/mucha.jpg";
import Cat1 from "../assets/cat1.jpg";
import Cat2 from "../assets/cat2.jpg";
import Cat3 from "../assets/cat3.jpg";
import Cat4 from "../assets/cat4.jpg";
import Cat5 from "../assets/cat5.jpg";
import Button from "../components/button";
import CoreNavbar from "../components/navbar";
import "../utilities/home.css";

export default function Home() {
  const [openImage, setOpenImage] = useState(null);

  const galleryImages = [
    { src: Cat1, alt: "Kočička 1" },
    { src: Cat2, alt: "Kočička 2" },
    { src: Cat3, alt: "Kočička 3" },
    { src: Cat4, alt: "Kočička 4" },
    { src: Cat5, alt: "Kočička 5" },
  ];

  return (
    <div style={styles.container}>
      <CoreNavbar />

      <h1 style={styles.heading}>Vítej na stránce s kočičími fakty!</h1>

      <img
  src={Mucha}
  alt="Mucha"
  className="main-image"
  onClick={() => setOpenImage(Mucha)}
/>


      <p style={styles.subtitle}>
        Jedním kliknutím na tlačítko pošleš lásku jedné kočičce.
      </p>
      <p style={styles.subtitle}>Kolika kočičkám pošleš lásku?</p>

      <div style={styles.buttonWrapper}>
        <Button name="Ondrej" />
      </div>

      <h2 style={styles.galleryHeading}>Galerie kočiček</h2>
      <div style={styles.galleryContainer}>
        {galleryImages.map((cat, i) => (
          <img
            key={i}
            src={cat.src}
            alt={cat.alt}
            className="gallery-image"
            onClick={() => setOpenImage(cat.src)}
          />
        ))}
      </div>

      {openImage && (
        <div style={styles.overlay} onClick={() => setOpenImage(null)}>
          <img src={openImage} alt="Zvětšená kočka" style={styles.fullImage} />
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, rgb(0, 0, 0), rgb(103, 97, 126))",
    padding: "100px 20px 60px",
    fontFamily: "'Poppins', 'Segoe UI', sans-serif",
    color: "#f0f0f0",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  heading: {
    fontSize: "3rem",
    marginBottom: "30px",
    color: "#ffffff",
    fontWeight: "600",
    fontFamily: "'Poppins', sans-serif",
  },
  subtitle: {
    fontSize: "1.3rem",
    marginBottom: "12px",
    color: "#e0e0e0",
    maxWidth: "600px",
    fontFamily: "'Montserrat', sans-serif",
  },
  image: {
    maxWidth: "350px",
    borderRadius: "20px",
    boxShadow: "0 6px 20px rgba(0, 0, 0, 0.4)",
    marginBottom: "30px",
  },
  buttonWrapper: {
    marginTop: "20px",
  },
  galleryHeading: {
    marginTop: "60px",
    fontSize: "2rem",
    fontWeight: "500",
  },
  galleryContainer: {
    display: "flex",
    gap: "20px",
    overflowX: "auto",
    padding: "20px 0",
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
  },
  fullImage: {
    maxWidth: "90%",
    maxHeight: "90%",
    borderRadius: "15px",
  },
};
