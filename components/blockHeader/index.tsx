import { useRouter } from "next/router";

const BlockHeader = ({btlUrl, title, tag, desc, btnTitle, tagMobile}: {btlUrl?: string, title: string, tag: any, desc: string, btnTitle: string, tagMobile:any }) => {
   
    const router = useRouter();

    return (
        <div className="md:mb-[30px] mb-[20px]">
            <div className="md:block hidden">
                <p className="text-main-color">{title}</p>
                {tag}
                <div className="flex justify-between items-center">
                    <p className="font-normal text-[#697687] w-[40%] mt-[10px] mb-[15px]">{desc}</p>
                    {btlUrl ? <button onClick={() => router.push('/all-tours')} className="text-[18px] px-[20px] py-[16px] bg-main-color rounded-[4px] text-white border-none block-header-btn" >{btnTitle}</button> : ""}
                </div>
            </div>
            <div className="md:hidden block">
                {tagMobile}
            </div>
        </div>
    )
}
export default BlockHeader;