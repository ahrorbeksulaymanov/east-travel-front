import HotelCard from "../Cards/Hotel";
import { Select } from 'antd';
import { IHotel } from '@/models';

const filterOption = (input: string, option?: { label: string; value: string }) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

const AllHotels = ({data} : {data: IHotel[]}) => {
    

    // const getRegions = async () => {
    //     try {

    //         const response = await instance({ url: `/regions`, method: "GET" });
      
    //         if (response.data?.status === 1) {
    //             return response.data?.data
    //         } else {
    //             return new Error(response.data?.message)
    //         }
    //     } catch (error: any) {
    //         message.error(error?.response?.message)
    //     }
    // }
    
    // useEffect(() => {
    //     getRegions()
    // }, [])

    return (
        <div className="container mx-auto mb-11">
            <div className="grid grid-cols-12 xl:gap-[110px] lg:gap-[50px] md:gap-[40px] md:my-[64px] my-[40px]">
                <div className="md:col-span-7 col-span-12 bg-dotted pt-5">
                    <h1 className="text-second-color lg:text-[58px] md:text-[50px] sm:text-[40px] text-[30px] font-semibold font-noto">
                        Plan your perfect<span className="text-[#FFA500]"> hotels  </span>
                    </h1>
                </div>
                <div className="md:col-span-5 col-span-12">
                <Select
                    showSearch
                    placeholder="Select a person"
                    optionFilterProp="children"
                    filterOption={filterOption}
                    options={[
                    {
                        value: 'jack',
                        label: 'Jack',
                    },
                    {
                        value: 'lucy',
                        label: 'Lucy',
                    },
                    {
                        value: 'tom',
                        label: 'Tom',
                    },
                    ]}
                />
                    <p className="text-[#000] lg:text-[18px] text-[16px] lg:leading-[40px] leading-[30px] font-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mor mattis nec etiam ac. Bibendum tellus mi imperdiet amet maecenas magna tortor nulla. Nec tortor ut cursus ornare nibh vivamus. Quam elementum at velit viverra mattis.</p>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-[25px]">
                    {                
                        data?.map((item, index) => (
                            <HotelCard key={index} item={item} />
                        ))
                    }
                </div>
        </div>
    )
}
export default AllHotels;