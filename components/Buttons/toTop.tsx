import useScrollTop from "@/custom-hooks/useOnscrollTopHeight"

const ToTopBtn = () => {
    
    const topSpace = useScrollTop()

    const handle = () => {
        if(window !== undefined) {
            window.scroll({top:0, behavior:"smooth"})
        }
    }
    return (
        <button onClick={handle} className={`bg-[#ffffff] shadow-md w-[50px] h-[50px] flex justify-center items-center rounded-full fixed z-10 transition-[3s] md:right-[60px] right-[20px] ${topSpace > 1000 ? "md:bottom-[100px] bottom-[100px]" : "bottom-[-55px]"}`}>
            <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 0.375L19.375 9.75L18.0625 11.0625L10 3L1.9375 11.0625L0.625 9.75L10 0.375Z" fill="black"/>
            </svg>
        </button>
    )
}
export default ToTopBtn;