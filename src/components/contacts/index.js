import React from 'react';
import {Container} from "react-bootstrap";
import './style.css'

function CompContacts() {
    return (
        <Container className={'conn'}>
            <text className={'text'}>Наши контакты</text>
            <h2>Режим работы:</h2>
            <p>с 8-00 до 22-00</p>
            <p>Без выходных, без обедов</p>
            <h2>Телефон горячей линии</h2>
            <a href='tel:+79164690150"'>+7 (916) 469-01-50</a>
            <h2>Электронная почта</h2>
            <p><a href='mailto:Taksaland@yandex.ru'>Taksaland@yandex.ru</a></p><br/>
        </Container>
    );
}

export default CompContacts;