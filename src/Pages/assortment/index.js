import React from 'react';
import {Col, Container, Row, TabContainer} from "react-bootstrap";
import Assort from "../../components/assortment";
import '../../components/assortment/style.css'
import Menu from "../../components/menu";

function Assortment() {

    return (
        <Container>
            <TabContainer id="left-tabs-example" defaultActiveKey="first">
                <Row>
                    <Col sm={3}>
                        <Menu/>
                    </Col>
                    <Col sm={9}>
                        <Assort/>
                    </Col>
                </Row>
            </TabContainer>
        </Container>
    );

}

export default Assortment;