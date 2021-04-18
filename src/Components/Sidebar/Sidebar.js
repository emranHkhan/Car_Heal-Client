import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const Sidebar = () => {
    const [loggedInUser, setLoggedInuser] = useContext(UserContext);

    return (
        <div className="h-100" style={{ backgroundImage: 'linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)' }}>
            {
                loggedInUser.role ?
                    <div className="pt-5 d-flex flex-column">
                        <ul style={{ listStyle: 'none' }}>
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

                    </div>

                    :
                    <div className="pt-5 d-flex flex-column">
                        <ul style={{ listStyle: 'none' }}>
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
                       
                    </div>

            }
        </div>

    );
};


export default Sidebar;