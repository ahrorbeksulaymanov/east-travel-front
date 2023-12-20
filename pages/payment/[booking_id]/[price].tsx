import SEO from "@/SEO";
import ToTopBtn from "@/components/Buttons/toTop";
import PaymentComponent from "@/components/TourView/payment";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function PaymentPage() {
    
    const router = useRouter();

    useEffect(() => {
        const isChecked = localStorage.getItem("phone_is_checked")
        if(isChecked !== "1") {
            return router.back()
        }
    }, [])

    return (
        <>
            <SEO />
            <PaymentComponent />
            <ToTopBtn />
        </>
    )
}