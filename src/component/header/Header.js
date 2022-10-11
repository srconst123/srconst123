import React from 'react';
import './Header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
  return (
    <Navbar collapseOnSelect sticky='top' expand="lg" bg="dark" variant="light">
      <Container>
        <div className="logo">
          <a href='/' ><img src="assets/images/logo.png" alt="logo" /></a>
        </div>
        <Navbar.Brand href="#home"><span className="bname">SRI RAM CONSTRUCTION</span></Navbar.Brand>
        <div className="navbtn"><Navbar.Toggle aria-controls="responsive-navbar-nav" />
        </div>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto navc">
            <Nav.Link href="/">HOME</Nav.Link>
            <Nav.Link href="/about">ABOUT</Nav.Link>
            <Nav.Link href="/services">SERVICES</Nav.Link>
            <Nav.Link href="/projects">PROJECTS</Nav.Link>
            <Nav.Link href="/team">TEAM</Nav.Link>
            <Nav.Link href="/careers">CAREERS</Nav.Link>
            <Nav.Link href="/contact">CONTACT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <div className="sicons">
          <a href="#"><img src="assets/images/si1.png" alt="" /></a>
          <a href="#"><img src="assets/images/si2.png" alt="" /></a>
          <a href="#"><img src="assets/images/si3.jfif" alt="" /></a>
          <a href="#"><img src="assets/images/si4.png" alt="" /></a>
          <a href="#"><img src="assets/images/si5.png" alt="" /></a>
          <a href="#"><img className='yicon' src="assets/images/si6.png" alt="" /></a>
        </div>
      </Container>
    </Navbar>
  )
}

export default Header