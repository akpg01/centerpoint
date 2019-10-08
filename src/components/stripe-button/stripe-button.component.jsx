import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_Spkney7JIMe9hnXnUIWhuK0K008pTzLp1P';

    const onToken = token => {
        console.log(token);
        alert('Payement Successful');
    }
    return (
        <StripeCheckout
            label='Pay Now'
            name='CenterPoint Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;