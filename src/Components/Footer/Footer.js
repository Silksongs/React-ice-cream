import React from 'react';
import {Container, Nav, Navbar, NavbarBrand} from "react-bootstrap";
import {BrowserRouter as Router, Link} from "react-router-dom";
import logo from "../../assets/icone.png";
import './Footer.css'

function Footer() {

    return (
        <>
            <div className="fixed-bottom">
                <Router>
                    <Navbar className="NavBarFooter" collapseOnSelect expand="md" variant="light">
                        <Container>
                            <NavbarBrand as={Link} to="/">
                                <img
                                    src={logo}
                                    height="30"
                                    width="30"
                                    className="d-inline-block align-top"
                                    alt="Logo"
                                />
                                <b>Мороженка</b>
                            </NavbarBrand>
                            <Navbar.Collapse className="d-flex flex-row-reverse">
                                <Nav className={'Nava'}>
                                    <a className={'Aherf'} href="https://github.com/Silksongs">GitHub</a>
                                    <a className={'Aherf'} href="https://vk.com/inerva">Vk</a>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </Router>
            </div>
        </>

    );

}

export default Footer;