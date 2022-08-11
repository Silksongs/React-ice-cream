import React, {Component} from 'react';
import {Button, Container, Form, FormControl, Nav, Navbar} from "react-bootstrap";
import logo from './icone.png'
import './Header.css'
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import {Routes} from "react-router";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contacts from "../Pages/Contacts";
import Blog from "../Pages/Blog";


export default class Header extends Component {
    render() {
        return (
            <>
                <Router>
                    <Navbar style={{background: 'pink'}} collapseOnSelect expand="md" variant="light">
                        <Container>
                            <Navbar.Brand as={Link} to="/">
                                <img
                                    src={logo}
                                    height="30"
                                    width="30"
                                    className="d-inline-block align-top"
                                    alt="Logo"
                                />
                                <b style={{color: 'black'}}>Мороженка</b>
                            </Navbar.Brand>
                            <Navbar.Collapse className="d-flex flex-row-reverse">
                                <Nav className="p-2" style={{fontWeight: 'bold'}}>
                                    <Nav.Link as={Link} to="/">Главная</Nav.Link>
                                    <Nav.Link as={Link} to="/about">Ассортимент</Nav.Link>
                                    <Nav.Link as={Link} to="/contacts">Контакты</Nav.Link>
                                    <Nav.Link as={Link} to="/blog">Комментарии</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                    <Routes>
                        <Route path='/' element={<Home/>}/>
                        <Route path='/about' element={<About/>}/>
                        <Route path='/contacts' element={<Contacts/>}/>
                        <Route path='/blog' element={<Blog/>}/>
                    </Routes>
                </Router>
            </>
        );
    }
}
