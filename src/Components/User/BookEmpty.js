import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

const BookEmpty = () => {
    return (
        <div className="row" style={{height: "100vh"}}>
            <div className="col-md-3">
                <Sidebar />
            </div>
            <div className="col-md-9">
                <img src="../../images/nodata.png" alt=""/>
            </div>
        </div>
    );
};

export default BookEmpty;