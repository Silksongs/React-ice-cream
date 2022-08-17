import React from 'react';
import _ from "lodash";
import assor from "../../data/assort";

import Nava from "./Nava";
import {Col} from "react-bootstrap";

function Menu() {
    return (
        <Col sm={3}>
            {_.map(assor, (el) => {
                return (
                    <Nava eventKey={el.eventKey}
                          text1={el.label}
                    />
                )
            })}
        </Col>
    );
}

export default Menu;