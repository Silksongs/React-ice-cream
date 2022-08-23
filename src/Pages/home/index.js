import React from 'react';
import CarouselBox from "../../Components/carouselbox";
import {Container} from "react-bootstrap";
import '../../Components/home/style.css'
import HomeComp from "../../Components/home";

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