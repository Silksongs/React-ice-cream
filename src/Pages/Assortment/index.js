import React from 'react';
import {Col, Container, Row, TabContainer, TabContent, TabPane} from "react-bootstrap";
import Assort from "../../Components/assortment";
import '../../Components/assortment/style.css'
import _ from "lodash";
import assor from "../../data/assortment/assort";
import Menu from "../../Components/menu";

function Assortment() {

    return (
        <Container>
            <TabContainer id="left-tabs-example" defaultActiveKey="first">
                <Row>
                    <Col sm={3}>
                        <Menu/>
                    </Col>
                    <Col sm={9}>
                        <TabContent>
                            {_.map(assor, (el) => {
                                return (
                                    <TabPane eventKey={el.eventKey}>
                                        <Assort src={el.img}
                                               label={el.label}
                                               price={el.price}
                                               description={el.description}
                                               text1={el.text1}
                                               text2={el.text2}
                                        />
                                    </TabPane>
                                )
                            })}
                        </TabContent>
                    </Col>
                </Row>
            </TabContainer>
        </Container>
    );

}

export default Assortment;