import type { Dayjs } from 'dayjs';
import { Calendar } from 'antd';
import type { CalendarProps } from 'antd';
import dayjs from 'dayjs'

const TourCalendar = ({data}: {data: any}) => {
    
    const onPanelChange = (value: Dayjs, mode: CalendarProps<Dayjs>['mode']) => {
        console.log(value.format('YYYY-MM-DD'), mode);
      };

    return (
        <div className='container mx-auto tour-calendar font-public-sans mt-[100px]'>
            <h1 className='font-noto text-[56px] font-medium'>Booking Summary</h1>
            <Calendar onPanelChange={onPanelChange} validRange={[dayjs("2023-11-15"), dayjs("2023-11-25")]}/>
        </div>
    )
}
export default TourCalendar;