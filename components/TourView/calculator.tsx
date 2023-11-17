import dynamic from "next/dynamic";
import { useState } from "react";
import {message} from 'antd'

const PaymentModal = dynamic(() => import('@/components/TourView/payment/modal'), { ssr: false })

const TourCalculator = ({data, selectedDate}: {data: any, selectedDate:string | undefined}) => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [peopleCount, setpeopleCount] = useState<{[name: number]: number}>({} as {[name: number]: number});
    
    const calcAllSumm = () => {
        return data?.prices?.reduce(function(accumulator: number, currentValue: any) {
            return accumulator + currentValue.price * (peopleCount[currentValue?.id] ? peopleCount[currentValue?.id] : 0);
        }, 0)
    }
    return (
        <div className="container mx-auto font-public-sans text-[#4B465C] mb-5 mt-[50px]">
            <PaymentModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} data={data} peopleCount={peopleCount} selectedDate={selectedDate} />
            <div className="grid grid-cols-12 gap-[30px]">
                <div className="md:col-span-8 col-span-12">
                    {
                        data?.prices?.map((item: any) => (
                            <div key={item?.id} className="p-[24px] pb-[14px] rounded-md mb-7" style={{boxShadow: "0px 4px 18px rgba(75, 70, 92, 0.10)"}}>
                                <div className="flex justify-between items-center mb-2">
                                    <h3 className="font-semibold text-[20px]">{item?.priceCondition?.name} ({item?.priceCondition?.ageFrom} - {item?.priceCondition?.ageTo})</h3>
                                    <div className="flex items-center">
                                        <button onClick={() => setpeopleCount({...peopleCount, [item.id] : peopleCount[item.id] ? peopleCount[item.id] + 1 : 1})} className="w-8 h-8 rounded bg-[#F1F1F2] hover:bg-[#e4e4e4] transition text-[24px] leading-[10px]">+</button>
                                        <span className="px-3 text-2xl">{peopleCount[item?.id] ? peopleCount[item?.id] : 0}</span>
                                        <button onClick={() => setpeopleCount({...peopleCount, [item.id] : peopleCount[item.id] ? peopleCount[item.id] - 1 : 1})} disabled={!peopleCount[item.id]} className="w-8 h-8 rounded bg-[#F1F1F2] hover:bg-[#e4e4e4] transition text-[30px] leading-[10px]">-</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="md:col-span-4 col-span-12">
                    <div className="p-[24px] pb-[14px] rounded-md" style={{boxShadow: "0px 4px 18px rgba(75, 70, 92, 0.10)"}}>
                        <h3 className="font-semibold text-[15px] mb-4">Price Details</h3>
                        {
                            data?.prices?.map((item: any) => (
                                <div key={item?.id} className="flex justify-between mb-2">
                                    <span className="font-normal">{item?.priceCondition?.name}:</span>
                                    <span className="font-normal">{peopleCount[item?.id] ? peopleCount[item?.id] : 0} x ${item?.price}</span>
                                </div>
                            ))
                        }
                        <div className="flex justify-between mb-5">
                            <span className="font-normal">Date</span>
                            <span className="font-normal opacity-60">{selectedDate ? selectedDate : "Select date"}</span>
                        </div>
                        <div className="flex justify-between mb-5 mt-10">
                            <span className="font-normal">Total</span>
                            <span className="font-normal">${calcAllSumm()}</span>
                        </div>
                        <button onClick={() => calcAllSumm() ? setIsModalOpen(true) : message.error("Select the number of passengers!")} className="bg-main-color hover:opacity-90 text-white py-2 w-[100%] rounded-md">Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TourCalculator;