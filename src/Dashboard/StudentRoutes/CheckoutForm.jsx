import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import useAxiosSecure from "../../Hooks/useAxiosSecure";


const CheckoutForm = ({price}) => {
    const stripe = useStripe()
    const elements = useElements()
    const [cardError, setCardError] = useState('')
    const [clientSecret, setClientSecret] = useState("");
    const {user} = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure()
    const [proccessing,setProccessing] = useState(false)
    const [transactionId,setTransactionId] = useState('')


    useEffect(() => {
        // fetch("http://localhost:5000/create-payment-intend", {
        //   method: "POST",
        //   headers: { "Content-Type": "application/json" },
        //   body: price,
        // })
        //   .then(res => res.json())
        //   .then(data => {
        //     console.log(data.clientSecret)
        //     setClientSecret(data.clientSecret)
        // });

        axiosSecure.post('/create-payment-intend', {price})
        .then(res =>{
            console.log(res.data.clientSecret)
            setClientSecret(res.data.clientSecret)
        })
      }, [price]);


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

        const {paymentIntent, error: comfirmError} = await stripe.confirmCardPayment(
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

          if(comfirmError){
            setCardError(comfirmError)
          }
          console.log(paymentIntent)
          setProccessing(false)
          if(paymentIntent.status === 'succeeded'){
            setTransactionId(paymentIntent.id)
          }
    }

    return (
        <>
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