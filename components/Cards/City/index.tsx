import Image from "next/image";

const CityCard = ({item} : {item: {image: string, title: string}}) => {

    return(
        <div data-aos="fade-up" className="lg:col-span-4 sm:col-span-6 col-span-12 hover:translate-x-2">
            <div className="bg-white rounded-[10px] relative hover:translate-y-[-5px] transition hover:shadow-lg">
                <Image className="w-[100%] rounded-[10px]" src={item?.image} alt={item?.title} width={400} height={400} />
                <div className="absolute bottom-[14px] rounded-[10px] right-[30px] left-[30px] bg-[#0022484D] py-[15px]" style={{border: "1px solid #989898", background: 'rgba(0, 34, 72, 0.30)', backdropFilter: "blur(10px)"}}>
                    <p className="text-[24px] text-white text-center leading-[28px]">{item?.title}</p>
                </div>
            </div>
        </div>
    )
}
export default CityCard;