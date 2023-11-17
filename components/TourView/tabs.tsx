import { Segmented } from 'antd';
import { useState } from 'react';


const TourTab = ({data}: {data: any}) => {

    const [type, setType] = useState<"Description" | "Itinerary">("Description");

    return (
        <div className='container mx-auto tour-tab-items mt-5'>
            <Segmented options={['Description', 'Itinerary']} defaultValue={type} onChange={(e:any) => setType(e)} className='bg-main-color mt-12 mb-5' style={{background: "white", border: ""}} />
            {
                type === 'Description' ? 
                <p className='font-noto text-lg leading-[40px] mt-3' dangerouslySetInnerHTML={{__html: data?.description}} /> : 
                data?.itineraries?.map((item: any) => (
                    <div key={item?.id}>
                        <p className='text-base font-bold'>{item?.day}</p>
                        <p className='font-noto text-lg leading-[40px] mt-3' dangerouslySetInnerHTML={{__html: item?.description}} />
                    </div>
                ))
                
            }
        </div>
    )
}
export default TourTab;