import AboutImg from '../../assets/images/about-img.png';
import Image from "next/image";

const AboutC = () => {
    
    return (
        <div className="container mx-auto font-noto">
            <div className="md:my-[64px] my-[40px]">
                <div className="grid grid-cols-12 xl:gap-[110px] lg:gap-[50px] md:gap-[40px] ">
                    <div className="md:col-span-6 col-span-12 bg-dotted pl-5">
                        <h1 className="text-second-color lg:text-[40px] md:text-[35px] sm:text-[30px] text-[25px] font-normal font-noto">
                        Hey, We are the EastTour Brief History <span className="text-[#FFA500] underline underline-offset-4"> About Us. </span>
                        </h1>
                    </div>
                    <div className="md:col-span-6 col-span-12">
                        <p className="text-[#000] lg:text-[18px] text-[16px] lg:leading-[40px] leading-[30px] font-semibold">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mor mattis nec etiam ac. Bibendum tellus mi imperdiet amet maecenas magna tortor nulla. Nec tortor ut cursus ornare nibh vivamus. Quam elementum at velit viverra mattis.</p>
                    </div>
                </div>
            </div>
            <Image src={AboutImg} className="w-[100%] md:my-[55px] my-[35px]" alt="About image" />
            <p className="lg:text-[18px] text-[16px] lg:leading-[40px] leading-[30px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ut natoque imperdiet faucibus. Mi arcu, nunc imperdiet sit arcu id. In libero, nibh at malesuada nunc faucibus pulvinar dolor tellus. Rhoncus lectus hendrerit pharetra vitae magna. Pharetra, tortor pharetra vitae rhoncus. Nisl quam massa sapien tempor semper. Hac tempus pellentesque nibh duis ultrices. Senectus sagittis id ullamcorper mi eget pellentesque egestas. In ut sollicitudin ut orci volutpat egestas fermentum. Sit turpis diam risus leo bibendum neque, quis in vitae. <br /> <br /> Praesent enim augue tellus vitae placerat purus pretium at massa. Aliquet a malesuada eget posuere. Pellentesque euismod nulla praesent rhoncus.</p>
        </div>
    )
}
export default AboutC;