import React from 'react';
import CarouselBox from "../../components/carouselbox";
import {Container} from "react-bootstrap";
import '../../components/home/style.css'
import HomeComp from "../../components/home";

function Home() {

    return (
        <div>
            <CarouselBox/>
            <Container>
                <HomeComp/>
            </Container>
        </div>
    );

}

export default Home;