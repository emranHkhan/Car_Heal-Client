import React from 'react';

const Reviews = ({ reviews }) => {
    return (
        <section className="container mb-5 bg-light py-5">
            <div className="text-center">
                <h6>Our Testimonials</h6>
                <h1>Client Reviews</h1>
            </div>

            <div className="row mt-5 ml-5 text-center">
                {
                    reviews.map(review =>
                        <div className="col" key={review._id}>
                            <div className="card mb-3" style={{ width: "20rem" }}>
                                <div className="card-body">
                                    <h5 className="card-title m-0">{review.name}</h5>
                                    <small>{review.designation}</small>
                                    <p className="card-text mt-3">{review.description}</p>
                                </div>
                            </div>
                        </div>

                    )
                }



            </div>
        </section>

    );
};

export default Reviews;