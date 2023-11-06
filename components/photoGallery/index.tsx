import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Autoplay } from 'swiper/modules';
import Image from 'next/image';
import img1 from '../../assets/photoGallery/thumb_1116_1140_0_0_0_auto.jpg'
import img2 from '../../assets/photoGallery/thumb_1124_1140_0_0_0_auto.jpg'
import img3 from '../../assets/photoGallery/thumb_1216_1140_0_0_0_auto.jpg'
import img4 from '../../assets/photoGallery/thumb_1459_1140_0_0_0_auto.jpg'
import img5 from '../../assets/photoGallery/thumb_1458_1140_0_0_0_auto.jpg'
import img6 from '../../assets/photoGallery/thumb_1594_1140_0_0_0_auto.jpg'
import img7 from '../../assets/photoGallery/thumb_398_1140_0_0_0_auto.jpg'
import img8 from '../../assets/photoGallery/thumb_399_1140_0_0_0_auto.jpg'
import img9 from '../../assets/photoGallery/thumb_39_1140_0_0_0_auto.jpg'
import img10 from '../../assets/photoGallery/thumb_433_1140_0_0_0_auto.jpg'
import img11 from '../../assets/photoGallery/thumb_43_1140_0_0_0_auto.jpg'
import img12 from '../../assets/photoGallery/thumb_448_1140_0_0_0_auto.jpg'
import img13 from '../../assets/photoGallery/thumb_498_1140_0_0_0_auto.jpg'
import img14 from '../../assets/photoGallery/thumb_499_1140_0_0_0_auto.jpg'
import useWindowSize from '@/custom-hooks/useWindowSize';

const PhotoGallery = () => {

    const {width} = useWindowSize()

    const data = [
        {
            image: img1
        },
        {
            image: img2
        },
        {
            image: img3
        },
        {
            image: img4
        },
        {
            image: img5
        },
        {
            image: img6
        },
        {
            image: img7
        },
        {
            image: img8
        },
        {
            image: img9
        },
        {
            image: img10
        },
        {
            image: img11
        },
        {
            image: img12
        },
        {
            image: img13
        },
        {
            image: img14
        },
    ]

    return(
        <div className="font-noto md:pt-[93px] pt-[34px] max-w-[100vw]">
            <div className="container mx-auto">
                <p className="text-main-color">Tour</p>
                <h2 className="xl:text-[42px] md:text-[35px] text-[32px] text-second-color font-medium mb-[64px]">Photogallery</h2>
            </div>
            <Swiper
                slidesPerView={(width > 1300) ?  6 : ( width < 1300 && 768 < width) ? 4 : 1.5}
                spaceBetween={width > 768 ? 50 : 14}
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
                            <Image className={`${index % 2 === 0 ? "rounded-[1000px]" : "rounded-[10px]"} ${width > 1600 ?  "h-[450px]" : (width < 1600 && width > 1400) ? "h-[320px]" : "h-[300px]"} w-[320px] h-[450px] object-cover`} src={item.image} alt='gallery' width={400} height={400} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}
export default PhotoGallery;