import React from 'react';
import _ from "lodash";
import assor from "../../data/assortment/assort";
import {TabContent, TabPane} from "react-bootstrap";

function Assort() {
    return (
        <TabContent>
            {_.map(assor, (el) => {
                return (
                    <TabPane eventKey={el.eventKey}>
                        <img className={'img'} src={el.img} alt={'мороженое'}/>
                        <div>
                            <p className={'text-tab'}>{el.label}</p>
                            <p className={'text-tab'}>{'Цена: ' + el.price + ' рублей'}</p>
                            <p>{el.description}</p>
                            <h4>Состав: </h4>
                            <p>{el.text1}</p>
                            <h4>Пищевая ценность на 100 гр. :</h4>
                            <p>{el.text2}</p>
                            <h4>Аллергены:</h4>
                            <p>лактоза, сахар, фрукты.</p>
                        </div>
                    </TabPane>
                )
            })}
        </TabContent>
    );
}

export default Assort;