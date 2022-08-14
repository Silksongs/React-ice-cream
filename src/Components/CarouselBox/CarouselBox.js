import React, {Component} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ice1 from '../../assets/1.jpg';
import ice2 from '../../assets/2.jpg';
import ice3 from '../../assets/3.jpg';
import './CarouselBox.css'

function CarouselBox() {

    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={ice1}
                    alt="ice1"
                />
                <Carousel.Caption>
                    <h3 className="H3">Ice cream one</h3>
                    <p className='colored'>
                        GOOD ice cream
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={ice2}
                    alt="ice2"
                />
                <Carousel.Caption>
                    <h3 className="H3">Ice cream two</h3>
                    <p className='colored'>
                        GOOD ice cream
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={ice3}
                    alt="ice3"
                />
                <Carousel.Caption>
                    <h3 className="H3">Ice cream three</h3>
                    <p className='colored'>
                        GOOD ice cream
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );

}

export default CarouselBox;