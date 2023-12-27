import { BASE_URL } from '@/congif/constans';
import { message } from 'antd';
import axios from 'axios';
import { useRouter } from 'next/router';
import { Dispatch, useEffect, useState } from 'react';
import ReactInputVerificationCode from 'react-input-verification-code';


const BookedTour = ({setisSentCode, data}: {setisSentCode: Dispatch<1 | 2 | 3>, data: any}) => {

    const router = useRouter();

    const [counter, setcounter] = useState<number>(59)
    console.log("dddddddddddd", data);
    
    return(
        
        <div className="lg:col-span-7 col-span-12 text-center">
            <h4 className='text-[26px] font-semibold flex justify-center items-center'>
                You have booked a tour 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8 ml-4 text-[#73d13d]">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
            </h4>
            <p className='mt-3 mb-7 text-[16px]'>Thank you for choosing our service</p>
            <div className="verification_code_wrapper flex justify-center">
               
            </div>
            <div className="flex justify-center my-4">
                <p className='mr-16 text-[16px]'>Tour name:</p>
                <p className='ml-16'>{data?.title}</p>
            </div>
            
            {/* <input form="form1" type="submit" onClick={(e) => submitData(e)} disabled={!isFull} value="Submit code" className="px-3 bg-main-color hover:bg-[#FFB800] text-white py-2 rounded cursor-pointer" />
            {counter === 0 ? <button onClick={() => codeResend()} className="py-2 px-3 rounded cursor-pointer ml-3" style={{border: "1px solid #DDE2E5"}}>Resend code</button> : ""} */}
        </div>
    )
}
export default BookedTour;