import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import { FILE_URL } from '@/congif/constans';

export default function CarsClider({data, title}: {data: string[], title: string}) {

  return (
    <>
      <Swiper navigation={true} loop={true} modules={[Navigation]} className="mySwiper">
        {
            data?.map((i, index) => (
                <SwiperSlide key={index}>
                    <Image src={FILE_URL + i} width={400} height={400} className="w-[100%]" alt={title} />
                </SwiperSlide>
            ))
        }
      </Swiper>
    </>
  );
}
