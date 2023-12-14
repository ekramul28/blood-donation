import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react';
import HelmetAll from '../../shared/Helmet/HelmetAll';
import useAuth from '../../hooks/useAuth';

const CheckoutForm = () => {
    // const {user}=useAuth();
    // const [clientSecret, setClientSecret] = useState('')
    // const [transactionId, setTransactionId] = useState('');
    const stripe = useStripe();
    const element = useElements();
    const [error, setError] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!stripe || !element) {
            return;
        }
        const card = element.getElement(CardElement);
        if (card == null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        })
        if (error) {
            console.log(error);
            setError(error.message)
        } else {
            console.log(paymentMethod);
            setError(' ')
        }

        // const {paymentIntent,error:confirmError}=await stripe.confirmCardPayment(clientSecret,{
        //     payment_method:{
        //         card:card,
        //         billing_details:{
        //             email: user?.email || 'anonymous',
        //             name: user?.displayName || 'anonymous'
        //         }
        //     }
        // })

    }
    return (
        <div className='card bg-slate-100 pt-8'>
            <HelmetAll title={"grant || payment"}></HelmetAll>

            <form onSubmit={handleSubmit} className=' w-96 mx-auto  '>
                <CardElement className='input py-5 text-red-500'
                    options={{
                        style: {
                            base: {

                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                >
                </CardElement>
                <div className='flex justify-center items-center mt-5'>
                    <button className='btn bg-green-500 text-white ' type='submit' disabled={!stripe} >Pay</button>

                </div>
                <h1 className='text-red-600 py-3'>{error}</h1>
            </form>
        </div>
    );
};

export default CheckoutForm;