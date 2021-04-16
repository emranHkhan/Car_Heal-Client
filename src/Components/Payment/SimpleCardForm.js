import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import React, { useState } from 'react';

const SimpleCardform = ({ handlePaymentSuccess }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [paymentError, setPaymentError] = useState(null);
    const [paymentSuccess, setPaymentSuccess] = useState(null);

    const handleSubmit = async (event) => {
        event.target.reset();
        event.preventDefault();
        if (!stripe || !elements) {

            return;
        }
        const cardElement = elements.getElement(CardElement);
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (error) {
            setPaymentError(error.message)
            setPaymentSuccess(null);
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            setPaymentSuccess(paymentMethod.id)
            setPaymentError(null);
            handlePaymentSuccess(paymentMethod.id);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement />
                <button type="submit" disabled={!stripe} className="mt-4 btn px-5 btn-primary">
                    Pay
                </button>
            </form>
            {paymentError && <p className="text-danger mt-2">{paymentError}</p>}
            {paymentSuccess && <p className="text-success mt-2">Your payment was successful</p>}
        </div>

    );
};

export default SimpleCardform;