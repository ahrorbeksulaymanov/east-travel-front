import CityCard from "../Cards/City";
import tashkent from '../../assets/cities/tashkent.jpg';
import Samarkand from '../../assets/cities/sam.jpg';
import khiva from '../../assets/cities/khiva.jpg';
import Muynak from '../../assets/cities/moynak.jpg';
import shahrisabz from '../../assets/cities/shahrisabz.jpg';
import zomin from '../../assets/cities/zomin.jpg';


const AllCities = () => {

    const data: {image: any, title: string}[] = [
        {
            image: tashkent,
            title: "Tashkent"
        },
        {
            image: Samarkand,
            title: "Samarkand"
        },
        {
            image: khiva,
            title: "khiva"
        },
        {
            image: Muynak,
            title: "Muynak"
        },
        {
            image: shahrisabz,
            title: "Shakhrisabz"
        },
        {
            image: zomin,
            title: "Zaamin"
        },
    ]

    
    return (
        <div className="container mx-auto">
            <div className="md:my-[64px] my-[40px]">
                <p className="text-[#FFC700] mb-4 text-[16px]">Location</p>
                <div className="grid grid-cols-12 xl:gap-[110px] lg:gap-[50px] md:gap-[40px] ">
                    <div className="md:col-span-6 col-span-12 bg-dotted">
                        <h1 className="text-second-color lg:text-[42px] md:text-[35px] sm:text-[30px] text-[25px] font-medium font-noto">
                            Plan your perfect  <span className="text-[#FFA500]"> Cities </span>
                        </h1>
                    </div>
                    <div className="md:col-span-6 col-span-12">
                        <p className="text-[#000] lg:text-[18px] text-[16px] lg:leading-[40px] leading-[30px] font-semibold">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mor mattis nec etiam ac. Bibendum tellus mi imperdiet amet maecenas magna tortor nulla. Nec tortor ut cursus ornare nibh vivamus. Quam elementum at velit viverra mattis.</p>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-[24px] pb-4">
                    {
                        data?.map((item, index) => (
                            <CityCard key={index} item={item} />
                        ))
                    }
            </div>
        </div>
    )
}
export default AllCities;