import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { UserContext } from '../../App';
import ProcessPayment from '../Payment/ProcessPayment';
import Sidebar from '../Sidebar/Sidebar';
import payonline from '../../images/payonline.png';
import OrdersAdmin from '../Admin/OrdersAdmin';


const Book = () => {
    const [orders, setOrders] = useState({})
    const { id } = useParams();


    useEffect(() => {
        fetch(`https://limitless-bastion-22533.herokuapp.com/serviceonbook/${id}`)
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



        fetch('https://limitless-bastion-22533.herokuapp.com/addOrder', {
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
        <>
        {
            loggedInUser.role ? <OrdersAdmin /> :
            <div className="row" style={{height: '100vh'}}>

            <div className="col-md-3">
                <Sidebar />
            </div>

            <div className="col-md-9 p-5" style={{ display: shippingData ? 'none' : 'block' }}>
                <form className="form-group w-75" onSubmit={handleSubmit(onSubmit)}>
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

            <div className="col-md-9" style={{ display: shippingData ? 'block' : 'none' }}>
                <div className="mt-5 p-5">
                    <ProcessPayment handlePaymentSuccess={handlePaymentSuccess} />
                </div>

            </div>
        </div>
        }
        </>
    );
};

export default Book;