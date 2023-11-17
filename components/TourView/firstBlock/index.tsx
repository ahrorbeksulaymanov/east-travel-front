
const TourViewFirst = ({title}: {title: string}) => {

    return (
        <div className="relative all-tours-bg h-[50vh] bg-cover bg-no-repeat">
            <h1 data-aos="fade-up" data-aos-duration="800" className="lg:text-[64px] md:text-[54px] sm:text-[44px] text-[34px] absolute top-[45%] text-white font-bold text-center w-[100%]">{title ?? "Tour view"}</h1>
        </div>
    )
}
export default TourViewFirst;