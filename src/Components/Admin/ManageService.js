import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import AdminSidebar from '../Sidebar/AdminSidebar';


const ManageService = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/allservices')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setServices(data);
            })
    }, [])

    const handleDelete = (id, e) => {
        fetch(`http://localhost:5000/delete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.text())
            .then(data => {
                e.target.parentNode.parentNode.parentNode.style.display = 'none';

            })
    }

    return (
        <div className="row">
            <div className="col">
                <AdminSidebar />
            </div>
            <div className="col">
                <table className="table text-center">
                    <thead>
                        <tr>

                            <th scope="col">Service Type</th>
                            <th scope="col">Cost</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    {
                        services.map((service) =>

                            <tbody key={service._id}>
                                <tr>
                                    <td>{service.title}</td>
                                    <td>${service.charge}</td>
                                    <td><button onClick={(e) => handleDelete(service._id, e)} className="bg-danger text-white border-0 rounded"><FontAwesomeIcon icon={faTrashAlt} /></button></td>
                                </tr>
                            </tbody>
                        )
                    }
                </table>
            </div>
        </div>
    );
};

export default ManageService;