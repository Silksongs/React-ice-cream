import React from 'react';

function Assort(props) {
    return (
        <div>
            <img className={'Img'} src={props.src}/>
            <div>
                <p className={'Text-tab'}>{props.text1}</p><br/>
                <p className={'Text-tab'}>{props.text2}</p>
                <p>{props.text3}</p>
                <h4>Состав:</h4>
                <p> {props.text4}</p>
                <h4>Пищевая ценность на 100 гр. :</h4>
                <p>{props.text5}
                    <h4>Аллергены:</h4>лактоза, сахар, фрукты.
                </p>
                <br/>
                <br/>
            </div>
        </div>
    );
}

export default Assort;