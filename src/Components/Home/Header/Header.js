import React from 'react';
import './Header.css';
import bg from '../../../images/headerbg.jpg';


const Header = () => {
    return (
        <main className="mb-5">
            
                <div className="row">
                    <div className="col-md-4 d-flex justify-content-center p-5 bg-light">
                        <div>
                            <h1>Best Quality Car <br /> Servieces</h1>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur hic accusamus distinctio, maxime ipsum nulla et sed veniam quam. Officiis accusamus error aut ipsa adipisci nemo laudantium commodi vel aliquam.</p>
                        </div>

                    </div>
                    <div className="col-md-8">
                        <img src={bg} alt="" style={{ maxWidth: '100%' }} />
                    </div>
                </div>
          
        </main>
    );
};

export default Header;