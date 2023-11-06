import Image from 'next/image';
import Hilton from '../../assets/images/hilton-rounded.png'
import Registan from '../../assets/images/registan-rounded.png'
import { useEffect } from 'react';
// @ts-ignore
import { initAnimaCounter } from 'anima-counters'

const AboutUsBlock = () => {

    useEffect(() => {
        let options = {
            start: 0,
            duration: 100,
            style: 'fr-FR',
        }
        initAnimaCounter(options)        
    }, [])

    return (
        <div className="font-noto md:pt-[93px] pt-[34px] md:pb-[142px] pb-[100px] overflow-hidden">
            <div className="container mx-auto">
                <div className="grid grid-cols-12">
                    <div className="xl:col-span-5 lg:col-span-6 col-span-12">
                        <div data-aos="fade-right" data-aos-offset="100" data-aos-duration="500" >
                            <p className="text-main-color">Tour</p>
                            <h2 className="xl:text-[42px] md:text-[35px] text-[32px] text-second-color font-medium">The Perfect Travel Place For You & Your Family</h2>
                        </div>
                        <p className="font-normal text-[#697687] mt-[10px] mb-[15px]" data-aos="fade-right" data-aos-offset="100" data-aos-duration="600" >how travel can be one of the best tools for personal growth. We share some of the life lessons we've learned on the road that has provided us insight into empathy, mindfulness, meditation, comfort zones, two-way storytelling, being present, connection and more.</p>
                        <div className="grid grid-cols-12 gap-x-[13px] gap-y-[26px] w-max mt-[22px] md:mx-0 mx-auto" data-aos="fade-right" data-aos-offset="100" data-aos-duration="600" >
                            <div className="col-span-6">
                                <div className='rounded-[10px] py-[32px] w-[150px] text-center' style={{border: "2px solid #F8F8F8"}}>
                                    <h3 className='text-main-color text-[32px] font-medium'><span className="anima-counter">100</span></h3>
                                    <p className='text-second-color text-[16px] font-semibold'>Vissitors</p>
                                </div>
                            </div>
                            <div className="col-span-6">
                                <div className='rounded-[10px] py-[32px] w-[150px] text-center' style={{border: "2px solid #F8F8F8"}}>
                                    <h3 className='text-main-color text-[32px] font-medium'><span className="anima-counter">15</span></h3>
                                    <p className='text-second-color text-[16px] font-semibold'>Hotels</p>
                                </div>
                            </div>
                            <div className="col-span-6">
                                <div className='rounded-[10px] py-[32px] w-[150px] text-center' style={{border: "2px solid #F8F8F8"}}>
                                    <h3 className='text-main-color text-[32px] font-medium'><span className="anima-counter">29</span></h3>
                                    <p className='text-second-color text-[16px] font-semibold'>Food shops</p>
                                </div>
                            </div>
                            <div className="col-span-6">
                                <div className='rounded-[10px] py-[32px] w-[150px] text-center' style={{border: "2px solid #F8F8F8"}}>
                                    <h3 className='text-main-color text-[32px] font-medium'><span className="anima-counter">25</span></h3>
                                    <p className='text-second-color text-[16px] font-semibold'>Related Spots</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="xl:col-span-7 lg:col-span-6 col-span-12 lg:mt-0 mt-12" data-aos="fade-left" data-aos-offset="100" data-aos-duration="600" >
                        <div className="relative flex items-end justify-center">
                            <Image className='lg:absolute h-max lg:translate-x-0 md:translate-x-20 ms:translate-x-40 translate-x-10 lg:translate-y-0 md:translate-y-14 translate-y-10 md:top-[200px] xl:right-[290px] md:right-[200px] sm:right-[160px] right-[35%] xl:w-[320px] md:w-[250px] sm:w-[205px] w-[50%] z-[1]' src={Registan} alt='Registan image' />
                            <Image className='lg:absolute h-max ms:translate-x-0 translate-x-[-40px] top-0 right-0 xl:w-[400px] md:w-[330px] sm:w-[256px] w-[60%] ' src={Hilton} alt='Hilton image' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AboutUsBlock;