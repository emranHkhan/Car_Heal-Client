import React, { useContext, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';

const ServicesAdmin = () => {
    const spinnerStyle = {
        position: 'relative',
        bottom: '0px',
        left: '320px'
    }

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [imageURL, setImageURL] = useState(null);
    const { register, handleSubmit } = useForm();
    const [isImageLoaded, setIsIamgeLoaded] = useState(false)

    const onSubmit = (data, e) => {
        e.target.reset();


        const serviceData = {
            title: data.title,
            charge: data.charge,
            description: data.description,
            imageURL: imageURL,
            name: loggedInUser.name,
            email: loggedInUser.email,
            status: ''
        }

        console.log(serviceData);

        fetch('http://localhost:5000/addService', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(serviceData)
        })
            .then(res => {
                console.log(res);
                alert('Service is added');
            })
    }

    const handleImageUpload = (event) => {
        setIsIamgeLoaded(true)
        const imageData = new FormData();
        imageData.set('key', '30e75a008365fb81d9661d95cf8a9fd3');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(res => {
                console.log(res);
                setImageURL(res.data.data.display_url);
                setIsIamgeLoaded(false)
            })
            .catch(err => {
                console.log(err);
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
                        <label htmlFor="exampleInputEmail1">Service Title</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Enter Title" name="title" ref={register} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="exampleInputEmail3">Service Charge</label>
                        <input type="text" className="form-control" id="exampleInputEmail3" placeholder="Enter Amount" name="charge" ref={register} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea2">Description</label>
                        <textarea className="form-control" id="exampleFormControlTextarea2" rows="3" placeholder="Enter Description" name="description" ref={register}></textarea>
                    </div>

                    <div className="form-group">
                        <label htmlFor="exampleFormControlFile4">Image</label>
                        <input type="file" className="form-control-file" id="exampleFormControlFile4" onChange={handleImageUpload} />
                    </div>

                    {
                        isImageLoaded ?
                            <div className="spinner-border text-priamry" role="status" style={spinnerStyle}>
                                <span className="sr-only">Loading...</span>
                            </div>
                            :
                            <div>
                                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                            </div>

                    }
                </form>
            </div>
        </div>
    );
};

export default ServicesAdmin;