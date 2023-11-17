import TourCards from "./tour-cards";

const AllTours = ({data} : {data: any}) => {
    
    return (
        <div className="container mx-auto">
            <div className="grid grid-cols-12 xl:gap-[110px] lg:gap-[50px] md:gap-[40px] md:my-[64px] my-[40px]">
                <div className="md:col-span-7 col-span-12 bg-dotted">
                    <h1 className="text-second-color xl:text-[64px] lg:text-[58px] md:text-[50px] sm:text-[40px] text-[30px] font-semibold font-noto">
                        <span className="text-[#FFA500]" style={{borderBottom: "5px solid #FFA500"}}> Popular Tours </span> on <br />Uzbekistan
                    </h1>
                </div>
                <div className="md:col-span-5 col-span-12">
                    <p className="text-[#000] lg:text-[18px] text-[16px] lg:leading-[40px] leading-[30px] font-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mor mattis nec etiam ac. Bibendum tellus mi imperdiet amet maecenas magna tortor nulla. Nec tortor ut cursus ornare nibh vivamus. Quam elementum at velit viverra mattis.</p>
                </div>
            </div>
            <TourCards data={data} />
        </div>
    )
}
export default AllTours;