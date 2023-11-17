import SEO from "@/SEO";
import ToTopBtn from "@/components/Buttons/toTop";
import PaymentComponent from "@/components/TourView/payment";

export default function PaymentPage(params: any) {
    
    return (
        <>
            <SEO />
            <PaymentComponent />
            <ToTopBtn />
        </>
    )
}