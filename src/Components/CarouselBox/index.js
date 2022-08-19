import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ice1 from '../../assets/1.jpg';
import ice2 from '../../assets/2.jpg';
import ice3 from '../../assets/3.jpg';
import './carouselFunction/style.css'
import CarouselFunction from "./carouselFunction";

function CarouselBox() {

    return (
        <Carousel>
            <Carousel.Item>
                <CarouselFunction src={ice1} text1={"ice1"}/>
            </Carousel.Item>

            <Carousel.Item>
                <CarouselFunction src={ice2} text1={"ice2"}/>
            </Carousel.Item>

            <Carousel.Item>
                <CarouselFunction src={ice3} text1={"ice3"}/>
            </Carousel.Item>
        </Carousel>
    );

}

export default CarouselBox;