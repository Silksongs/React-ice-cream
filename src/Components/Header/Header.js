import React, {Component} from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import logo from '../../assets/icone.png'
import './Header.css'
import {BrowserRouter as Router, Link} from "react-router-dom";
import Navigation from "../Navigation/Navigation";


export default function Header() {

        return (
            <>
                <Router>
                    <Navbar className={'Hed'} collapseOnSelect expand="md" variant="light">
                        <Container>
                            <Navbar.Brand as={Link} to="/">
                                <img
                                    src={logo}
                                    height="30"
                                    width="30"
                                    className="d-inline-block align-top"
                                    alt="Logo"
                                />
                                <b className={'Logo'}>Мороженка</b>
                            </Navbar.Brand>
                            <Navbar.Collapse className="d-flex flex-row-reverse">
                                <Nav className={'Nava'}>
                                    <Nav.Link as={Link} to="/">Главная</Nav.Link>
                                    <Nav.Link as={Link} to="/about">Ассортимент</Nav.Link>
                                    <Nav.Link as={Link} to="/contacts">Контакты</Nav.Link>
                                    <Nav.Link as={Link} to="/blog">Комментарии</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                    <Navigation/>
                </Router>
            </>
        );

}
