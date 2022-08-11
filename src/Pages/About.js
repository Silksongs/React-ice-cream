import React, {Component} from 'react';
import {Col, Container, Nav, Row, TabContainer, TabContent, TabPane} from "react-bootstrap";

import ice1 from './IMG/1.jpg';
import ice2 from './IMG/2.jpg';
import ice3 from './IMG/3.jpg';
import ice4 from './IMG/4.jpg';
import ice5 from './IMG/5.jpg';
import ice6 from './IMG/6.jpg';


class About extends Component {
    render() {
        return (
            <Container>
                <TabContainer  id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column mt-2 ">
                                <Nav.Item>
                                    <Nav.Link style={{color: 'black', margin: '10px', backgroundColor: 'pink'}}
                                              eventKey="first">Цитрус + витамин</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link style={{color: 'black', margin: '10px', backgroundColor: 'pink'}}
                                              eventKey="second">Малина + протеин</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link style={{color: 'black', margin: '10px', backgroundColor: 'pink'}}
                                              eventKey="third">Красный апельсин и мюсли VEGAN</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link style={{color: 'black', margin: '10px', backgroundColor: 'pink'}}
                                              eventKey="fourth">Фисташка с миндалем VEGAN</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link style={{color: 'black', margin: '10px', backgroundColor: 'pink'}}
                                              eventKey="fifth">PURONERO VEGAN</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link style={{color: 'black', margin: '10px', backgroundColor: 'pink'}}
                                              eventKey="sixth">Попкорн VEGAN</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <TabContent>
                                <TabPane eventKey="first">
                                    <img style={{margin: "10px", width: '50%'}} src={ice1}/>
                                    <div>
                                        <h1>Цитрус+витамин</h1><br/>
                                        <h1>Цена: 547.5 руб.</h1>
                                        <p>Сливочное мороженое с апельсиново-мандариновой прослойкой обогащенное
                                            витамином «С»</p>
                                        <p><h4>Состав:</h4> сливки, восстановленное обезжиренное молоко,
                                            апельсиново-мандариновая
                                        </p>
                                        <p>прослойка (апельсин, мандарин, сахар, стабилизатор (Е440), регулятор
                                            кислотности (Е330),</p>
                                        <p>ароматизатор “мандарин-апельсин”, краситель (Е160с), консервант (Е202)),
                                            сахарный сироп,</p>
                                        <p>глюкозный сироп, аскорбиновая кислота, эмульгатор (Е471), стабилизаторы
                                            (Е466, Е412,Е407).</p>
                                        <h4>Пищевая ценность на 100 гр. :</h4>
                                        <p>Калорийность- 180 ккал/756 кДж; жир- 8,5 г., углеводы- 23 г., белок-3 г. </p>
                                        <p><h4>Аллергены:</h4>лактоза, сахар, фрукты.</p>
                                    </div>
                                </TabPane>
                                <TabPane eventKey="second">
                                    <img style={{margin: "10px", width: '50%'}} src={ice2}/>
                                    <div>
                                        <h1>Малина+протеин</h1><br/>
                                        <h1>Цена: 547.5 руб.</h1>
                                        <p>Сливочное мороженое с малиновой прослойкой обогащенное протеином</p>
                                        <p><h4>Состав:</h4> сливки, восстановленное обезжиренное молоко, малиновая
                                            прослойка (сахар,
                                        </p>
                                        <p>малина, загуститель (Е440), ароматизатор малина, сок лимона
                                            концентрированный,</p>
                                        <p>краситель (Е120)), сахарный сироп, концентрат сывороточного белка, глюкозный
                                            сироп,</p>
                                        <p>эмульгатор (Е471), стабилизаторы (Е466, Е412, Е407).</p>
                                        <h4>Пищевая ценность на 100 гр. :</h4>
                                        <p>Калорийность- 197 ккал/760 кДж; жир- 8 г., углеводы- 26 г., белок-5,4 г. </p>
                                        <p><h4>Аллергены:</h4>лактоза, сахар, фрукты.</p>
                                    </div>
                                </TabPane>
                                <TabPane eventKey="third">
                                    <img style={{margin: "10px", width: '50%'}} src={ice3}/>
                                    <div>
                                        <h1>Красный апельсин и мюсли VEGAN</h1><br/>
                                        <h1>Цена: 680 руб.</h1>
                                        <p>Овсяный десерт с пюре красного апельсина, мультизлаковыми мюсли и овсяным
                                            молоком,</p>
                                        <h4>обогащенный кальцием и витаминами B и D</h4>
                                        <p><h4>Состав:</h4> Сахарный сироп, молоко овсяное (вода питьевая, крупа
                                            овсяная, масло
                                        </p>
                                        <p>подсолнечное, соль, витаминно-минеральный комплекс: кальций</p>
                                        <p>(трикальцийфосфат), витамины (рибофлавин (В2), В12, D)), масло кокосовое,
                                            тапиока</p>
                                        <p>крахмал, мюсли (хлопья овсяные, пшеничные, ржаные, ячменные, гречневые),
                                            пюре</p>
                                        <p>красного апельсина (сахар, мякоть апельсина, сок красного апельсина,
                                            загуститель</p>
                                        <p>(Е440), аскорбиновая кислота, ароматизатор апельсин,), эмульгатор (Е471),</p>
                                        <p>стабилизаторы (Е412, Е410), соль поваренная пищевая.</p>
                                        <h4>Пищевая ценность на 100 гр. :</h4>
                                        <p>Калорийность – 150 ккал/630 кДж, содержание белков - 0 г, жиров - 8,5 г,
                                            углеводов - 18,5 г . </p>
                                    </div>
                                </TabPane>
                                <TabPane eventKey="fourth">
                                    <img style={{margin: "10px", width: '50%'}} src={ice4}/>
                                    <div>
                                        <h1>Фисташковые с миндалем VEGAN</h1><br/>
                                        <h1>Цена: 680 руб.</h1>
                                        <p>Фисташковый десерт с дробленым миндалем</p>
                                        <p><h4>Состав:</h4> Сахарный сироп, миндаль, паста фисташки, база веган
                                            (растительные
                                        </p>
                                        <p>волокна, рисовый белок, загуститель камедь тары), глюкозный сироп,
                                            декстроза,</p>
                                        <p>растительные волокна, стабилизаторы (декстроза, глюкозный сироп,</p>
                                        <p>мальтодекстрин, растительные волокна), соль поваренная пищевая.</p>
                                        <h4>Пищевая ценность на 100 гр. :</h4>
                                        <p>Калорийность - 163 ккал/ 672 кДж, содержание белков - 3.0 г, жиров - 7,5 г,
                                            углеводов -21,0 г.</p>
                                    </div>
                                </TabPane>
                                <TabPane eventKey="fifth">
                                    <img style={{margin: "10px", width: '50%'}} src={ice5}/>
                                    <div>
                                        <h1>PURONERO VEGAN</h1><br/>
                                        <h1>Цена: 680 руб.</h1>
                                        <p>Замороженный шоколадный десерт</p>
                                        <p><h4>Состав:</h4> Сахарный сироп, какао-масса, база веган (растительные
                                            волокна, рисовый
                                        </p>
                                        <p>белок, загуститель камедь тары), глюкозный сироп, декстроза,
                                            какао-порошок,</p>
                                        <p>стабилизаторы (декстроза, глюкозный сироп, мальтодекстрин, растительные</p>
                                        <p>волокна), соль поваренная пищевая.</p>
                                        <h4>Пищевая ценность на 100 гр. :</h4>
                                        <p>Калорийность - 157 ккал/659 кДж, содержание белков -2,3 г, жиров -6,0 г,
                                            углеводов - 23,5 г. </p>
                                    </div>
                                </TabPane>
                                <TabPane eventKey="sixth">
                                    <img style={{margin: "10px", width: '50%'}} src={ice6}/>
                                    <div>
                                        <h1>Попкорн VEGAN</h1><br/>
                                        <h1>Цена: 680 руб.</h1>
                                        <h2>Кокосовый десерт с шоколадно-кокосовым попкорном с кокосовым молоком</h2>
                                        <p><h4>Состав:</h4> Cахарный сироп, молоко кокосовое (переработанная мякоть
                                            кокосового
                                        </p>
                                        <p>ореха 35%, вода 65%), масло кокосовое, тапиока крахмал, попкорн
                                            "шоколад-кокос"</p>
                                        <p>(зерно кукурузы, кокосовое масло, тростниковый сахар, натуральный какао-</p>
                                        <p>порошок, кокос, соевый лецитин (Е322)), эмульгатор (Е471), стабилизаторы
                                            (Е412,</p>
                                        <p>Е410), соль поваренная пищевая.</p>
                                        <h4>Пищевая ценность на 100 гр. :</h4>
                                        <p>Калорийность - 164 ккал/688 кДж, содержание белков - 0 г, жиров - 10.5 г,
                                            углеводов - 17.5 г. </p>
                                    </div>
                                </TabPane>
                            </TabContent>
                        </Col>
                    </Row>
                </TabContainer>
            </Container>
        );
    }
}

export default About;