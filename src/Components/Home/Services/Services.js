import React from 'react';
import { useHistory } from 'react-router';
import './Services.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'




const Services = ({ serviceData }) => {
    const history = useHistory();
    const handleBook = (id) => {
        history.push(`/user/book/${id}`)
    }

   

   
    return (
        <div className="container-fluid text-center py-5" style={{backgroundImage: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'}}>
            <h6>What we offer</h6>
            <h1 className="mt-4">We Provide Quality Service</h1>

            <div id="cards_landscape_wrap-2">
                <div className="container">
                    <div className="row">

                        {/* card start */}

                        {
                            serviceData.map(service =>

                                <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3" key={service._id}>
                                    <div className="card-flyer">
                                        <div className="text-box">
                                            <div className="image-box">
                                                <img src={service.imageURL} alt="" />
                                            </div>
                                            <div className="text-container">
                                                <h6>{service.title}</h6>
                                                <p>{service.description}</p>
                                                <p><strong>${service.charge}</strong></p>
                                            </div>
                                        </div>
                                        <div className="p-2">
                                            <button className="btn btn-info btn-block" onClick={() => handleBook(service._id)}>
                                                <span className="mr-3">Get Service</span><FontAwesomeIcon icon={faAngleDoubleRight} />
                                            </button>
                                           
                                        </div>
                                    </div>
                                </div>

                            )
                        }

                        {/* card end */}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;