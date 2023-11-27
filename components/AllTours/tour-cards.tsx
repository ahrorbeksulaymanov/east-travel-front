import { ITour } from "@/models";
import TourCard from "../Cards/Tour";

const TourCards = ({data, max} : {data: ITour[], max?: number}) => {
        
    return (
        <div className="grid grid-cols-12 gap-[24px] pb-4">
            {
                (max ? data?.slice(0, max) : data)?.map((item: ITour, index: number) => (
                    <TourCard key={index} item={item} />
                ))
            }
        </div>
    )
}
export default TourCards;