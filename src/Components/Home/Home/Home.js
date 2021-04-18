import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import ShowCarousel from '../Carousel/ShowCarousel';
import Header from '../Header/Header';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';
import ArticlesLoader from '../Articles/ArticlesLoader';
import Footer from '../Footer/Footer';


const Home = () => {
    const [serviceData, setServiceData] = useState([]);
    const [reviews, setReviews] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch('https://limitless-bastion-22533.herokuapp.com/serviceonhome')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setServiceData(data);
            })
    }, [loggedInUser])

    useEffect(() => {
        fetch('https://limitless-bastion-22533.herokuapp.com/loadreviews')
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
            <ShowCarousel />
            <ArticlesLoader />
            <Reviews reviews={reviews} />
            <Footer />
        </>


    );
};

export default Home;