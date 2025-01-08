import { ITour } from "@/models";
import BlockHeader from "../../blockHeader";
import TourCards from "../tour-cards";
import { useRouter } from "next/router";

const PopularTours = ({data} : {data: ITour[]}) => {

    const router = useRouter()

    return (
        <div className="font-noto bg-[#F8F8F8] md:pt-[64px] pt-[34px] md:pb-[94px] pb-[54px]">
            <div className="container mx-auto">
                <BlockHeader 
                    title="Tour"
                    tag={<h2 className="xl:text-[42px] md:text-[35px] text-[32px] text-second-color font-medium"> Popular <span className="text-main-color">Tours</span> on Uzbekistan </h2>}
                    desc="Select your the best Uzbekistan tour"
                    btlUrl='all-tours'
                    btnTitle="Discover More"
                    tagMobile={<h2 className="text-[32px] text-center">Popular <span className="text-main-color">Tours</span></h2>}
                />
                <TourCards data={data} max={6} />
                <div className="text-center">
                    <button onClick={() => router.push(`/all-tours`)} className="md:hidden inline-block text-[18px] px-[20px] py-[16px] mt-[24px] bg-main-color rounded-[4px] text-white border-none block-header-btn" >{'Discover More'}</button>
                </div>
            </div>
        </div>
    )
}
export default PopularTours;