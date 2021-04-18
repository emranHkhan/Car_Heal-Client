import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'



const ManageService = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://limitless-bastion-22533.herokuapp.com/allservices')
            .then(res => res.json())
            .then(data => {
                setServices(data);
            })
    }, [])

    const handleDelete = (id, e) => {
        fetch(`https://limitless-bastion-22533.herokuapp.com/delete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.text())
            .then(data => {
                e.target.parentNode.parentNode.parentNode.parentNode.style.display = 'none';

            })
    }

    return (
        <div className="row" style={{height: '100vh'}}>
            <div className="col-md-3">
                <Sidebar />
            </div>
            <div className="col-md-9 p-5">
                <table className="table">
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