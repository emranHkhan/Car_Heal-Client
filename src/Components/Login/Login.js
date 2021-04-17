import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import loginimg from '../../images/login.png';


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
            const { displayName, email } = result.user;
            // const signedInUser = { name: displayName, email }
            // setLoggedInUser(signedInUser);
            // history.replace(from);


            fetch('https://limitless-bastion-22533.herokuapp.com/isAdmin', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: email })
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    // setIsAdmin(data);
                    const signedInUser = { name: displayName, email: email, role: data }
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
                    <img src={loginimg} alt="" style={{maxWidth: '100%'}} />
                </div>
                <div className="col-md-6">
                    <div className="mt-5">
                        <h1 className="text-center">Please! Login.</h1>
                        <button onClick={handleGoogleSignIn} className="mt-5 btn btn-success btn-block">Google Sign in</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Login;