import { BASE_URL } from '@/congif/constans';
import { message } from 'antd';
import axios from 'axios';
import { Dispatch } from 'react';

const PaymentModalForm =  ({setIsModalOpen, data, peopleCount, setisSentCode}: {setIsModalOpen: Dispatch<boolean>, data: any, peopleCount:{[name: number]: number}, setisSentCode: Dispatch<boolean>}) => {
        
    const submitData = async (event: any) => {
        event.preventDefault();

        try {
            const formdata = new FormData()
    
            formdata.append("firstName", event.target["firstName"].value)
            formdata.append("lastName", event.target["lastName"].value)
            formdata.append("email", event.target["email"].value)
            formdata.append("phoneNumber", event.target["phoneNumber"].value)
            formdata.append("tourId", String(data?.id))
    
            for (const key in peopleCount) {
                formdata.append("prices", JSON.stringify({id: Number(key),  count: peopleCount[key]}))
            }
    
            const result = await axios({url: `${BASE_URL}/booking`, method: "POST", data: formdata});
    
            if(result?.data?.status === 1) {
                setisSentCode(true)
                localStorage.setItem("booking_result", JSON.stringify(result?.data?.data))
            }
            
        }  catch (error: any) {
            message.error(error?.response?.data?.message)
        }
        
    }

    
    return (
        <div className="lg:col-span-7 col-span-12 text-center">
            <h4 className='text-[26px] font-semibold'>Edit User Information</h4>
            <p className='mt-3 mb-7 text-[15px]'>Updating user details will receive a privacy audit.</p>
            <form onSubmit={submitData} className="contact-form" id="form1">
                <div className="grid md:grid-cols-2 grid-cols-1 gap-x-[25px] gap-y-8 mb-8">
                    <input type="text" className="w-[100%] rounded py-[7px] px-[14px]" name="firstName" style={{border: "1px solid #DDE2E5"}} required placeholder="First Name" />
                    <input type="text" className="w-[100%] rounded py-[7px] px-[14px]" name="lastName" style={{border: "1px solid #DDE2E5"}} required placeholder="Last Name" />
                    <input type="email" className="w-[100%] rounded py-[7px] px-[14px]" name="email" style={{border: "1px solid #DDE2E5"}} required placeholder="Email" />
                    <input type="text" className="w-[100%] rounded py-[7px] px-[14px]" name="phoneNumber" style={{border: "1px solid #DDE2E5"}} required placeholder="Tel number" />
                </div>
            </form>
            
        

            <input onClick={() => setIsModalOpen(true)} form="form1" type="submit" value="Submit" className="px-3 bg-main-color hover:bg-[#FFB800] text-white py-2 rounded cursor-pointer" />
            <button onClick={(e) => {setIsModalOpen(false)}} className="py-2 px-3 rounded cursor-pointer ml-3" style={{border: "1px solid #DDE2E5"}}>Cancel</button>
        </div>
    )
}
export default PaymentModalForm;