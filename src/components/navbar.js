import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';

function CoreNavbar() {
  const [hoveredLink, setHoveredLink] = useState(null);

  const hoverColor = '#e0b3ff'; 
  const linkStyle = (linkName) => ({
    fontFamily: "'Montserrat', sans-serif",
    color: hoveredLink === linkName ? hoverColor : '#000',
    transition: 'color 0.3s ease',
    textDecoration: 'none',
  });

  return (
    <>
      <Navbar
        bg="light"
        variant="light"
        fixed="top"
        style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}
      >
        <Container>
          <Navbar.Brand
            href="/"
            style={{ fontFamily: "'Poppins', sans-serif", color: '#000' }}
          >
            MENU
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              href="/"
              style={linkStyle('home')}
              onMouseEnter={() => setHoveredLink('home')}
              onMouseLeave={() => setHoveredLink(null)}
            >
              Hlavní stránka
            </Nav.Link>
            <Nav.Link
              href="about"
              style={linkStyle('about')}
              onMouseEnter={() => setHoveredLink('about')}
              onMouseLeave={() => setHoveredLink(null)}
            >
              Kočičí fakta
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default CoreNavbar;
