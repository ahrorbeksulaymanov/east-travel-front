import Image from "next/image";
import BlockHeader from "../blockHeader";
import TourCard from "../Cards/Tour";

const PopularTours = () => {

    const data: {image: string, title: string}[] = [
        {
            image: "https://uzbekistan.travel/storage/app/uploads/public/5eb/46f/ce0/thumb_765_600_0_0_0_auto.jpg",
            title: "Kemer Full-Day Pirate Boat Tour with Lunch"
        },
        {
            image: "https://uzbekistan.travel/storage/app/uploads/public/5eb/46f/ce0/thumb_765_600_0_0_0_auto.jpg",
            title: "Kemer Full-Day Pirate Boat Tour with Lunch"
        },
        {
            image: "https://uzbekistan.travel/storage/app/uploads/public/5eb/46f/ce0/thumb_765_600_0_0_0_auto.jpg",
            title: "Kemer Full-Day Pirate Boat Tour with Lunch"
        },
        {
            image: "https://uzbekistan.travel/storage/app/uploads/public/5eb/46f/ce0/thumb_765_600_0_0_0_auto.jpg",
            title: "Kemer Full-Day Pirate Boat Tour with Lunch"
        },
        {
            image: "https://uzbekistan.travel/storage/app/uploads/public/5eb/46f/ce0/thumb_765_600_0_0_0_auto.jpg",
            title: "Kemer Full-Day Pirate Boat Tour with Lunch"
        },
        {
            image: "https://uzbekistan.travel/storage/app/uploads/public/5eb/46f/ce0/thumb_765_600_0_0_0_auto.jpg",
            title: "Kemer Full-Day Pirate Boat Tour with Lunch"
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