import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Autoplay } from 'swiper/modules';
import Image from 'next/image';
import useWindowSize from '@/custom-hooks/useWindowSize';
import { IGallery } from '@/models';
import { FILE_URL } from '@/congif/constans';

const PhotoGallery = ({data}: {data: IGallery[]}) => {

    const {width} = useWindowSize()

    return(
        <div className="font-noto md:pt-[93px] pt-[34px] max-w-[100vw]">
            <div className="container mx-auto">
                <p className="text-main-color">Photo</p>
                <h2 className="xl:text-[42px] md:text-[35px] text-[32px] text-second-color font-medium mb-[64px]">Photogallery</h2>
            </div>
            <Swiper
                slidesPerView={(width > 1300) ?  6 : ( width < 1300 && 992 < width) ? 4 : 1.5}
                spaceBetween={0}
                loop={true}
                centeredSlides={width < 768 ? false : true}
                modules={[Autoplay]}
                className="mySwiper"
                autoCorrect='300px'
                data-aos="fade-up"
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                    waitForTransition: true
                }}
            >
                {
                    data?.map((item, index) => (
                        <SwiperSlide key={index}>
                            <Image 
                                className={`${width > 1600 ?  "h-[450px]" : (width < 1600 && width > 1400) ? "h-[320px]" : "h-[300px]"} w-[100%] h-[450px] object-cover`} 
                                src={FILE_URL + item?.photo}
                                alt={item?.description}
                                width={400} 
                                height={400} 
                            />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}
export default PhotoGallery;