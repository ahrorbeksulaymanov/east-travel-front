import { useRouter } from "next/router";
import { useEffect } from "react";
import useScrollTop from "@/custom-hooks/useOnscrollTopHeight";

const tl = ["af","sq","am","ar","hy","az","eu","bn","my","bs","bg","ceb","ny",
          "zh-TW","zh-CN","da","de","en","eo","et","tl","fi","fr","fy","gl",
          "ka","el","gu","ht","ha","haw","iw","hi","hmn","ig","id","ga","is",
          "it","ja","jw","yi","kn","kk","ca","km","rw","ky","ko","co","hr",
          "ku","lo","la","lv","lt","lb","mg","ml","ms","mt","mi","mr","mk",
          "mn","ne","nl","no","or","ps","fa","pl","pt","pa","ro","ru","sm",
          "gd","sv","sr","st","sn","sd","si","sk","sl","so","es","sw","su",
          "tg","ta","tt","te","th","cs","tr","tk","ug","uk","hu","ur","uz",
          "vi","cy","be","xh","yo","zu"];


const HeaderClient = () => {

    const router = useRouter();
    const scrollHeight = useScrollTop();

    const googleTranslateElementInit = () => {
        // @ts-ignore
        new window.google.translate.TranslateElement({
            pageLanguage: 'en',
            includedLanguages : "en,ms,ta,zh-CN,uz,fr,kz", // include this for selected languages
            // @ts-ignore
            layout: google.translate.TranslateElement.InlineLayout.SIMPLE
        },
        'google_translate_element');

    }

    useEffect(() => {
        if(typeof window !== undefined){
            var addScript = document.createElement('script');
            addScript.setAttribute('src', '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit');
            document.body.appendChild(addScript);
            // @ts-ignore
            window.googleTranslateElementInit = googleTranslateElementInit;
        }
    }, [typeof window])

    return ( 
        <div className={`${scrollHeight > 150 ? "bg-white text-second-color" : "bg-transparent text-white shadow-sm"} fixed transition right-0 left-0 z-[4]`}>
            <div className="container mx-auto">
                <header className="flex justify-between items-start">
                    <h1 className="mt-[18px] lg:text-[30px] text-[18px]">EastTravel.uz</h1>
                    <div className="md:flex hidden items-center md:text-[16px] text-[14px]">
                        <a href="#" className={`${router.pathname == "/" ? "active-link" : ""} xl:mr-[48px] lg:mr-[30px] md:mr-[20px] pt-[30px] relative`}  >Home</a>
                        <a href="#" className="xl:mr-[48px] lg:mr-[30px] md:mr-[20px] pt-[30px]">All tours</a>
                        <a href="#" className="xl:mr-[48px] lg:mr-[30px] md:mr-[20px] pt-[30px]">Hotels</a>
                        <a href="#" className="xl:mr-[48px] lg:mr-[30px] md:mr-[20px] pt-[30px]">Cities</a>
                        <a href="#" className="xl:mr-[48px] lg:mr-[30px] md:mr-[20px] pt-[30px]">MICE</a>
                        <a href="#" className="xl:mr-[48px] lg:mr-[30px] md:mr-[20px] pt-[30px]">Transport</a>
                        <a href="#" className="xl:mr-[48px] lg:mr-[30px] md:mr-[20px] pt-[30px]">About us</a>
                        <a href="#" className="pt-[30px]" >Contact</a>
                    </div>
                    <div className="md:block hidden mt-[33px]" id="google_translate_element"> </div>
                    <div className={`md:hidden block p-3 bg-white ${scrollHeight > 150 ? "my-[10px]" : "mt-[21px]"} bg-opacity-60 rounded-full cursor-pointer`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path className={`${scrollHeight < 150 ? "fill-white" : "fill-second-color"}`} d="M22.5 10.5H1.5C0.671578 10.5 0 11.1716 0 12C0 12.8284 0.671578 13.5 1.5 13.5H22.5C23.3284 13.5 24 12.8284 24 12C24 11.1716 23.3284 10.5 22.5 10.5Z" fill="white"/>
                            <path className={`${scrollHeight < 150 ? "fill-white" : "fill-second-color"}`} d="M1.5 6.5H22.5C23.3284 6.5 24 5.82842 24 5C24 4.17158 23.3284 3.5 22.5 3.5H1.5C0.671578 3.5 0 4.17158 0 5C0 5.82842 0.671578 6.5 1.5 6.5Z" fill="white"/>
                            <path className={`${scrollHeight < 150 ? "fill-white" : "fill-second-color"}`} d="M22.5 17.5H1.5C0.671578 17.5 0 18.1716 0 19C0 19.8284 0.671578 20.5 1.5 20.5H22.5C23.3284 20.5 24 19.8284 24 19C24 18.1716 23.3284 17.5 22.5 17.5Z" fill="white"/>
                        </svg>
                    </div>
                </header>
            </div>
        </div>
    )
}

export default HeaderClient;
