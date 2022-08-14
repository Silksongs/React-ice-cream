import React, {Component} from 'react';
import {Container, Form, Button} from "react-bootstrap";
import './Contacts.css'

function Contacts() {

    return (
        <div>
            <Container className={'Conn'}>
                <text className={'TEXT'}>Оставьте ваши контакты для связи с вами</text>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Введите ваш Email </Form.Label>
                        <Form.Control type="email" placeholder="Вводи"/>
                        <Form.Text>
                            Мы никогда не передадим вашу электронную почту кому-либо еще <br/>
                            (Но это не точно)
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className={'group'} controlId="formBasicPassword">
                        <Form.Label>Это пример текстового окна</Form.Label>
                        <Form.Control as="textarea" rows="3"/>
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Нажми на меня"/>
                    </Form.Group>

                    <Button className={'group'} variant="primary" type="submit">Отправить</Button>
                </Form>
            </Container>
            <Container className={'Conn'}>
                <text className={'TEXT'}>Наши контакты</text>
                <h2>Режим работы:</h2>
                <p>с 8-00 до 22-00</p>
                <p>Без выходных, без обедов</p>
                <h2>Телефон горячей линии</h2>
                <a href="tel:+79164690150">+7 (916) 469-01-50</a>
                <h2>Электронная почта</h2>
                <p><a href="mailto:Taksaland@yandex.ru">Taksaland@yandex.ru</a></p><br/>
            </Container>
        </div>
    );

}

export default Contacts;