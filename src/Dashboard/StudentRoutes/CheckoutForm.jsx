import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import SectionTitle from "../../Pages/Shared/SectionTitle";


const CheckoutForm = ({ price, clas }) => {
    const stripe = useStripe()
    const elements = useElements()
    const [cardError, setCardError] = useState('')
    const [clientSecret, setClientSecret] = useState("");
    const { user } = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure()
    const [proccessing, setProccessing] = useState(false)
    const [transactionId, setTransactionId] = useState('')
    // const [selectedClasses] = useSelectedClass()


    useEffect(() => {
      
        if (price > 0) {

            axiosSecure.post('/create-payment-intend', { price })
                .then(res => {
                    console.log(res.data.clientSecret)
                    setClientSecret(res.data.clientSecret)
                })
        }
    }, [price, axiosSecure]);


    const handleSubmit = async (event) => {
        event.preventDefault()

        if (!stripe || !elements) {
            return
        }


        const card = elements.getElement(CardElement);

        if (card == null) {
            return
        }
        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });
        if (error) {
            setCardError(error.message)
        }
        else {
            setCardError('')

        }

        setProccessing(true)

        const { paymentIntent, error: comfirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user?.displayName || 'anonymous',
                        email: user?.email || 'anonymous'
                    },
                },
            },
        );

        if (comfirmError) {
            setCardError(comfirmError)
        }
        console.log(paymentIntent)
        setProccessing(false)
        if (paymentIntent?.status === 'succeeded') {
            setTransactionId(paymentIntent.id)
            const payment = {
                email: user?.email,
                transactionId: paymentIntent.id,
                className: clas?.className,
                date: new Date(),
                ClasId: clas?._id,
                classesId: clas?.clasId,
                enrolledClass: clas
            }
            axiosSecure.post('/payments', payment)
                .then(res => {
                    if (res.data.isertedId) {
                        //
                    }
                })
        }
    }

    return (
        <>
        <SectionTitle heading={'Checkout Form'}></SectionTitle>
            <form className=" px-12 my-12" onSubmit={handleSubmit}>
                <CardElement
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
                />
                <button className=" btn btn-sm bg-green-600 mt-5" type="submit" disabled={!stripe || !clientSecret || proccessing}>
                    Pay
                </button>
            </form>
            {cardError && <p className=" pl-12 text-red-500 mt-10">{cardError}</p>}
            {transactionId && <p className=" text-green-600">Transaction Completed with Transactio Id : {transactionId}</p>}
        </>
    );
};

export default CheckoutForm;