import React from 'react';

const Reviews = ({ reviews }) => {

    return (
        <section className="container-fluid bg-light py-5">
            <div className="text-center" style={{ marginLeft: '3%' }}>
                <h6>Our Testimonials</h6>
                <h1>Client Reviews</h1>
            </div>

            <div className="container">
                <div className="row mt-5 text-center">
                    {
                        reviews.map(review =>
                            <div className="col d-flex justify-content-center" key={review._id}>
                                <div className="card mb-3 bg-light" style={{ width: "20rem" }}>
                                    <div className="card-body">
                                        <div className="d-flex justify-content-between mb-5">
                                            <div>
                                                <h5 className="card-title m-0">{review.name}</h5>
                                                <small>{review.designation}</small>
                                            </div>
                                            <div>
                                                <img src={review.photoURL} alt="" style={{ maxWidth: '50%', borderRadius: '50%' }} />
                                            </div>
                                        </div>

                                        <p className="card-text mt-3">{review.description}</p>
                                    </div>
                                </div>
                            </div>

                        )
                    }


                </div>
            </div>
        </section>

    );
};

export default Reviews;