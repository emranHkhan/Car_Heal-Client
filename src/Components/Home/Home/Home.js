import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import Header from '../Header/Header';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';

const Home = () => {
    const [serviceData, setServiceData] = useState([]);
    const [reviews, setReviews] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch('http://localhost:5000/serviceonhome')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setServiceData(data);
            })
    }, [loggedInUser])

    useEffect(() => {
        fetch('http://localhost:5000/loadreviews')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setReviews(data);
            })
    }, [loggedInUser])


    return (
        <>
            <Header />
            <Services serviceData={serviceData} />
            <Reviews reviews={reviews}/>
        </>


    );
};

export default Home;