import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import { Nav } from 'react-bootstrap';
import { UserContext } from '../../../App';

const NavBar = () => {
    const [isAdmin, setIsAdmin] = useState({});
    const role = 'role';
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch('http://localhost:5000/admin?email=' + loggedInUser.email)
        .then(res => res.json())
        .then(data => {
           console.log(data[0]);
           setIsAdmin(data[0])
        })
    }, [loggedInUser])

    console.log('role', isAdmin && isAdmin[role]);

    return (
        <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
            <Navbar.Brand>
                <Link to="/" style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold', fontSize: '1.5rem', fontFamily: 'Montserrat, sans-serif', marginLeft: '20px' }}>CarHeal</Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link as={Link} to="/" className='link'>
                        Home
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
                        loggedInUser.email ? <p style={{ marginTop: '6.5px', color: 'white', fontWeight: 'bold' }}>{loggedInUser.name}</p> :
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