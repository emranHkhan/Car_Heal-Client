import React from 'react';
import { useHistory } from 'react-router';
import './Services.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'


const Services = ({ serviceData }) => {
    const history = useHistory();
    const handleBook = (id) => {
        history.push(`/book/${id}`)
    }

    return (
        <div id="cards_landscape_wrap-2">
            <div className="container">
                <div className="text-center">
                    <h6>What We Offer</h6>
                    <h1>We Provide Quality Services</h1>
                </div>
                <div className="row">

                    {
                        serviceData.map(service =>

                            <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3" key={service._id}>

                                <div className="card card-flyer">
                                    <div className="text-box">
                                        <div className="image-box">
                                            <img className="card-img-top" src={service.imageURL} alt="Card" />
                                        </div>

                                        <div className="card-body text-container">
                                            <h6>{service.title}</h6>
                                            <p>{service.description}</p>
                                            <p><strong>${service.charge}</strong></p>

                                        </div>
                                        <div className="p-2">
                                            <button className="btn btn-info btn-block" onClick={() => handleBook(service._id)}>
                                                <span className="mr-3">Get Service</span><FontAwesomeIcon icon={faAngleDoubleRight} />
                                            </button>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                </div>
            </div>
        </div>

    );
};

export default Services;