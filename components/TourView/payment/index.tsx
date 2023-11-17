import {useEffect, useState} from "react";
import axios from "axios";
import { BASE_URL } from "@/congif/constans";
import dropin from 'braintree-web-drop-in'
import { useRouter } from "next/router";

const PaymentComponent = () => {
    
    const router = useRouter();
    const { booking_id, price } = router.query;


    const [clientToken, setClientToken] = useState("");
    const [braintreeInstance, setBraintreeInstance] = useState<any>(undefined)

    useEffect(() => {
        (
            async () => {
                try {
                    let resp = await axios.get(`${BASE_URL}/payment/client-token`);
                    setClientToken(resp.data?.data)
                } catch (e) {

                }
            }
        )()
    }, [])

    useEffect(() => {
        if (clientToken) {            
            const initializeBraintree = () => dropin.create({
                authorization: clientToken, // insert your tokenization key or client token here
                container: "#braintree-container",
            }, function (error: any, instance:any) {
                if (error)
                    console.error(error)
                else
                    setBraintreeInstance(instance);
            });

            if (braintreeInstance) {
                braintreeInstance
                    .teardown()
                    .then(() => {
                        initializeBraintree();
                    });
            } else {
                initializeBraintree();
            }
        }
    }, [clientToken])

    const receivePayment = () => {
        
        if (braintreeInstance) {
            braintreeInstance.requestPaymentMethod(
                async (error: any, payload:any) => {
                    if (error) {
                        console.error(error);
                    } else {
                        await axios.post(`${BASE_URL}/payment/checkout?nonce=${payload.nonce}&bookingId=${booking_id}`);
                    }
                });
        }
    }


    return <div>
        <div className="relative cities-bg h-[50vh] bg-cover bg-no-repeat">
            <h1 data-aos="fade-up" data-aos-duration="800" className="lg:text-[64px] md:text-[54px] sm:text-[44px] text-[34px] absolute top-[45%] text-white font-bold text-center w-[100%]">Payment</h1>
        </div>
        <div className="container mx-auto">
            <div className="mb-5 mt-10">
                <span className="font-semibold mr-4">Total price:</span>
                <span className="font-semibold">${price}</span>
            </div>
            <div id="braintree-container"></div>
            <button onClick={receivePayment} className="px-5 bg-main-color hover:bg-[#FFB800] text-white py-2 rounded cursor-pointer" >Pay</button>
        </div>
    </div>
}

export default PaymentComponent;