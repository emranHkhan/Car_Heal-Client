import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import { Nav } from 'react-bootstrap';
import { UserContext } from '../../../App';
import firebase from "firebase/app";
import "firebase/auth";

const NavBar = () => {
    const [isAdmin, setIsAdmin] = useState({});
    const role = 'role';
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch('https://limitless-bastion-22533.herokuapp.com/admin?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => {
                setIsAdmin(data[0])
            })
    }, [loggedInUser])


    const handleSignOut = () => {
        firebase.auth().signOut().then(() => {
            setLoggedInUser({});
        }).catch((error) => {
            console.log(error);
        });
    }


    return (
        <Navbar collapseOnSelect expand="md" variant="dark" style={{ backgroundColor: '#1A237E' }}>
            <Navbar.Brand>
                <Link to="/" style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold', fontSize: '1.5rem', fontFamily: 'Montserrat, sans-serif' }}>CarHeal</Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link as={Link} to="/" className='link'>
                        Home
                    </Nav.Link>

                    <Nav.Link className='link' as={Link} to="/blogs">
                        Blogs
                     </Nav.Link>

                    <Nav.Link className='link' as={Link} to="/aboutus">
                        About Us
                    </Nav.Link>

                    <Nav.Link className='link' as={Link} to="/contact">
                        Contact
                    </Nav.Link>

                    {
                        (isAdmin && isAdmin[role] === 'admin') ?

                            <Nav.Link as={Link} to="/admin" className='link'>
                                Admin
                            </Nav.Link>
                            :

                            loggedInUser.email &&
                            <Nav.Link className='link' as={Link} to="/book">
                                Dashboard
                            </Nav.Link>
                    }


                    {
                        loggedInUser.email ? <button className="btn btn-danger btn-sm" onClick={handleSignOut}>Log Out</button>:
                            <Nav.Link as={Link} to="/login" className='link'>
                                Login
                            </Nav.Link>
                    }

                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBar;