import { IHotel } from "@/models";
import BlockHeader from "../../blockHeader";
import HotelCard from "../../Cards/Hotel";
import { useRouter } from "next/router";

const PopularHotels = ({data} : {data: IHotel[]}) => {

    const router = useRouter();

    return (
        <div className="font-noto md:pt-[93px] pt-[34px] md:pb-[142px] pb-[100px]">
            <div className="container mx-auto">
                <BlockHeader 
                    title="Hotel"
                    tag={<h2 className="xl:text-[42px] md:text-[35px] text-[32px] text-second-color"> Select your the best hotel in <span className="text-main-color">Uzbekistan</span></h2>}
                    desc="Travel is my life. Since 1999, I’ve been traveling around the world nonstop. If you also love travel, you’re in the right place!"
                    btlUrl='hotels'
                    btnTitle="View All Places"
                    tagMobile={<h2 className="text-[32px] text-center">Select your the best hotel in <span className="text-main-color">Uzbekistan</span></h2>}
                />
                <div className="grid grid-cols-12 gap-[25px]">
                    {                
                        data?.map((item, index) => (
                            <HotelCard key={index} item={item} />
                        ))
                    }
                </div>
                <div className="text-center">
                    <button onClick={() => router.push('hotels')} className="md:hidden inline-block text-[18px] px-[20px] py-[16px] mt-[24px] bg-main-color rounded-[4px] text-white border-none block-header-btn" >{'Discover More'}</button>
                </div>
            </div>
        </div>
    )
}

export default PopularHotels;