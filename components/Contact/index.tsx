import instance from "@/congif/axios";


const ContactForm = () => {

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

        console.log("response.data", response.data);
        
        return response.data;

    }
    
    return (
        <div className="container mx-auto md:pt-[84px] pt-[54px] md:pb-[70px] pb-[40px]">
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