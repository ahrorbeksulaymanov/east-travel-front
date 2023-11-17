import TourCard from "../Cards/Tour";

const TourCards = ({data, max} : {data: any[], max?: number}) => {
        
    return (
        <div className="grid grid-cols-12 gap-[24px] pb-4">
            {
                (max ? data?.slice(0, max) : data)?.map((item: any, index: number) => (
                    <TourCard key={index} item={item} />
                ))
            }
        </div>
    )
}
export default TourCards;