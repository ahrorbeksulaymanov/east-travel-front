import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
import Image from 'next/image';

export default function CarsClider({data}: {data: {image: any, title: string}[]}) {

  return (
    <>
      <Swiper navigation={true} loop={true} modules={[Navigation]} className="mySwiper">
        {
            data?.map((i, index) => (
                <SwiperSlide key={index}>
                    <Image src={i?.image} className="w-[100%]" alt={i?.title} />
                </SwiperSlide>
            ))
        }
      </Swiper>
    </>
  );
}
