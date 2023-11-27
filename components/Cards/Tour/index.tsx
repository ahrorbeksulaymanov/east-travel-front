import { FILE_URL } from "@/congif/constans";
import { ITour } from "@/models";
import Image from "next/image";
import Link from "next/link";

const TourCard = ({item} : {item: ITour}) => {

    return(
        <Link href={`/all-tours/${item?.slug}`} data-aos="fade-up" className="lg:col-span-4 sm:col-span-6 col-span-12">
            <div className="bg-white rounded-[10px] h-full hover:translate-y-[-5px] transition hover:shadow-lg">
                <Image className="w-[100%] rounded-t-[10px] object-cover sm:h-[300px]" src={FILE_URL + item?.mainPhoto} alt={item?.title} width={400} height={400} />
                <div className="px-[11px] py-[13px]">
                    <p>{item?.title}</p>
                    <button className="bg-main-color text-white py-[6px] px-[20px] rounded-[10px] mt-[12px] hover-btn">View</button>
                </div>
            </div>
        </Link>
    )
}
export default TourCard;