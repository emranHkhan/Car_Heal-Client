import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ferrai from '../../../images/ferrari.jpg';
import lambo from '../../../images/lambo.jpg';
import audi from '../../../images/audi.jpg';
import mercedeez from '../../../images/mercedeez.jpg';

const ShowCarousel = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={ferrai}
                    alt="First slide"
                    style={{height: '650px'}}
                
                />
                <Carousel.Caption>
                    <h5>Car We Have Fixed</h5>
                    <h2>Ferrari</h2>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={audi}
                    alt="Second slide"
                    style={{height: '650px'}}
                />

                <Carousel.Caption>
                <h5>Car We Have Fixed</h5>
                <h2>Audi</h2>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={lambo}
                    alt="Third slide"
                    style={{height: '650px'}}
                />

                <Carousel.Caption>
                <h5>Car We Have Fixed</h5>
                <h2>Lamborghini</h2>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={mercedeez}
                    alt="Third slide"
                    style={{height: '650px'}}
                />

                <Carousel.Caption>
                <h5>Car We Have Fixed</h5>
                <h2>Mercedeez</h2>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default ShowCarousel;