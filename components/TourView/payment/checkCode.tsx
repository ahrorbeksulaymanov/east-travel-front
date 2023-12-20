import { BASE_URL } from '@/congif/constans';
import { message } from 'antd';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import ReactInputVerificationCode from 'react-input-verification-code';


const CheckCode = () => {

    const router = useRouter();

    const [phone, setPhone] = useState<string>()
    const [isFull, setisFull] = useState<boolean>(false)
    const [resData, setresData] = useState<{price: number, bookingId: number}>()
    const [counter, setcounter] = useState<number>(59)

    useEffect(() => {

        let obj = localStorage.getItem("booking_result")
        if(obj){
            setresData(JSON.parse(obj))
            obj = JSON.parse(obj)
        }
        
    }, [])

    useEffect(() => {
        if(counter > 0){
            setTimeout(() => {
                setcounter(p => p - 1)
            }, 1000);
        } else if(counter === 0) {
            setisFull(false)
        }
    }, [counter])


    const onchangeInput = (e: string) => {
        setPhone(e)        
        if(e?.length === 6) {
            setisFull(true)
        } else {
            setisFull(false)
        }
    }

    const submitData = async (event: any) => {
        event.preventDefault();
        
        try {
            const result = await axios({url: `${BASE_URL}/payment/check-phone?bookingId=${resData?.bookingId}&code=${phone}`, method: "POST"});
    
            if(result?.data?.status === 1) {
                router.push(`/payment/${result?.data?.data?.bookingId}/${result?.data?.data?.price}`)
                localStorage.removeItem("booking_result");
                localStorage.setItem("phone_is_checked", '1')
            }
        } catch (error: any) {
            message.error(error?.response?.data?.message)
        }
        
    }

    const codeResend = async () => {        
        try {
            const result = await axios({url: `${BASE_URL}/payment/resent-code?bookingId=${resData?.bookingId}`, method: "POST"});
    
            if(result?.data?.status === 1) {
                setcounter(59)
            }
        } catch (error: any) {
            message.error(error?.response?.data?.message)
        }
        
    }


    return(
        
        <div className="lg:col-span-7 col-span-12 text-center">
            <h4 className='text-[26px] font-semibold'>We have sent you an SMS code</h4>
            <p className='mt-3 mb-7 text-[15px]'>Sms code</p>
            <div className="verification_code_wrapper flex justify-center">
                <ReactInputVerificationCode
                    autoFocus
                    length={6}
                    onChange={(e) => onchangeInput(e)}
                    placeholder=''
                />
            </div>
            <div className="flex justify-center my-4">
                <p className='mr-16'>Time left:</p>
                <p className='ml-16'>{counter ? counter : "Time is up"}</p>
            </div>
            
            <input form="form1" type="submit" onClick={(e) => submitData(e)} disabled={!isFull} value="Submit code" className="px-3 bg-main-color hover:bg-[#FFB800] text-white py-2 rounded cursor-pointer" />
            {counter === 0 ? <button onClick={() => codeResend()} className="py-2 px-3 rounded cursor-pointer ml-3" style={{border: "1px solid #DDE2E5"}}>Resend code</button> : ""}
        </div>
    )
}
export default CheckCode;