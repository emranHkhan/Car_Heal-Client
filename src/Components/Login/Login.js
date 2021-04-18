import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import loginimg from '../../images/login.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function (result) {
            const { displayName, email, photoURL } = result.user;
            console.log(result.user.photoURL);

            fetch('https://limitless-bastion-22533.herokuapp.com/isAdmin', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: email })
            })
                .then(res => res.json())
                .then(data => {
                    const signedInUser = { name: displayName, email: email, role: data, photoURL: photoURL}
                    setLoggedInUser(signedInUser);
                    history.replace(from);
                })

        }).catch(function (error) {
            const errorMessage = error.message;
            console.log(errorMessage);
        });
    }


    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6">
                    <img src={loginimg} alt="" style={{ maxWidth: '100%' }} />
                </div>
                <div className="col-md-6">
                    <div className="mt-5">
                        <h1 className="text-center">Please! Login.</h1>
                        <button onClick={handleGoogleSignIn} className="mt-5 btn btn-success btn-block">
                            <FontAwesomeIcon icon={faGoogle} /><span className="ml-3">Google Sign in</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Login;