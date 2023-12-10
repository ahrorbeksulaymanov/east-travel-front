import HotelCard from "../Cards/Hotel";
import { Empty, Select } from 'antd';
import { IHotel, IRegion } from '@/models';
import { useRouter } from "next/router";

const filterOption = (input: string, option?: { label: string; value: string }) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

const AllHotels = ({data, regions} : {data: IHotel[], regions: IRegion[]}) => {
    
    const router = useRouter();    

    const selectRegion = (e: number) => {
        if(e) {
            router.push({
                query: { regionId: String(e) },
            }, undefined, { scroll: false });
        } else {
            router.push({ query: {} }, undefined, { scroll: false });
        }
    }

    const selectDistrict = (e: number) => {
        if(e) {
            router.push({
                query: { ...router.query, districtId: String(e) },
            }, undefined, { scroll: false });

        } else {
            router.push({
                query: { regionId: router.query.regionId },
            }, undefined, { scroll: false });
        }
    }

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
                        allowClear
                        className="mr-3 w-[40%] h-[40px] font-bold"
                        showSearch
                        placeholder="Filter by region"
                        value={router.query.regionId ? Number(router.query.regionId) : undefined}
                        optionFilterProp="children"
                        onChange={(e) => selectRegion(e)}
                        filterOption={filterOption}
                        options={regions?.map((r: any) => ({label: r?.name, value: r?.id}))}
                    />
                    <Select
                        allowClear
                        showSearch
                        disabled={!router.query.regionId}
                        className="w-[40%] h-[40px] font-bold"
                        value={router.query.districtId ? Number(router.query.districtId) : undefined}
                        placeholder="Filter by district"
                        optionFilterProp="children"
                        onChange={(e) => selectDistrict(e)}
                        filterOption={filterOption}
                        options={regions?.find((i: any) => i?.id == router.query.regionId)?.districts?.map((r:any) => ({label: r?.name, value: r?.id}))}
                    />
                    <p className="text-[#000] lg:text-[18px] text-[16px] lg:leading-[40px] leading-[30px] font-bold mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mor mattis nec etiam ac. Bibendum tellus mi imperdiet amet maecenas magna tortor nulla. Nec tortor ut cursus ornare nibh vivamus. Quam elementum at velit viverra mattis.</p>
                </div>
            </div>
            {data?.length === 0 ? <Empty className="w-[100%] mx-auto" description={false} /> : ""}
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