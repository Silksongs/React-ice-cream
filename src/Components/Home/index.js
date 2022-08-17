import React from 'react';

function HomeComp(props) {
    return (

        <div>
            <p className={'Text'}>{props.text1}</p>
            <p>
                {props.text2}
                <br/>
                {props.text3}
            </p><br/><br/>
        </div>

    );
}

export default HomeComp;