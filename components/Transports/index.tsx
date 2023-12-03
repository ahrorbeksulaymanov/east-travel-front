import Image from "next/image";
import CarsClider from "./Slider";
import { Segmented } from 'antd';
import { useEffect } from 'react';
import { ITransport, ITransportType } from '@/models';
import { FILE_URL } from '@/congif/constans';
import { useRouter } from "next/router";

const AllTransports = ({transports, transportTypes}: {transports: ITransport[], transportTypes: ITransportType[]}) => {

    const router = useRouter();
    
    useEffect(() => {
        if(transportTypes.length){
            router.push({
                pathname: router.pathname,
                query: { ...router.query, transportTypeId: String(transportTypes[0]?.id) },
            }, undefined, { scroll: false });
            
        }
    }, [])

    const selectTransportType = (e: number) => {
        router.push({
            pathname: router.pathname,
            query: { ...router.query, transportTypeId: String(e) },
        }, undefined, { scroll: false });
    }
    
    return (
        <div className="container mx-auto">
            <div className="md:my-[64px] my-[40px]">
                <p className="text-[#FFC700] mb-4 text-[16px]">Transport</p>
                <div className="grid grid-cols-12 xl:gap-[110px] lg:gap-[50px] md:gap-[40px] ">
                    <div className="md:col-span-6 col-span-12 bg-dotted">
                        <h1 className="text-second-color lg:text-[42px] md:text-[35px] sm:text-[30px] text-[25px] font-medium font-noto">Our vehicles are always ready for your service</h1>
                    </div>
                    <div className="md:col-span-6 col-span-12">
                        <p className="text-[#000] lg:text-[18px] text-[16px] lg:leading-[40px] leading-[30px] font-semibold">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mor mattis nec etiam ac. Bibendum tellus mi imperdiet amet maecenas magna tortor nulla. Nec tortor ut cursus ornare nibh vivamus. Quam elementum at velit viverra mattis.</p>
                    </div>
                </div>
            </div>
            <div className="tour-tab-items">
                <Segmented 
                    defaultValue={router.query.transportTypeId ? Number(router.query.transportTypeId) : undefined} 
                    onChange={(e:any) => selectTransportType(e)}
                    className='bg-main-color mt-12 mb-5' 
                    style={{background: "white"}} 
                    options={transportTypes?.map((item) => ({label: item?.name, value: item?.id}))}
                />
            </div>
            {transports?.length == 0 ? <iframe className="w-[300px] h-[300px] mx-auto" src="https://lottie.host/embed/4bb4d2eb-a8fb-489b-bb5a-a2ae6db1def8/jYwzFsIucN.json"></iframe> : ""}
            {
                transports?.map((item, index) => (
                    <div key={index}>
                        <h2 className='text-[28px] text-main-color font-medium my-8'>{item?.title}</h2>
                        <div  className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[13px] pb-4">
                            <div className="p-[10px]" style={{border: "1px solid rgba(0, 0, 0, 0.30)"}}>
                                <Image src={FILE_URL + item?.mainPhoto} width={400} height={400} className="w-[100%]" alt={item?.title} />
                            </div>
                            <div className="p-[10px]" style={{border: "1px solid rgba(0, 0, 0, 0.30)"}}>
                                {
                                    item?.photos?.length ? 
                                    <CarsClider data={item?.photos} title={item?.title} /> : "File is not uploaded!"
                                }
                            </div>
                            <div>
                                <table className='w-[100%]'>
                                    <tbody>
                                        <tr>
                                            <td>Title</td>
                                            <td>{item?.title}</td>
                                        </tr>
                                        <tr>
                                            <td>Band</td>
                                            <td>{item?.brand}</td>
                                        </tr>
                                        <tr>
                                            <td>Capacity</td>
                                            <td>{item?.capacity}</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <p className='mt-4 font-semibold text-[#5E6282]'>Description: {item?.description}</p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
export  default AllTransports;