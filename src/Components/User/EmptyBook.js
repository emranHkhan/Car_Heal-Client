import React from 'react';
import nodata from '../../images/nodata.png'
import Sidebar from '../Sidebar/Sidebar';

const EmptyBook = () => {
    return (
        <div className="row">
            <div className="col-3">
                <Sidebar />
            </div>
            <div className="col-9">
            <h1 className="text-center mt-4">Go to Home page and Order our service</h1>
           <img src={nodata} alt="" style={{width: "500px", display: 'block'}} className="mx-auto mt-5" />
            </div>
        </div>
           
    );
};

export default EmptyBook;