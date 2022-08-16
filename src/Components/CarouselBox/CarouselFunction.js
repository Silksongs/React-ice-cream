import React from 'react';
import Carousel from "react-bootstrap/Carousel";

function CarouselFunction(props) {
    return (
        <div>
            <img
                className="d-block w-100"
                src={props.src}
                alt={props.text1}
            />
            <Carousel.Caption>
                <h3 className="h3">Ice cream two</h3>
                <p className='colored'>
                    GOOD ice cream
                </p>
            </Carousel.Caption>
        </div>
    );
}

export default CarouselFunction;