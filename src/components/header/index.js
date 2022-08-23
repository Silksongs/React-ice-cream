import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import './style.css'
import {Link} from "react-router-dom";
import NavaBrand from "../navigation/navaBrand";


export default function Header() {

    return (
        <div>
            <Navbar className={'hed'} collapseOnSelect expand="md" variant="light">
                <Container>
                    <NavaBrand/>
                    <Navbar.Collapse className="d-flex flex-row-reverse">
                        <Nav className={'nava'}>
                            <Nav.Link as={Link} to="/">Главная</Nav.Link>
                            <Nav.Link as={Link} to="/about">Ассортимент</Nav.Link>
                            <Nav.Link as={Link} to="/contacts">Контакты</Nav.Link>
                            <Nav.Link as={Link} to="/blog">Комментарии</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}
