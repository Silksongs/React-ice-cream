import React from 'react';

function Assort({src, label, price, description, text1, text2}) {
    return (
        <div>
            <img className={'Img'} src={src} alt={'мороженое'}/>
            <div>
                <p className={'Text-tab'}>{label}</p>
                <p className={'Text-tab'}>{'Цена: ' + price + ' рублей'}</p>
                <p>{description}</p>
                <h4>Состав: </h4>
                <p>{text1}</p>
                <h4>Пищевая ценность на 100 гр. :</h4>
                <p>{text2}</p>
                <h4>Аллергены:</h4>
                <p>лактоза, сахар, фрукты.</p>
            </div>
        </div>
    );
}

export default Assort;