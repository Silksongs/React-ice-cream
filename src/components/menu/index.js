import React from 'react';
import _ from "lodash";
import assor from "../../data/assortment/assort";

import Nava from "./nava";


function Menu() {
    return (
        <div>
            {_.map(assor, (el) => {
                return (
                    <Nava eventKey={el.eventKey}
                          text1={el.label}
                    />
                )
            })}
        </div>
    );
}

export default Menu;