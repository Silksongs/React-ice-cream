import React from 'react';
import {Link} from "react-router-dom";
import logo from "../../../assets/icone.png";
import {Navbar} from "react-bootstrap";

const NavaBrand = () => {
    return (
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
    );
};

export default NavaBrand;