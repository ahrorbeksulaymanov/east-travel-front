import Image from "next/image";

const TourCard = ({item} : {item: {image: string, title: string}}) => {

    return(
        <div data-aos="fade-up" className="lg:col-span-4 sm:col-span-6 col-span-12">
            <div className="bg-white rounded-[10px] h-full">
                <Image className="w-[100%] rounded-t-[10px] object-cover sm:h-[300px]" src={item?.image} alt={item?.title} width={400} height={400} />
                <div className="px-[11px] py-[13px]">
                    <p>{item?.title}</p>
                    <button className="bg-main-color text-white py-[6px] px-[20px] rounded-[10px] mt-[12px] hover-btn">View</button>
                </div>
            </div>
        </div>
    )
}
export default TourCard;