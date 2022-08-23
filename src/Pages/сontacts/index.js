import React from 'react';
import {Container, Form, Button} from "react-bootstrap";
import './style.css'
import CompContacts from "../../Components/contacts";

function Contacts() {

    return (
        <div>
            <Container className={'conn'}>
                <text className={'text'}>Оставьте ваши контакты для связи с вами</text>
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
            <CompContacts/>
        </div>
    );

}

export default Contacts;