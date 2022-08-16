import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import './Header.css'
import {Link} from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import NavaBrand from "../Navigation/NavaBrand";


export default function Header() {

    return (
        <div>
            <Navbar className={'Hed'} collapseOnSelect expand="md" variant="light">
                <Container>
                    <NavaBrand/>
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
        </div>
    );
}
