import tashkent from '../../assets/cities/tashkent.jpg';
import Samarkand from '../../assets/cities/sam.jpg';
import khiva from '../../assets/cities/khiva.jpg';
import Muynak from '../../assets/cities/moynak.jpg';
import shahrisabz from '../../assets/cities/shahrisabz.jpg';
import zomin from '../../assets/cities/zomin.jpg';
import Image from "next/image";
import CarsClider from "./Slider";
import { Segmented } from 'antd';
import { useState } from 'react';

const AllTransports = ({transports, transportTypes}: {transports: any, transportTypes: {id: number, name: string}[]}) => {

    const [type, setType] = useState<number>(transportTypes[0]?.id | 1);

    const data: {image: any, title: string}[] = [
        {
            image: tashkent,
            title: "Tashkent"
        },
        {
            image: Samarkand,
            title: "Samarkand"
        },
        {
            image: khiva,
            title: "khiva"
        },
        {
            image: Muynak,
            title: "Muynak"
        },
        {
            image: shahrisabz,
            title: "Shakhrisabz"
        },
        {
            image: zomin,
            title: "Zaamin"
        },
    ]

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
                    // options={['Sedan', 'Avto']}  
                    defaultValue={type} 
                    onChange={(e:any) => setType(e)} 
                    className='bg-main-color mt-12 mb-5' 
                    style={{background: "white", border: ""}} 
                    options={transportTypes?.map((item: any) => ({label: item?.name, value: item?.id}))}
                />
            </div>


            {
                transports?.map((item: any, index: number) => (
                    <div key={index}>
                        <h2 className='text-[28px] text-main-color font-medium my-8'>Checrlet Captiva</h2>
                        <div  className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[13px] pb-4">
                            <div className="p-[10px]" style={{border: "1px solid rgba(0, 0, 0, 0.30)"}}>
                                <Image src={Samarkand} className="w-[100%]" alt="Car" />
                            </div>
                            <div className="p-[10px]" style={{border: "1px solid rgba(0, 0, 0, 0.30)"}}>
                                <CarsClider data={data} />
                            </div>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>Title</td>
                                        <td>Checrlet Captiva</td>
                                    </tr>
                                    <tr>
                                        <td>Band</td>
                                        <td>Chevrolet</td>
                                    </tr>
                                    <tr>
                                        <td>Capacity</td>
                                        <td>4</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
export  default AllTransports;