import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import './style.css'
import NavaBrand from "../navigation/navaBrand";

function Footer() {

    return (
        <div className="">
            <Navbar className="navBarFooter" collapseOnSelect expand="md" variant="light">
                <Container>
                    <NavaBrand/>
                    <Navbar.Collapse className="d-flex flex-row-reverse">
                        <Nav className={'nava'}>
                            <a className={'aherf'} href="https://github.com/Silksongs">GitHub</a>
                            <a className={'aherf'} href="https://vk.com/inerva">Vk</a>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default Footer;