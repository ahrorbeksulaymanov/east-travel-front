import instance from "@/congif/axios";
import { notification } from "antd";

const ContactForm = () => {

    const [api, contextHolder] = notification.useNotification();

    const openNotification = () => {
      api.open({
        message: 'Thank you for your inquiry!',
        description:
          'Your request has been sent successfully. We will contact you soon!',
        duration: 4,
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path className=" text-[#52c41a]" strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
      
      });
    };

    const submitData = async (event: any) => {
        event.preventDefault();

        const formdata = new FormData();
        formdata.append('firstName', event.target["firstName"].value);
        formdata.append('lastName', event.target["lastName"].value);
        formdata.append('email', event.target["email"].value);
        formdata.append('subject', event.target["subject"].value);
        formdata.append('message', event.target["message"].value);
      
        const response = await instance({
          url: "/contacts",
          method: "POST",
          data: formdata,
        });

        if(response.data?.status == 1) {
            openNotification()
        }   
        return response.data;
    }
    
    return (
        <div className="container mx-auto md:pt-[84px] pt-[54px] md:pb-[70px] pb-[40px]">
            {contextHolder}
            <form onSubmit={submitData} className="contact-form">
                <div className="grid md:grid-cols-2 grid-cols-1 gap-x-[25px] gap-y-[32px]">
                    <input type="text" className="w-[100%] rounded md:py-[18px] py-[12px] md:px-[24px] px-[16px]" name="firstName" style={{border: "1px solid #DDE2E5"}} required placeholder="First Name" />
                    <input type="text" className="w-[100%] rounded md:py-[18px] py-[12px] md:px-[24px] px-[16px]" name="lastName" style={{border: "1px solid #DDE2E5"}} required placeholder="Last Name" />
                    <input type="email" className="w-[100%] rounded md:py-[18px] py-[12px] md:px-[24px] px-[16px]" name="email" style={{border: "1px solid #DDE2E5"}} required placeholder="Email" />
                    <input type="text" className="w-[100%] rounded md:py-[18px] py-[12px] md:px-[24px] px-[16px]" name="subject" style={{border: "1px solid #DDE2E5"}} required placeholder="Subject" />
                    <div className="md:col-span-2 col-span-1">
                        <textarea name="message" className="w-[100%] rounded md:py-[18px] py-[12px] md:px-[24px] px-[16px]" style={{border: "1px solid #DDE2E5"}} placeholder="Message" rows={5}></textarea>
                    </div>
                </div>

                <input type="submit" value="Submit" className="w-[100%] bg-main-color hover:bg-[#FFB800] text-white py-2 rounded cursor-pointer mt-4" />
            </form>
        </div>
    )
}
export default ContactForm;