import React from 'react';
import { useForm } from 'react-hook-form';
import Sidebar from '../Sidebar/Sidebar';

const ClientReview = () => {

    const { register, handleSubmit } = useForm();

    const onSubmit = (data, e) => {
        e.target.reset();
        
        fetch('http://localhost:5000/addreviews', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            alert('Thanks For Your Review');
        })
    };



    return (
        <div className="row">
            <div className="col">
                <Sidebar />
            </div>
            <div className="col">
            <form className="form-group p-5" onSubmit={handleSubmit(onSubmit)}>
                    
                    <input name="name" ref={register({ required: true })} className="form-control mb-4" placeholder="Your Name" />
                   
                    <input name="designation" ref={register({ required: true })} className="form-control mb-4" placeholder="Company's Name, Designation" />

                    <textarea className="form-control mb-4" rows="3" name="description" ref={register({ required: true })} placeholder="Descritpion"></textarea>

                    <input type="submit" className="btn btn-primary w-75" />
                    
                </form>
            </div>
        </div>
    );
};

export default ClientReview;