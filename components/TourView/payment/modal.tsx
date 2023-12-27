import { IPrice } from '@/models';
import { Modal } from 'antd';
import { Dispatch, useState } from 'react';
import PaymentModalForm from './modalForm';
import CheckCode from './checkCode';
import BookedTour from './bookedTour';

const PaymentModal =  ({isModalOpen, setIsModalOpen, data, peopleCount, selectedDate}: {isModalOpen: boolean, setIsModalOpen: Dispatch<boolean>, data: any, peopleCount:{[name: number]: number}, selectedDate: string | undefined}) => {
        
    const [isSentCode, setisSentCode] = useState<1 | 2 | 3>(1);
    const [isNumberChecked, setisNumberChecked] = useState<boolean>(false);

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
                {
                    isSentCode === 1 ? 
                    <PaymentModalForm setIsModalOpen={setIsModalOpen} peopleCount={peopleCount} data={data} setisSentCode={setisSentCode} />
                    : isSentCode === 2 ? <CheckCode setisSentCode={setisSentCode} />
                        : isSentCode === 3 ?<BookedTour setisSentCode={setisSentCode} data={data} /> : ""
                }
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
                        {/* <div className="flex justify-between mb-5">
                            <span className="font-normal">Date</span>
                            <span className="font-normal opacity-60">{selectedDate ? selectedDate : "Date is not selected"}</span>
                        </div> */}
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