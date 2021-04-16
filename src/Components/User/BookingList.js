import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import Sidebar from '../Sidebar/Sidebar';

const BookingList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [ordersInfo, setOrdersInfo] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/allorders?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setOrdersInfo(data)
            })

    }, [loggedInUser])

    return (
        <div className="row">
            <div className="col-3">
                <Sidebar />
            </div>
            <div className="col-9">
                <div className="row">

                    {
                        ordersInfo.map(info =>
                            <div className="col" key={info._id}>
                                <div className="card mt-3" style={{ width: "18rem" }}>

                                    <div className="card-body text-center">
                                        <h5 className="card-title">{info.title}</h5>
                                        <p className="card-text">{info.description}</p>
                                        <p>{info.status ? info.status : 'not availabe'}</p>
                                    </div>
                                </div>
                            </div>

                        )
                    }

                </div>
            </div>
        </div>
    );
};

export default BookingList;