import React from 'react';
import {Nav} from "react-bootstrap";

const Nava = () => {
    return (
        <Nav className="flex-column mt-2 ">
            <Nav.Item>
                <Nav.Link className={'Navlink'}
                          eventKey="first">Цитрус + витамин</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link className={'Navlink'}
                          eventKey="second">Малина + протеин</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link className={'Navlink'}
                          eventKey="third">Красный апельсин и мюсли VEGAN</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link className={'Navlink'}
                          eventKey="fourth">Фисташка с миндалем VEGAN</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link className={'Navlink'}
                          eventKey="fifth">PURONERO VEGAN</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link className={'Navlink'}
                          eventKey="sixth">Попкорн VEGAN</Nav.Link>
            </Nav.Item>
        </Nav>
    );
};

export default Nava;