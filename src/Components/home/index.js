import React from 'react';

function HomeComp({text1,text2,text3}) {
    return (

        <div>
            <p className={'Text'}>{text1}</p>
            <p>
                {text2}
                <br/>
                {text3}
            </p>
        </div>
    );
}

export default HomeComp;