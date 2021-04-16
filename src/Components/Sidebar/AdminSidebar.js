import React from 'react';
import { Link } from 'react-router-dom';

const AdminSidebar = () => {
    return (
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
    );
};

export default AdminSidebar;