import React from 'react';
import nodata from '../../images/nodata.png'
import Sidebar from '../Sidebar/Sidebar';

const EmptyBook = () => {
    return (
        <div className="row" style={{height: '100vh'}}>
            <div className="col-md-3">
                <Sidebar />
            </div>
            <div className="col-md-9">
            <h1 className="text-center mt-4">Go To Home Page and Order Our Services</h1>
           <img src={nodata} alt="" style={{width: "500px", display: 'block'}} className="mx-auto mt-5" />
            </div>
        </div>
           
    );
};

export default EmptyBook;