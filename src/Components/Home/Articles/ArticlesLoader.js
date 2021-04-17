import React from 'react';

import car1 from '../../../images/car1.jpg';
import car2 from '../../../images/car2.jpg';
import car3 from '../../../images/car3.jpg';
import Articles from './Articles';



const ArticlesLoader = () => {
    const cars = [
        {
            img: car1
        },
        {
            img: car2
        },
        {
            img: car3
        }

    ];

    return (

        <div className="container my-5">
            <h6 className="text-center">Articles and Tips</h6>
            <h2 className="text-center mb-5">Latest News and Blogs</h2>
            <div className="row">
            
                {
                    cars.map((car, index) => <Articles key={index} car={car} />)
                }

            </div>
        </div>
    );
};

export default ArticlesLoader;