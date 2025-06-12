import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';

function CoreNavbar() {
  const [hoveredLink, setHoveredLink] = useState(null);

  const hoverColor = '#fffff';
  const linkStyle = (linkName) => ({
    fontFamily: "'Montserrat', sans-serif",
    color: hoveredLink === linkName ? hoverColor : '#000',
    transition: 'color 0.3s ease',
    textDecoration: 'none',
  });

  return (
    <>
      <Navbar
        bg="dark"
        variant="dark"
        fixed="top"
        style={{
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
          justifyContent: 'center', // důležité pro centrování
        }}
      >
        <Container className="d-flex justify-content-center">
          <Navbar.Brand
            style={{
              fontFamily: "'Poppins', sans-serif",
              color: '#999',
              fontSize: '1.5rem',
              textAlign: 'center',
            }}
          >
            KOČIČÍ FAKTY
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default CoreNavbar;
