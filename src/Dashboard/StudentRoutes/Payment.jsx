import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../Pages/Shared/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useLocation } from "react-router-dom";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PK)
const Payment = () => {
    const location = useLocation()
    console.log(location?.state)
    const price = parseInt(location?.state)
    return (
        <div className=" w-full">
            <SectionTitle heading={'Payment'} subHeading={'Proccess'}></SectionTitle>
            <h1>Get The class by Payment</h1>
                <Elements stripe={stripePromise}>
                    <CheckoutForm price={price}></CheckoutForm>
                </Elements>
        </div>
    );
};

export default Payment;