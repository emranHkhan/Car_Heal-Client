import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="contianer-fluid p-5 text-white" style={{backgroundColor: '#1A237E'}}>
            <div className="row pt-5">
                <div className="col">
                    <div className="mb-3">
                        <h1>
                            <span className="mr-2"><FontAwesomeIcon icon={faMapMarkerAlt} style={{ color: '#FA0001' }} /></span>
                            <span>CARHEAL</span>
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid consectetur quae eos explicabo corporis dicta, voluptatibus itaque voluptas numquam.
                    </p>
                        <div>
                            <span className="mr-3">
                                <a href="https://www.facebook.com">
                                    <FontAwesomeIcon icon={faFacebook} style={{ fontSize: '30px', color: '#0D8AF0' }} />
                                </a>
                            </span>
                            <span className="mr-3">
                                <a href="https://www.twitter.com"><FontAwesomeIcon icon={faTwitter} style={{ fontSize: '30px', color: '#5DA9DD' }} /></a>
                            </span>
                            <span className="mr-3">
                                <a href="https://www.instagram.com"><FontAwesomeIcon icon={faInstagram} style={{ fontSize: '30px', color: '#DB436C' }} /></a>
                            </span>
                            <span className="mr-3">
                                <a href="https://www.youtube.com">
                                    <FontAwesomeIcon icon={faYoutube} style={{ fontSize: '30px', color: '#FA0001' }} />
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="mb-3">
                        <div className="pl-5">
                            <h3>Quick Links</h3>
                            <Link to=""><p className="mt-4">Make Appointment</p></Link>
                            <Link to=""><p>About Company</p></Link>
                            <Link to=""><p>Team Member</p></Link>
                            <Link to=""><p>Latest News</p></Link>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <h3>Newsletters</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor</p>
                    <button
                        style={{
                            padding: '10px',
                            border: 'none'
                        }}
                    >
                        <a href="https://www.gmail.com" style={{ textDecoration: 'none' }}>Email Adress</a>
                    </button>
                    <button
                        style={{
                            padding: '10px',
                            border: 'none',
                            background: 'red',
                            display: 'block',
                            width: '150px',
                            marginTop: '10px',


                        }}
                    >
                        <a href="https://www.gmail.com" style={{ textDecoration: 'none', color: 'white' }}>Email Adress</a>
                    </button>
                </div>
                <div className="col">
                    <h3>Contact</h3>
                    <p>Sed uterspis unde omnis iste natus error voluem</p>
                    <p>
                        <FontAwesomeIcon icon={faEnvelope} />
                        <span className="ml-3">Support@gmail.com</span>
                    </p>
                    <p>
                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                        <span className="ml-3">255 Main Street, New York</span>
                    </p>
                    <p>
                        <FontAwesomeIcon icon={faPhone} />
                        <span className="ml-3">+880-12-34-55-99</span>
                    </p>
                </div>
            </div>
            <p className="text-center mt-5">Copyright &copy;2021 EDevs. All rights reserved.</p>
        </footer>
    );
};

export default Footer;