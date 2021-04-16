import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

const BookEmpty = () => {
    return (
        <div className="row">
            <div className="col">
                <Sidebar />
            </div>
            <div className="col">
                <img src="../../images/nodata.png" alt=""/>
            </div>
        </div>
    );
};

export default BookEmpty;