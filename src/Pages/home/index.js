import React from 'react';
import CarouselBox from "../../Components/carouselbox";
import {Container} from "react-bootstrap";
import '../../Components/home/style.css'
import HomeComp from "../../Components/home";
import _ from "lodash";
import home from "../../data/home/home";

function Home() {

    return (
        <div>
            <CarouselBox/>
            <Container>
                <article>
                    {_.map(home, (el) => {
                        return (
                            <HomeComp
                                text1={el.text1}
                                text2={el.text2}
                                text3={el.text3}
                            />
                        )
                    })}
                </article>
            </Container>
        </div>
    );

}

export default Home;