import { FILE_URL } from "@/congif/constans";
import { IEmployee } from "@/models";
import Image from "next/image";

const EmployeeCard = ({item, isHover = true} : {item: IEmployee, isHover?:boolean}) => {

    return(
        <div data-aos="fade-up" className="lg:col-span-4 sm:col-span-6 col-span-12">
            <div className="rounded-[10px] h-full transition" style={{boxShadow: "0px 0px 12px rgba(0, 0, 0, 0.12)"}}>
                <Image className="w-[100%] rounded-t-[10px] object-cover sm:h-[300px]" src={FILE_URL + item?.photo} alt={item?.firstName + " " + item?.lastName} width={400} height={400} />
                <div className="pl-[26px] pr-[20px] pt-[9px] pb-[23px]">
                    <p className="text-[20px] font-medium text-second-color">{item?.firstName} {item?.lastName}</p>
                    <p className="font-montserrat text-[#000] opacity-60 my-1">{item?.jobPosition}</p>
                    <a href="tel:+998917755969" className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clipPath="url(#clip0_269_194)">
                            <path d="M22.1796 22.1699L23.0896 21.1199C24.2996 19.9099 24.2996 17.9499 23.0896 16.7399C23.0596 16.7099 20.6496 14.8599 20.6496 14.8599C19.4496 13.7199 17.5596 13.7199 16.3696 14.8599L14.9096 16.0199C11.5996 14.5599 9.31957 12.2899 7.95957 9.08994L9.12957 7.62994C10.2796 6.43994 10.2796 4.53994 9.12957 3.34994C9.12957 3.34994 7.27957 0.939943 7.24957 0.909943C6.03957 -0.300057 4.07957 -0.300057 2.91957 0.859943L1.76957 1.85994C0.619568 3.00994 -0.0104332 4.55994 -0.0104332 6.23994C-0.0104332 13.8799 10.1196 23.9999 17.7496 23.9999C19.4196 23.9999 20.9796 23.3699 22.1696 22.1699H22.1796ZM1.99957 6.23994C1.99957 5.09994 2.41957 4.04994 3.14957 3.32994L4.29957 2.32994C4.70957 1.91994 5.37957 1.89994 5.80957 2.28994C5.80957 2.28994 7.64957 4.67994 7.67957 4.70994C8.08957 5.11994 8.08957 5.83994 7.67957 6.25994C7.64957 6.28994 6.03957 8.29994 6.03957 8.29994C5.81957 8.57994 5.75957 8.94994 5.88957 9.27994C7.46957 13.4199 10.4296 16.3899 14.6996 18.0999C15.0296 18.2299 15.4096 18.1799 15.6996 17.9499C15.6996 17.9499 17.7196 16.3399 17.7396 16.3199C18.1696 15.8899 18.8596 15.8899 19.2896 16.3199C19.3196 16.3499 21.7096 18.1899 21.7096 18.1899C22.0996 18.6199 22.0896 19.2899 21.6296 19.7499L20.7196 20.7999C19.9496 21.5699 18.8996 21.9999 17.7596 21.9999C10.7996 21.9999 1.99957 12.2299 1.99957 6.23994Z" fill="black" fillOpacity="0.8"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_269_194">
                            <rect width="24" height="24" fill="white" transform="matrix(0 1 -1 0 24 0)"/>
                            </clipPath>
                            </defs>
                        </svg>
                        <p className="font-montserrat text-[#000] opacity-80 ml-2 hover:underline">{item?.phone}</p>
                    </a>
                    <a href="mailto:info@easttour.uz" className="flex items-center hover:underline">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clipPath="url(#clip0_269_192)">
                            <path d="M19 1H5C3.67441 1.00159 2.40356 1.52888 1.46622 2.46622C0.528882 3.40356 0.00158786 4.67441 0 6L0 18C0.00158786 19.3256 0.528882 20.5964 1.46622 21.5338C2.40356 22.4711 3.67441 22.9984 5 23H19C20.3256 22.9984 21.5964 22.4711 22.5338 21.5338C23.4711 20.5964 23.9984 19.3256 24 18V6C23.9984 4.67441 23.4711 3.40356 22.5338 2.46622C21.5964 1.52888 20.3256 1.00159 19 1ZM5 3H19C19.5988 3.00118 20.1835 3.18151 20.679 3.5178C21.1744 3.85409 21.5579 4.33095 21.78 4.887L14.122 12.546C13.5584 13.1073 12.7954 13.4225 12 13.4225C11.2046 13.4225 10.4416 13.1073 9.878 12.546L2.22 4.887C2.44215 4.33095 2.82561 3.85409 3.32105 3.5178C3.81648 3.18151 4.40121 3.00118 5 3ZM19 21H5C4.20435 21 3.44129 20.6839 2.87868 20.1213C2.31607 19.5587 2 18.7956 2 18V7.5L8.464 13.96C9.40263 14.8963 10.6743 15.422 12 15.422C13.3257 15.422 14.5974 14.8963 15.536 13.96L22 7.5V18C22 18.7956 21.6839 19.5587 21.1213 20.1213C20.5587 20.6839 19.7956 21 19 21Z" fill="black" fillOpacity="0.8"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_269_192">
                            <rect width="24" height="24" fill="white"/>
                            </clipPath>
                            </defs>
                        </svg>
                        <p className="font-montserrat text-[#000] opacity-80 ml-2 mt-2 break-all">{item?.email}</p>
                    </a>
                </div>
            </div>
        </div>
    )
}
export default EmployeeCard;