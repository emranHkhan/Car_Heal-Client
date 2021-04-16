import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SimpleCardform from './SimpleCardForm';

const stripePromise = loadStripe('pk_test_51Ie8TMEsYXQrLzkYabVjvvNXN0QPDQ005C1kLJ8vH2UvasT3lpBFV1indNxdiAWnlAC5JoESnH1bT7ukRMDvPwqw00JY8S5Q5c');

const ProcessPayment = ({ handlePaymentSuccess }) => {
    return (
        <Elements stripe={stripePromise}>
            <SimpleCardform handlePaymentSuccess={handlePaymentSuccess} />
        </Elements>
    );
};

export default ProcessPayment;