import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../Pages/Shared/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useLocation } from "react-router-dom";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PK)
const Payment = () => {
    const location = useLocation()
    console.log(location?.state)
    const clas = (location?.state)
    return (
        <div className=" w-full">
            <SectionTitle heading={'Payment'} subHeading={'Proccess'}></SectionTitle>
            <h1>Get The class by Payment</h1>
                <Elements stripe={stripePromise}>
                    <CheckoutForm clas={clas} price={parseInt(clas?.price)}></CheckoutForm>
                </Elements>
        </div>
    );
};

export default Payment;