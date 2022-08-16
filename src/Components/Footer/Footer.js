import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import './Footer.css'
import NavaBrand from "../Navigation/NavaBrand";

function Footer() {

    return (
        <div className="fixed-bottom">
                <Navbar className="NavBarFooter" collapseOnSelect expand="md" variant="light">
                    <Container>
                        <NavaBrand/>
                        <Navbar.Collapse className="d-flex flex-row-reverse">
                            <Nav className={'Nava'}>
                                <a className={'Aherf'} href="https://github.com/Silksongs">GitHub</a>
                                <a className={'Aherf'} href="https://vk.com/inerva">Vk</a>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
        </div>
    );
}

export default Footer;