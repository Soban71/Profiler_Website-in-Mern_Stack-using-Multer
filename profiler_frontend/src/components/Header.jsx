import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import '../App.css';


export default function Header() {
  return (
    <>
    <Navbar bg="#454545" variant="dark" className='navbar-custom'>
    <Container  style={{height:"50px"}}>
      <Navbar.Brand to="/" style={{fontSize:"18px",letterSpacing:"2px",fontFamily: "'Raleway', sans-serif"}}>Home</Navbar.Brand>
      <Nav className="me-auto">
        <Link to="/register" style={{fontSize:"18px",letterSpacing:"2px",fontFamily: "'Raleway', sans-serif",textDecoration:"none",color:"white"}}>Registers</Link>
      </Nav>
    </Container>
  </Navbar>
    </>
  )
}
