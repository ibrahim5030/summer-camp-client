import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useLoaderData } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";



const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);
const Payment = () => {    

    const classesData = useLoaderData();    
    console.log(classesData);

    return (
        <div className="w-8/12">
            <h3 className="text-3xl font-bold text-center py-10">Please Process Payment</h3>
            <Elements stripe={stripePromise}>
                <CheckoutForm classesData={classesData} price={classesData[0].price}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;