import React from 'react';
import { useForm } from 'react-hook-form';
import Sidebar from '../Sidebar/Sidebar';

const MakeAdmin = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data, e) => {
        e.target.reset();

        const admin ={
            email: data.email,
            role: 'admin'
        }

        fetch('http://localhost:5000/createadmin', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(admin)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            alert('admin has been created');
        })
    }

    return (
        <div className="row">
            <div className="col">
                <Sidebar />
            </div>
            <div className="col">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email" name="email" ref={register} />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
               
        </div>
        </div >
    );
};

export default MakeAdmin;