import React from 'react';
import _ from "lodash";
import home from "../../data/home/home";

function HomeComp() {
    return (
        <article>
            {_.map(home, (el) => {
                return (
                    <div>
                        <p className={'text'}>{el.text1}</p>
                        <p>
                            {el.text2}
                            <br/>
                            {el.text3}
                        </p>
                    </div>
                )
            })}
        </article>

    );
}

export default HomeComp;