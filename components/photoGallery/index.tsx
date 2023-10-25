import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import Image from 'next/image';
import useWindowSize from '@/custom-hooks/useWindowSize';

const PhotoGallery = () => {

    const {width} = useWindowSize()

    const data = [
        {
            image: "https://uzbekistan.travel/storage/app/uploads/public/5e6/b52/97d/thumb_482_1140_0_0_0_auto.jpg"
        },
        {
            image: "https://uzbekistan.travel/storage/app/uploads/public/5e6/b52/97d/thumb_482_1140_0_0_0_auto.jpg"
        },
        {
            image: "https://uzbekistan.travel/storage/app/uploads/public/5e6/b52/97d/thumb_482_1140_0_0_0_auto.jpg"
        },
        {
            image: "https://uzbekistan.travel/storage/app/uploads/public/5e6/b52/97d/thumb_482_1140_0_0_0_auto.jpg"
        },
        {
            image: "https://uzbekistan.travel/storage/app/uploads/public/5e6/b52/97d/thumb_482_1140_0_0_0_auto.jpg"
        },
        {
            image: "https://uzbekistan.travel/storage/app/uploads/public/5e6/b52/97d/thumb_482_1140_0_0_0_auto.jpg"
        },
        {
            image: "https://uzbekistan.travel/storage/app/uploads/public/5e6/b52/97d/thumb_482_1140_0_0_0_auto.jpg"
        },
        {
            image: "https://uzbekistan.travel/storage/app/uploads/public/5e6/b52/97d/thumb_482_1140_0_0_0_auto.jpg"
        },
        {
            image: "https://uzbekistan.travel/storage/app/uploads/public/5e6/b52/97d/thumb_482_1140_0_0_0_auto.jpg"
        },
        {
            image: "https://uzbekistan.travel/storage/app/uploads/public/5e6/b52/97d/thumb_482_1140_0_0_0_auto.jpg"
        },
        {
            image: "https://uzbekistan.travel/storage/app/uploads/public/5e6/b52/97d/thumb_482_1140_0_0_0_auto.jpg"
        },
        {
            image: "https://uzbekistan.travel/storage/app/uploads/public/5e6/b52/97d/thumb_482_1140_0_0_0_auto.jpg"
        },
        {
            image: "https://uzbekistan.travel/storage/app/uploads/public/5e6/b52/97d/thumb_482_1140_0_0_0_auto.jpg"
        },
        {
            image: "https://uzbekistan.travel/storage/app/uploads/public/5e6/b52/97d/thumb_482_1140_0_0_0_auto.jpg"
        },
    ]

    return(
        <div className="font-noto md:pt-[93px] pt-[34px] md:pb-[142px] pb-[100px]">
            <div className="container mx-auto">
                <p className="text-main-color">Tour</p>
                <h2 className="xl:text-[42px] md:text-[35px] text-[32px] text-second-color font-medium mb-[64px]">Photogallery</h2>
            </div>
                <Swiper
                    slidesPerView={(width > 1300) ?  6 : ( width < 1300 && 768 < width) ? 4 : 1.5}
                    spaceBetween={width > 768 ? 50 : 14}
                    pagination={{
                        clickable: true,
                        enabled: false,
                    }}
                    loop={true}
                    centeredSlides={768 < width ? true : false}
                    modules={[Pagination]}
                    className="mySwiper"
                    autoCorrect='300px'
                >
                    {
                        data?.map((item, index) => (
                            <SwiperSlide key={index}>
                                <Image className={index % 2 === 0 ? "rounded-[1000px]" : "rounded-[10px]"} src={item.image} alt='gallery' width={400} height={400} />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
        </div>
    )
}
export default PhotoGallery;