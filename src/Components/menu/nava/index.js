import React from 'react';
import {Nav} from "react-bootstrap";
import './style.css'

function Nava(props) {
    return (
        <Nav className="flex-column mt-2 ">
            <Nav.Item>
                <Nav.Link className={'navlink'}
                          eventKey={props.eventKey}>{props.text1}</Nav.Link>
            </Nav.Item>
        </Nav>
    );
}

export default Nava;
