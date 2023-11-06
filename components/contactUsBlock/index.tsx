import Image from 'next/image';
import Circle1 from '../../assets/images/contact-circle1.png';
import Circle2 from '../../assets/images/contact-circle2.png';

const ContactUsBlock = () => {

    return (
        <div className="font-noto md:pt-[180px] pt-[34px] pb-[10px]">
            <div className="container mx-auto max-w-[90vw]">
                <div className="bg-[#FFF3D0] md:py-[80px] py-[30px] md:px-[0] px-[40px] bg-opacity-20 text-center relative rounded-[20px] md:rounded-tl-[129px] rounded-tl-[80px]">
                    <h1 className="text-[#5E6282] lg:text-[32px] md:text-[26px] sm:text-[24px] text-[20px] font-semibold mb-[60px]">Subscribe to get information, latest news and other <br /> interesting offers about East Tour</h1>
                    <div>
                        <input className="px-[30px] md:py-[25px] py-[18px] md:w-[440px] sm:w-auto w-[100%] rounded-[10px] focus:outline-none focus:shadow-md" type="text" placeholder="Your phone number or email" />
                        <button className="text-[18px] px-[20px] md:py-[23px] sm:w-auto w-[100%] py-[18px] bg-main-color hover:bg-[#ffb700ee] rounded-[10px] text-white border-none sm:ml-[25px] sm:mt-0 mt-[25px]" >Subscribe</button>
                    </div>

                    <svg className="absolute max-md:hidden top-[-13px] right-[-21px]" xmlns="http://www.w3.org/2000/svg" width="76" height="76" viewBox="0 0 76 76" fill="none">
                        <circle cx="37.9387" cy="38.0842" r="37.1681" fill="#FFB800"/>
                        <path d="M56.6406 26.3925C57.3747 27.6641 57.2763 29.1783 56.3828 30.3437L36.7646 55.9441C35.9555 56.9998 34.6233 57.538 33.2611 57.2766C31.9271 57.02 30.8694 56.0476 30.5024 54.7398L27.5995 44.4085L27.2972 43.3339L26.5178 42.5348L19.0221 34.8553C18.073 33.8835 17.7597 32.4813 18.2045 31.1978C18.6447 29.929 19.7489 29.0083 21.1102 28.8299L53.0899 24.6403C54.546 24.4492 55.9064 25.121 56.6406 26.3925Z" fill="white"/>
                        <path d="M27.5998 44.4085L30.5026 54.7398C30.8696 56.0477 31.9273 57.02 33.2613 57.2766C34.6236 57.5381 35.9557 56.9999 36.7648 55.9442L56.383 30.3437C57.2765 29.1783 57.3749 27.6642 56.6408 26.3926L27.2975 43.3339L27.5998 44.4085Z" fill="white"/>
                        <path d="M39.2388 36.4398C39.5374 36.9569 39.3607 37.6186 38.8429 37.9176L27.6003 44.4084L27.298 43.3338L26.5186 42.5347L37.7611 36.0439C38.2789 35.745 38.9403 35.9227 39.2388 36.4398Z" fill="#FFB800"/>
                        <path d="M27.5995 44.4084L38.842 37.9175C39.3597 37.6186 39.5366 36.957 39.238 36.4398L27.2972 43.3338L27.5995 44.4084Z" fill="#FFB800"/>
                    </svg>
                    <Image className='opacity-10 z-[-1] absolute top-0 right-0 w-[20%]' src={Circle1} alt='Circle 1' />
                    <Image className='opacity-10 z-[-1] absolute bottom-0 left-0 w-[30%]' src={Circle2} alt='Circle 2' />
                </div>
            </div>
        </div>
    )
}

export default ContactUsBlock;