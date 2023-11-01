import HeaderClient from "../Header";

const FirstBlock = () => {

    return (
        <div className="first-block h-[100vh] bg-no-repeat text-white">
                <HeaderClient />
            <div className="container mx-auto">
                <div className="pt-[30vh] text-center" data-aos="fade-up" data-aos-duration="800">
                    <h1 className="font-semibold lg:text-[56px] md:text-[45px] text-[40px]">Make your travel wishlist, <br /> we’ll do the rest</h1>
                    <p className="lg:text-[24px] md:text-[22px] text-[20px]">Special offers to suit your plan</p>
                </div>
            </div>
        </div>
    )
}

export default FirstBlock;
