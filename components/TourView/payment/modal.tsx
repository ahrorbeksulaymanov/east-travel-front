import { BASE_URL } from '@/congif/constans';
import { IPrice } from '@/models';
import { Modal, Steps } from 'antd';
import axios from 'axios';
import { useRouter } from 'next/router';
import { Dispatch } from 'react';

const PaymentModal =  ({isModalOpen, setIsModalOpen, data, peopleCount, selectedDate}: {isModalOpen: boolean, setIsModalOpen: Dispatch<boolean>, data: any, peopleCount:{[name: number]: number}, selectedDate: string | undefined}) => {
    
    const router = useRouter()  
    
    const submitData = async (event: any) => {
        event.preventDefault();

        const formdata = new FormData()

        formdata.append("firstName", event.target["firstName"].value)
        formdata.append("lastName", event.target["lastName"].value)
        formdata.append("email", event.target["email"].value)
        formdata.append("phoneNumber", event.target["phoneNumber"].value)
        formdata.append("tourId", String(data?.id))

        for (const key in peopleCount) {
            formdata.append("prices", JSON.stringify({id: key,  count: peopleCount[key]}))
        }

        const result = await axios({url: `${BASE_URL}/booking`, method: "POST", data: formdata});

        if(result?.data?.status === 1) {
            router.push(`/payment/${result?.data?.data?.bookingId}/${result?.data?.data?.price}`)
        }
        
    }
    
    const calcAllSumm = () => {
        return data?.prices.reduce(function(accumulator: number, currentValue: any) {
            return accumulator + currentValue.price * (peopleCount[currentValue?.id] ? peopleCount[currentValue?.id] : 0);
        }, 0)
    }

    return (
        <Modal 
            title=""
            width={1500}
            open={isModalOpen} 
            onOk={() => setIsModalOpen(false)} 
            onCancel={() => setIsModalOpen(false)}
            footer={false}
        >
            <div className="grid grid-cols-12 text-[#4B465C] my-16 payment-step font-public-sans gap-6">
                <div className="lg:col-span-7 col-span-12 text-center">
                    <h4 className='text-[26px] font-semibold'>Edit User Information</h4>
                    <p className='mt-3 mb-7 text-[15px]'>Updating user details will receive a privacy audit.</p>
                    {/* <div className='w-[50%] mx-auto mb-4'>
                        <Steps
                            current={1}
                            items={[
                            {
                                icon: <div className='w-8 h-8 rounded-full pt-[6px] icon-step'>
                                        <svg className='mx-auto' xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                                            <path d="M4.66699 10.0002L8.83366 14.1668L17.167 5.8335" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </div>
                            },
                            { 
                                icon: <div className='w-8 h-8 rounded-full pt-[6px] icon-step'>
                                        <svg className='mx-auto' xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                                            <path d="M4.66699 10.0002L8.83366 14.1668L17.167 5.8335" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </div>
                            },
                            {
                                icon: <div className='w-8 h-8 rounded-full pt-[6px] icon-step'>
                                        <svg className='mx-auto' xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                                            <path d="M4.66699 10.0002L8.83366 14.1668L17.167 5.8335" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </div>
                            },
                            ]}
                        />
                    </div> */}
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
                <div className="lg:col-span-5 col-span-12 my-auto">
                    <div className="p-[24px] pb-[14px] rounded-md" style={{border: "1px solid #DDE2E5"}}>
                        <h3 className="font-semibold text-[15px] mb-4">Price Details</h3>
                        {
                            data?.prices?.map((item: IPrice) => (
                                <div key={item?.id} className="flex justify-between mb-2">
                                    <span className="font-normal">{item?.priceCondition?.name}:</span>
                                    <span className="font-normal">{peopleCount[item?.id] ? peopleCount[item?.id] : 0} x ${item?.price}</span>
                                </div>
                            ))
                        }
                        <div className="flex justify-between mb-5">
                            <span className="font-normal">Date</span>
                            <span className="font-normal opacity-60">{selectedDate ? selectedDate : "Date is not selected"}</span>
                        </div>
                        <div className="flex justify-between mb-5 mt-10">
                            <span className="font-normal">Total</span>
                            <span className="font-normal">${calcAllSumm()}</span>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    )
}
export default PaymentModal;