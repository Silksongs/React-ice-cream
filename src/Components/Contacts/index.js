import React from 'react';
import {Container} from "react-bootstrap";
import './style.css'

function CompContacts(props) {
    return (
        <Container className={'Conn'}>
            <text className={'Text'}>Наши контакты</text>
            <h2>Режим работы:</h2>
            <p>{props.text1}</p>
            <p>{props.text2}</p>
            <h2>Телефон горячей линии</h2>
            <a href={props.herf1}>{props.text3}</a>
            <h2>Электронная почта</h2>
            <p><a href={props.herf2}>{props.text4}</a></p><br/>
        </Container>
    );
}

export default CompContacts;