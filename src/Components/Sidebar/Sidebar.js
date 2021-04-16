import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const Sidebar = () => {

    const [isAdmin, setIsAdmin] = useState(false);
    const [loggedInUser, setLoggedInuser] = useContext(UserContext);

    // useEffect(() => {
    //     fetch('http://localhost:5000/isAdmin', {
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

    return (
        <div>
            {
                loggedInUser.role ?

                    <ul>
                        <li>
                            <Link to='/admin/orders'>Orders list</Link>
                        </li>
                        <li>
                            <Link to='/admin/addservice'>Add Service</Link>
                        </li>
                        <li>
                            <Link to='/admin/makeadmin'>Make Admin</Link>
                        </li>
                        <li>
                            <Link to='/admin/manageservice'>Manage Service</Link>
                        </li>
                    </ul>


                    :

                    <ul>
                        <li>
                            <Link to='/book'>Book</Link>
                        </li>
                        <li>
                            <Link to='/user/bookinglist'>Booking List</Link>
                        </li>
                        <li>
                            <Link to='/user/review'>Review</Link>
                        </li>
                    </ul>


            }



        </div>

    );
};


export default Sidebar;