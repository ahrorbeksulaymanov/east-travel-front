import { Drawer } from "antd"
import Image from "next/image";
import { Dispatch } from "react";
import DarkLogo from '../../assets/images/logo-dark.png';
import { useRouter } from "next/router";
import Link from "next/link";
import Instagram from '../../assets/images/instagram-icon.png'

const SidebarDrawer = ({openSidebar, setOpenSidebar}: {openSidebar: boolean, setOpenSidebar: Dispatch<boolean>}) => {

    const router = useRouter();
    
    return (
        <Drawer 
            title={
                <div className="flex justify-between items-center relative">
                    <Image className="xl:w-[150px] md:w-[120px] w-[100px]" src={DarkLogo} alt="Logo" />
                    <div className="relative">
                        <div id="google_translate_element" className="block ml-auto language-select z-20" > </div>
                        <svg onClick={() => setOpenSidebar(false)} className="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path className={`fill-second-color`} d="M22.5 10.5H1.5C0.671578 10.5 0 11.1716 0 12C0 12.8284 0.671578 13.5 1.5 13.5H22.5C23.3284 13.5 24 12.8284 24 12C24 11.1716 23.3284 10.5 22.5 10.5Z" fill="white"/>
                            <path className={`fill-second-color`} d="M1.5 6.5H22.5C23.3284 6.5 24 5.82842 24 5C24 4.17158 23.3284 3.5 22.5 3.5H1.5C0.671578 3.5 0 4.17158 0 5C0 5.82842 0.671578 6.5 1.5 6.5Z" fill="white"/>
                            <path className={`fill-second-color`} d="M22.5 17.5H1.5C0.671578 17.5 0 18.1716 0 19C0 19.8284 0.671578 20.5 1.5 20.5H22.5C23.3284 20.5 24 19.8284 24 19C24 18.1716 23.3284 17.5 22.5 17.5Z" fill="white"/>
                        </svg>
                    </div>
                </div>
            } 
            closable={false}
            placement="right" 
            width={500} 
            onClose={() => setOpenSidebar(false)} 
            open={openSidebar}
            rootStyle={{border: 'none'}}
        >
            <div>
                <div className="text-center">
                    <Link onClick={() => setOpenSidebar(false)} href="/" className={`${router.pathname == "/" ? "text-main-color" : ""} py-5 text-3xl block hover:bg-[#f7f7f7]`}  >Home</Link>
                    <Link onClick={() => setOpenSidebar(false)} href="/all-tours" className={`${router.pathname == "/all-tours" ? "text-main-color" : ""} py-5 text-3xl block hover:bg-[#f7f7f7]`}>All tours</Link>
                    <Link onClick={() => setOpenSidebar(false)} href="/hotels" className={`${router.pathname == "/hotels" ? "text-main-color" : ""} py-5 text-3xl block hover:bg-[#f7f7f7]`}>Hotels</Link>
                    <Link onClick={() => setOpenSidebar(false)} href="/cities" className={`${router.pathname == "/cities" ? "text-main-color" : ""} py-5 text-3xl block hover:bg-[#f7f7f7]`}>Cities</Link>
                    <Link onClick={() => setOpenSidebar(false)} href="/mice" className={`${router.pathname == "/mice" ? "text-main-color" : ""} py-5 text-3xl block hover:bg-[#f7f7f7]`}>MICE</Link>
                    <Link onClick={() => setOpenSidebar(false)} href="/transports" className={`${router.pathname == "/transports" ? "text-main-color" : ""} py-5 text-3xl block hover:bg-[#f7f7f7]`}>Transport</Link>
                    <Link onClick={() => setOpenSidebar(false)} href="/about-us" className={`${router.pathname == "/about-us" ? "text-main-color" : ""} py-5 text-3xl block hover:bg-[#f7f7f7]`}>About us</Link>
                    <Link onClick={() => setOpenSidebar(false)} href="/contact" className={`${router.pathname == "/contact" ? "text-main-color" : ""} py-5 text-3xl block hover:bg-[#f7f7f7]`} >Contact</Link>
                </div>

                <div className="mt-12">
                    <div className="flex justify-center">
                        <svg className="cursor-pointer hover:translate-y-[-3px] transition" xmlns="http://www.w3.org/2000/svg" width="61" height="61" viewBox="0 0 61 61" fill="none">
                            <g filter="url(#filter0_d_163_1023)">
                                <path fillRule="evenodd" clipRule="evenodd" d="M30.5 49C41.8218 49 51 39.8218 51 28.5C51 17.1782 41.8218 8 30.5 8C19.1782 8 10 17.1782 10 28.5C10 39.8218 19.1782 49 30.5 49Z" fill="white"/>
                            </g>
                            <path fillRule="evenodd" clipRule="evenodd" d="M33.1084 26.2445C32.7883 26.1432 32.4202 26.0757 32.0842 26.0757C31.6681 26.0757 30.7719 26.3626 30.7719 26.9195V28.2527H32.9003V30.4971H30.7719V36.6905H28.6275V30.4971H27.5713V28.2527H28.6275V27.122C28.6275 25.4176 29.3636 24 31.14 24C31.7481 24 32.8363 24.0338 33.4284 24.2531L33.1084 26.2445Z" fill="#080809"/>
                            <defs>
                                <filter id="filter0_d_163_1023" x="0" y="0" width="61" height="61" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset dy="2"/>
                                <feGaussianBlur stdDeviation="5"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_163_1023"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_163_1023" result="shape"/>
                                </filter>
                            </defs>
                        </svg>
                        <Image className="w-[60px] cursor-pointer hover:translate-y-[-3px] transition mx-[10px]" src={Instagram} alt="instagram-icon" />
                        <div className="relative cursor-pointer hover:translate-y-[-3px] transition">
                            <svg xmlns="http://www.w3.org/2000/svg" width="61" height="61" viewBox="0 0 61 61" fill="none">
                                <g filter="url(#filter0_d_163_1021)">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M30.5 49C41.8218 49 51 39.8218 51 28.5C51 17.1782 41.8218 8 30.5 8C19.1782 8 10 17.1782 10 28.5C10 39.8218 19.1782 49 30.5 49Z" fill="white"/>
                                </g>
                                <defs>
                                    <filter id="filter0_d_163_1021" x="0" y="0" width="61" height="61" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                    <feOffset dy="2"/>
                                    <feGaussianBlur stdDeviation="5"/>
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_163_1021"/>
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_163_1021" result="shape"/>
                                    </filter>
                                </defs>
                            </svg>
                            <svg className="absolute top-[23px] left-[23px]" xmlns="http://www.w3.org/2000/svg" width="16" height="12" viewBox="0 0 16 12" fill="none">
                                <path d="M16 1.42062C15.405 1.66154 14.771 1.82123 14.11 1.89877C14.79 1.524 15.309 0.935077 15.553 0.225231C14.919 0.574154 14.219 0.820615 13.473 0.958154C12.871 0.366462 12.013 0 11.077 0C9.261 0 7.799 1.36062 7.799 3.02862C7.799 3.26862 7.821 3.49938 7.875 3.71908C5.148 3.59631 2.735 2.38985 1.114 0.552C0.831 1.00523 0.665 1.524 0.665 2.08246C0.665 3.13108 1.25 4.06062 2.122 4.59877C1.595 4.58954 1.078 4.44831 0.64 4.22585C0.64 4.23508 0.64 4.24708 0.64 4.25908C0.64 5.73046 1.777 6.95262 3.268 7.23415C3.001 7.30154 2.71 7.33385 2.408 7.33385C2.198 7.33385 1.986 7.32277 1.787 7.28215C2.212 8.48123 3.418 9.36277 4.852 9.39138C3.736 10.1972 2.319 10.6828 0.785 10.6828C0.516 10.6828 0.258 10.6717 0 10.6412C1.453 11.5062 3.175 12 5.032 12C11.068 12 14.368 7.38462 14.368 3.384C14.368 3.25015 14.363 3.12092 14.356 2.99262C15.007 2.56615 15.554 2.03354 16 1.42062Z" fill="#080809"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </Drawer>
    )
}
export default SidebarDrawer;