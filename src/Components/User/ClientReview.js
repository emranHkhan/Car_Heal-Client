import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';
import Sidebar from '../Sidebar/Sidebar';

const ClientReview = () => {
    const { register, handleSubmit } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const onSubmit = (data, e) => {
        e.target.reset();

        const newData = {...data, photoURL: loggedInUser.photoURL};

        fetch('https://limitless-bastion-22533.herokuapp.com/addreviews', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                alert('Thanks For Your Review');
            })
    };

    return (
        <div className="row" style={{ height: '100vh' }}>
            <div className="col-md-3">
                <Sidebar />
            </div>
            <div className="col-md-9">
                <form className="form-group p-5 w-75" onSubmit={handleSubmit(onSubmit)}>

                    <input name="name" ref={register({ required: true })} className="form-control mb-4" placeholder="Your Name" />

                    <input name="designation" ref={register({ required: true })} className="form-control mb-4" placeholder="Company's Name, Designation" />

                    <textarea className="form-control mb-4" rows="3" name="description" ref={register({ required: true })} placeholder="Descritpion"></textarea>

                    <input type="submit" className="btn btn-primary btn-block" />

                </form>
            </div>
        </div>
    );
};

export default ClientReview;