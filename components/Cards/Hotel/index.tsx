import Image from "next/image";

const HotelCard = ({item} : {item: {image: string, title: string}}) => {

    const starSvg = <svg className="mr-[5px]" xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 8 9" fill="none">
            <path d="M2.72855 1.91312C3.12875 0.681435 4.87125 0.681435 5.27145 1.91312C5.45042 2.46394 5.96373 2.83688 6.5429 2.83688C7.83797 2.83688 8.37643 4.4941 7.3287 5.25532C6.86014 5.59575 6.66407 6.19917 6.84305 6.75C7.24325 7.98168 5.83353 9.0059 4.7858 8.24468C4.31724 7.90425 3.68276 7.90425 3.2142 8.24468C2.16647 9.0059 0.756754 7.98168 1.15695 6.75C1.33593 6.19917 1.13986 5.59575 0.671302 5.25532C-0.376431 4.4941 0.162032 2.83688 1.4571 2.83688C2.03627 2.83688 2.54958 2.46394 2.72855 1.91312Z" fill="#FFC01E"/>
        </svg>

    return(
        <div data-aos="fade-up" className="lg:col-span-4 sm:col-span-6 col-span-12">
            <div className="bg-white rounded-[10px] hotel-card hover:translate-y-[-5px] transition">
                <Image className="w-[100%] rounded-t-[10px]" src={item?.image} alt={item?.title} width={400} height={400} />
                <div className="pt-[20px] pb-[17px] px-[35px] flex justify-between items-start">
                    <div>
                        <p className="text-[24px] font-bold mb-[10px]">{item?.title}</p>
                        <div className="flex items-center">
                            {starSvg}
                            {starSvg}
                            {starSvg}
                            {starSvg}
                            {starSvg}
                            <p className="text-[#A79997] text-[18px] ml-[10px]">5k Reviews</p>
                        </div>
                    </div>
                    <button className="bg-main-color text-white rounded-[10px] hover-btn w-[50px] h-[50px] text-[25px]">+</button>
                </div>
            </div>
        </div>
    )
}
export default HotelCard;