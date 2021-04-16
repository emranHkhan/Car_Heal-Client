import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';


const Login = () => {
    const [loggedInUser, setLoggedInUser] =  useContext(UserContext);
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


            fetch('http://localhost:5000/isAdmin', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: email })
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    // setIsAdmin(data);
                    const signedInUser = {name: displayName, email: email, role: data}
                    setLoggedInUser(signedInUser);
                    history.replace(from);
                })






        }).catch(function (error) {
            const errorMessage = error.message;
            console.log(errorMessage);
        });
    }




   console.log(loggedInUser);
 


    return (
        <div>
            <h1>This is Login</h1>
            <button onClick={handleGoogleSignIn}>Google Sign in</button>
        </div>
    );
};

export default Login;