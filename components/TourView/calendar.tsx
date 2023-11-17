import { Calendar } from 'antd';
import dayjs from 'dayjs'
import { Dispatch } from 'react';

const TourCalendar = ({data, setselectedDate}: {data: any, setselectedDate: Dispatch<string>}) => {
    
    return (
        <div className='container mx-auto tour-calendar font-public-sans mt-[100px]'>
            <h1 className='font-noto text-[56px] font-medium'>Booking Summary</h1>
            <Calendar onChange={(e) => setselectedDate(e.format('DD-MM-YYYY'))} validRange={[dayjs(data?.startDate), dayjs(data?.endDate)]}/>
        </div>
    )
}
export default TourCalendar;