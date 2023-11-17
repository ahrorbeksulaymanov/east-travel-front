import RoadSide from '../../assets/images/roadSide.jpg';
import konstantin from '../../assets/images/konstantin.jpg';
import erkinpalace from '../../assets/images/erkin-palace.jpg';

import HotelCard from "../Cards/Hotel";

const AllHotels = ({data: data2} : {data: any}) => {
    
    const data: {image: any, title: string}[] = [
        {
            image: RoadSide,
            title: "Roadside, Tashkent"
        },
        {
            image: konstantin,
            title: "Konstantin, Samarkand"
        },
        {
            image: erkinpalace,
            title: "Erkin Palace, Khiva"
        }
    ]

    return (
        <div className="container mx-auto mb-11">
            <div className="grid grid-cols-12 xl:gap-[110px] lg:gap-[50px] md:gap-[40px] md:my-[64px] my-[40px]">
                <div className="md:col-span-7 col-span-12 bg-dotted pt-5">
                    <h1 className="text-second-color lg:text-[58px] md:text-[50px] sm:text-[40px] text-[30px] font-semibold font-noto">
                        Plan your perfect<span className="text-[#FFA500]"> hotels  </span>
                    </h1>
                </div>
                <div className="md:col-span-5 col-span-12">
                    <p className="text-[#000] lg:text-[18px] text-[16px] lg:leading-[40px] leading-[30px] font-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mor mattis nec etiam ac. Bibendum tellus mi imperdiet amet maecenas magna tortor nulla. Nec tortor ut cursus ornare nibh vivamus. Quam elementum at velit viverra mattis.</p>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-[25px]">
                    {                
                        data?.map((item, index) => (
                            <HotelCard key={index} item={item} />
                        ))
                    }
                </div>
        </div>
    )
}
export default AllHotels;