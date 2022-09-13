import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React, { useContext } from 'react';
import { uidContext } from '../Routes/appContext';
import Connecter from '../log/Connecter';
import { NavLink } from 'react-router-dom';


function NavbarEntraide() {
    const uid = useContext(uidContext)
  return (
   
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Entraide</Navbar.Brand>
         { uid ? (
          <Nav className="me-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="/profil">Profil</Nav.Link>
            <Nav.Link href="">Pricing</Nav.Link>
          </Nav>) : (
            <><NavLink to="/profil" /></>
           )}
        </Container>
     
      </Navbar>
    </>
  );
}

export default  NavbarEntraide;