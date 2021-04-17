import React from 'react';
import bg from '../../../images/headerbg.jpg';


const Header = () => {
    return (
        <div>
            <div className="row">
                <div className="col-lg-4 bg-light">
                    <div className="m-5" >
                        <h1>Best Quality Car <br /> Servieces</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur hic accusamus distinctio, maxime ipsum nulla et sed veniam quam. Officiis accusamus error aut ipsa.</p>
                    </div>

                </div>
                <div className="col-lg-8">
                    <img src={bg} alt="" style={{ maxWidth: '100%' }} />
                </div>
            </div>



        </div>
    );
};

export default Header;