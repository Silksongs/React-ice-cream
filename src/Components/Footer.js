import React, {Component} from 'react';
import {Button, Container, Form, FormControl, Nav, Navbar, NavbarBrand} from "react-bootstrap";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import logo from "./icone.png";
import './Footer.css'
class Footer extends Component {
    render() {
        return (
            <>
                <div className="fixed-bottom">
                    <Router>
                        <Navbar className="NavBarFooter" style={{background: 'pink'}} collapseOnSelect expand="md" variant="light">
                            <Container>
                                <NavbarBrand as={Link} to="/">
                                    <img
                                        src={logo}
                                        height="30"
                                        width="30"
                                        className="d-inline-block align-top"
                                        alt="Logo"
                                    />
                                    <b style={{color: 'black'}}>Мороженка</b>
                                </NavbarBrand>
                                <Navbar.Collapse className="d-flex flex-row-reverse" style={{fontWeight: 'bold'}}>
                                    <Nav className="p-2">
                                        <a href="https://github.com/Silksongs" >GitHub</a>
                                        <a href="https://vk.com/inerva" >Vk</a>
                                    </Nav>
                                </Navbar.Collapse>
                            </Container>
                        </Navbar>
                    </Router>
                </div>
            </>

        );
    }
}

export default Footer;