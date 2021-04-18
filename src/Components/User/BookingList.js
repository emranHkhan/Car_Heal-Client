import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import Sidebar from '../Sidebar/Sidebar';

const BookingList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [ordersInfo, setOrdersInfo] = useState([]);

    useEffect(() => {
        fetch('https://limitless-bastion-22533.herokuapp.com/allorders?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setOrdersInfo(data)
            })

    }, [loggedInUser])

    return (
        <div className="row" style={{ height: '100vh' }}>
            <div className="col-md-3">
                <Sidebar />
            </div>
            <div className="col-md-9">
                <div className="row">

                    {
                        ordersInfo.length > 0 ?
                        ordersInfo.map(info =>
                            <div className="col" key={info._id}>
                                <div className="card mt-3" style={{ width: "18rem" }}>

                                    <div className="card-body text-center">
                                        <div className="d-flex justify-content-between mb-3">
                                            <h4 className="card-title">{info.title}</h4>
                                            {
                                                info.status &&  <strong style={{backgroundColor: 'aliceblue', padding:'5px 10px 0', borderRadius: '5px'}}>{info.status}</strong>
                                            }
                                        </div>
                                        <p className="card-text">{info.description}</p>
                                    </div>
                                </div>
                            </div>

                        )
                        :
                        <h1 className="text-center col">
                            Currently You Have No Bookings.
                        </h1>

                    }

                </div>
            </div>
        </div>
    );
};

export default BookingList;