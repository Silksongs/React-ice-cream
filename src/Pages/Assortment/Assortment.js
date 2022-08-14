import React from 'react';
import {Col, Container,Row, TabContainer} from "react-bootstrap";
import Assort from "./Assort";
import Nava from "./Nava";

import './Assortment.css'

function Assortment() {

    return (
        <Container>
            <TabContainer id="left-tabs-example" defaultActiveKey="first">
                <Row>
                    <Col sm={3}>
                        <Nava/>
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