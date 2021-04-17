import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

import firebase from "firebase/app";
import "firebase/auth";

const Sidebar = () => {

    const [isAdmin, setIsAdmin] = useState(false);
    const [loggedInUser, setLoggedInuser] = useContext(UserContext);

    // useEffect(() => {
    //     fetch('https://limitless-bastion-22533.herokuapp.com/isAdmin', {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify({ email: loggedInUser.email })
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //             setIsAdmin(data);
    //         })

    // }, [loggedInUser])


   const handleSignOut = () => {
    firebase.auth().signOut().then(() => {
        setLoggedInuser({});
      }).catch((error) => {
        console.log(error);
      });
   }




    return (
        <div className="h-100" style={{backgroundImage: 'linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)'}}>
            {
                loggedInUser.role ?
                  <div className="pt-5 d-flex flex-column">
                    <ul style={{listStyle: 'none'}}>
                        <li className='mb-5'>
                            <Link to='/admin/orders'>Orders list</Link>
                        </li>
                        <li className='mb-5'>
                            <Link to='/admin/addservice'>Add Service</Link>
                        </li>
                        <li className='mb-5'>
                            <Link to='/admin/makeadmin'>Make Admin</Link>
                        </li>
                        <li className='mb-5'>
                            <Link to='/admin/manageservice'>Manage Service</Link>
                        </li>
                    </ul>

                    <button className="btn btn-danger w-75 mt-5 mx-auto" onClick={handleSignOut}>Sign Out</button>
                    </div>

                    :
                  <div  className="pt-5 d-flex flex-column">                  
                    <ul style={{listStyle: 'none'}}>
                        <li className='mb-5'>
                            <Link to='/book'>Book</Link>
                        </li>
                        <li className='mb-5'>
                            <Link to='/user/bookinglist'>Booking List</Link>
                        </li>
                        <li className='mb-5'>
                            <Link to='/user/review'>Review</Link>
                        </li>
                    </ul>
                    <button className="btn btn-danger w-75 mt-5 mx-auto" onClick={handleSignOut}>Sign Out</button>
                    </div>
 


            }



        </div>

    );
};


export default Sidebar;