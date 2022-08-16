import React from 'react';
import {Container, Form, Button} from "react-bootstrap";
import './Contacts.css'
import CompContacts from "../../Components/Contacts/CompContacts";

function Contacts() {

    return (
        <div>
            <Container className={'Conn'}>
                <text className={'Text'}>Оставьте ваши контакты для связи с вами</text>
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
            <CompContacts
                text1={"с 8-00 до 22-00 "}
                text2={"Без выходных, без обедов"}
                herf1={"tel:+79164690150"} text3={"+7 (916) 469-01-50"}
                herf2={"mailto:Taksaland@yandex.ru"} text4={"Taksaland@yandex.ru"}
            />
        </div>
    );

}

export default Contacts;