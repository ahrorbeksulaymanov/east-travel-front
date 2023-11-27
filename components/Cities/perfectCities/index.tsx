import { ICity } from "@/models";
import BlockHeader from "../../blockHeader";
import CityCard from "../../Cards/City";

const PerfectCities = ({data} : {data: ICity[]}) => {

    return (
        <div className="font-noto bg-[#F8F8F8] md:pt-[64px] pt-[34px] md:pb-[94px] pb-[54px]">
            <div className="container mx-auto">
                <BlockHeader 
                    title="Location"
                    tag={<h2 className="xl:text-[42px] md:text-[35px] text-[32px] text-second-color font-medium"> Plan your perfect <span className="text-main-color">Cities</span></h2>}
                    desc="Travel is my life. Since 1999, I’ve been traveling around the world nonstop. If you also love travel, you’re in the right place!"
                    btlUrl='cities'
                    btnTitle="Discover More"
                    tagMobile={<h2 className="text-[32px] text-center">Plan your perfect <span className="text-main-color">Cities </span></h2>}
                />
                <div className="grid grid-cols-12 gap-[30px]">
                    {
                        data?.map((item: ICity, index: number) => (
                            <CityCard key={index} item={item} />
                        ))
                    }
                </div>
                <div className="text-center">
                    <button className="md:hidden inline-block text-[18px] px-[20px] py-[16px] mt-[24px] bg-main-color rounded-[4px] text-white border-none block-header-btn" >{'Discover More'}</button>
                </div>
            </div>
        </div>
    )
}

export default PerfectCities;