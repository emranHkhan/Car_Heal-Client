import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { UserContext } from '../../App';
import ProcessPayment from '../Payment/ProcessPayment';
import Sidebar from '../Sidebar/Sidebar';


const Book = () => {
    const [orders, setOrders] = useState({})
    const { id } = useParams();


    useEffect(() => {
        fetch(`http://localhost:5000/serviceonbook/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data[0]);
                setOrders(data[0])
            })
    }, [id])

    const { register, handleSubmit } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [shippingData, setShippingData] = useState(null);

    const onSubmit = data => {
        setShippingData(data);
        console.log(data);
    };

    const handlePaymentSuccess = paymentId => {

        const orderDetails = {
            ...shippingData,
            description: orders.description,
            status: '',
            payId: paymentId
        }



        fetch('http://localhost:5000/addOrder', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(orderDetails)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    console.log(data);
                    alert('your order placed successfully')
                }
            })
    }



    return (
        <div className="row">

            <div className="col-3">
                <Sidebar />
            </div>

            <div className="col-9 p-5" style={{ display: shippingData ? 'none' : 'block' }}>
                <form className="form-group" onSubmit={handleSubmit(onSubmit)}>
                    <label>Name</label>
                    <input name="name" defaultValue={loggedInUser.name} ref={register({ required: true })} className="form-control" />
                    <label className="mt-3">Email</label>
                    <input name="email" defaultValue={loggedInUser.email} ref={register({ required: true })} className="form-control" />
                    <label className="mt-3">Service Title</label>
                    <input name="title" defaultValue={orders.title} ref={register({ required: true })} className="form-control" />

                    <div className="d-flex mt-4 justify-content-between align-items-center">
                        <label>You have to pay <strong>${orders.charge}</strong></label>
                        <input type="submit" className="btn btn-primary w-75" />
                    </div>
                </form>
            </div>

            <div className="col-9 p-5" style={{ display: shippingData ? 'block' : 'none' }}>
                <h1>Please Pay</h1>
                <ProcessPayment handlePaymentSuccess={handlePaymentSuccess} />
            </div>
        </div>
    );
};

export default Book;