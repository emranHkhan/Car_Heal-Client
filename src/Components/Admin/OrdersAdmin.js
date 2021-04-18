import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const OrdersAdmin = () => {
    const [servicesOnAdmin, setServicesOnAdmin] = useState([]);
    useEffect(() => {
        fetch('https://limitless-bastion-22533.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => {
                setServicesOnAdmin(data)
            })
    }, [])

    const handleChange = (value, id) => {
        fetch(`https://limitless-bastion-22533.herokuapp.com/update/${id}`, {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({status: value})
        })
        .then(res => res.json())
        .then(data => {
            console.log('updated');
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

                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Service</th>
                            <th scope="col">Pay with</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    {
                        servicesOnAdmin.map((service) =>

                            <tbody key={service._id}>
                                <tr>
                                    <td >{service.name}</td>
                                    <td>{service.email}</td>
                                    <td>{service.title}</td>
                                    <td>Credit Card</td>
                                    <td>
                                        <form className="form-inline" >
                                            <select onChange={(e) => handleChange(e.target.value, service._id)}>
                                                <option value="pending">pending</option>
                                                <option value="done">done</option>
                                                <option value="ongoing">ongoing</option>
                                            </select>
                                        </form>
                                    </td>
                                </tr>
                            </tbody>
                        )
                    }
                </table>
            </div>
        </div>
    );
};

export default OrdersAdmin;