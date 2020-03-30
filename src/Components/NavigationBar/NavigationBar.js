import React, { Component } from 'react';
import { Nav, Navbar, Image, Container } from 'react-bootstrap';
import './NavigationBar.css';
import logo from '../../Resources/Logo.png';

class Contact extends Component{
    render(){
        return (
            <Navbar expand="lg">
                <Container>
                    <Navbar.Brand href="/"><Image className="logo" src={logo}/>Quinn Chrest</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="/Projects">Projects</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="/Contact">Contact</Nav.Link></Nav.Item>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}

export default Contact;