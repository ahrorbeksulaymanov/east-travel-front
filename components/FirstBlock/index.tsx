import { useRouter } from "next/router";

const FirstBlock = () => {

    const router = useRouter();

    return (
        <div className="first-block h-[100vh] bg-no-repeat text-white">
            <div className="container mx-auto">
                <div className="flex justify-between items-start">
                    <h1 className="mt-[26px] lg:text-[30px] text-[18px]">EastTravel.uz</h1>
                    <div className="md:flex hidden items-center md:text-[16px] text-[14px]">
                        <a href="#" className={`${router.pathname == "/" ? "active-link" : ""} xl:mr-[48px] lg:mr-[30px] md:mr-[20px] pt-[30px] relative`}  >Home</a>
                        <a href="#" className="xl:mr-[48px] lg:mr-[30px] md:mr-[20px] pt-[30px]">All tours</a>
                        <a href="#" className="xl:mr-[48px] lg:mr-[30px] md:mr-[20px] pt-[30px]">Hotels</a>
                        <a href="#" className="xl:mr-[48px] lg:mr-[30px] md:mr-[20px] pt-[30px]">Cities</a>
                        <a href="#" className="xl:mr-[48px] lg:mr-[30px] md:mr-[20px] pt-[30px]">MICE</a>
                        <a href="#" className="xl:mr-[48px] lg:mr-[30px] md:mr-[20px] pt-[30px]">Transport</a>
                        <a href="#" className="xl:mr-[48px] lg:mr-[30px] md:mr-[20px] pt-[30px]">About us</a>
                        <a href="#" className="pt-[30px]" >Contact</a>
                    </div>
                    <p className="md:block hidden mt-[33px]">Uzb</p>
                    <div className="md:hidden block p-3 bg-[#fff] bg-opacity-60 rounded-full cursor-pointer mt-[21px]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M22.5 10.5H1.5C0.671578 10.5 0 11.1716 0 12C0 12.8284 0.671578 13.5 1.5 13.5H22.5C23.3284 13.5 24 12.8284 24 12C24 11.1716 23.3284 10.5 22.5 10.5Z" fill="white"/>
                            <path d="M1.5 6.5H22.5C23.3284 6.5 24 5.82842 24 5C24 4.17158 23.3284 3.5 22.5 3.5H1.5C0.671578 3.5 0 4.17158 0 5C0 5.82842 0.671578 6.5 1.5 6.5Z" fill="white"/>
                            <path d="M22.5 17.5H1.5C0.671578 17.5 0 18.1716 0 19C0 19.8284 0.671578 20.5 1.5 20.5H22.5C23.3284 20.5 24 19.8284 24 19C24 18.1716 23.3284 17.5 22.5 17.5Z" fill="white"/>
                        </svg>
                    </div>
                </div>
                <div className="pt-[30vh] text-center" data-aos="fade-up">
                    <h1 className="font-semibold lg:text-[56px] md:text-[45px] text-[40px]">Make your travel whishlist, <br /> we’ll do the rest</h1>
                    <p className="lg:text-[24px] md:text-[22px] text-[20px]">Special offers to suit your plan</p>
                </div>
            </div>
        </div>
    )
}

export default FirstBlock;
