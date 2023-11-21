import React, { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

import Image from 'next/image';
import { FILE_URL } from '@/congif/constans';

const TourViewSlider = ({data}: {data: any}) => {

  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  const images: string[] = data?.photos?.length ? [
    (data?.mainPhoto ? data?.mainPhoto : undefined),
    ...data?.photos
  ] : []

  return (
    <div className='container mx-auto'>
      <h1 className='text-center text-[#4E4B66] font-noto lg:text-[40px] md:text-[35px] sm:text-[30px] text-[25px] md:mt-24 mt-10 md:mb-20 mb-10 font-semibold'>{data?.title}</h1>
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {
            images.map((item, index) => (
                <SwiperSlide key={index}>
                    <Image src={FILE_URL + item} width={2000} height={2000} className='rounded w-[100%] h-[800px] object-cover' alt='aral-sea' />
                </SwiperSlide>
            ))
        }
      </Swiper>
      <Swiper
        onClick={setThumbsSwiper}
        loop={true}
        spaceBetween={12}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="animation-slider mt-5"
      >
        {
            images.map((item, index) => (
                <SwiperSlide key={index}>
                    <Image src={FILE_URL + item} width={1000} height={500} className='rounded w-[100%] h-[200px] object-cover'  alt='aral-sea' />
                </SwiperSlide>
            ))
        }
      </Swiper>
    </div>
  );
}
export default TourViewSlider;