import BlockHeader from "../blockHeader";
import TourCard from "../Cards/Tour";
import SilkRoad from '../../assets/images/silk-road.jpg';
import AralSea from '../../assets/images/aral-sea.jpg';
import Fergan from '../../assets/images/fergan.jpg';
import Aydarkul from '../../assets/images/aydarkul.jpg';

const PopularTours = () => {

    const data: {image: any, title: string}[] = [
        {
            image: SilkRoad,
            title: "Uzbekistan along the silk road"
        },
        {
            image: AralSea,
            title: "Uzbekistan Aral sea"
        },
        {
            image: Fergan,
            title: "Fergan valley tour"
        },
        {
            image: Aydarkul,
            title: "Uzbekistan Aydarkul"
        },
    ]

    return (
        <div className="font-noto bg-[#F8F8F8] md:pt-[64px] pt-[34px] md:pb-[94px] pb-[54px]">
            <div className="container mx-auto">
                <BlockHeader 
                    title="Tour"
                    tag={<h2 className="xl:text-[42px] md:text-[35px] text-[32px] text-second-color font-medium"> Popular <span className="text-main-color">Tours</span> on Uzbekistan </h2>}
                    desc="Travel is my life. Since 1999, I’ve been traveling around the world nonstop. If you also love travel, you’re in the right place!"
                    btlUrl='view-all'
                    btnTitle="Discover More"
                    tagMobile={<h2 className="text-[32px] text-center">Popular <span className="text-main-color">Tours</span></h2>}
                />
                <div className="grid grid-cols-12 gap-[24px]">
                    {
                        data?.map((item, index) => (
                            <TourCard key={index} item={item} />
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

export default PopularTours;