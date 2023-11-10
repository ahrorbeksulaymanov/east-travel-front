

const ContactForm = () => {

    const submitData = (event: any) => {
        event.preventDefault();
        console.log("event", event.target["first_name"].value);
    }
    
    return (
        <div className="container mx-auto md:pt-[84px] pt-[54px] md:pb-[70px] pb-[40px]">
            <form onSubmit={submitData} className="contact-form">
                <div className="grid md:grid-cols-2 grid-cols-1 gap-x-[25px] gap-y-[32px]">
                    <input type="text" className="w-[100%] rounded md:py-[18px] py-[12px] md:px-[24px] px-[16px]" name="first_name" style={{border: "1px solid #DDE2E5"}} required placeholder="First Name" />
                    <input type="text" className="w-[100%] rounded md:py-[18px] py-[12px] md:px-[24px] px-[16px]" name="last_name" style={{border: "1px solid #DDE2E5"}} required placeholder="Last Name" />
                    <input type="email" className="w-[100%] rounded md:py-[18px] py-[12px] md:px-[24px] px-[16px]" name="email" style={{border: "1px solid #DDE2E5"}} required placeholder="Email" />
                    <input type="text" className="w-[100%] rounded md:py-[18px] py-[12px] md:px-[24px] px-[16px]" name="subject" style={{border: "1px solid #DDE2E5"}} required placeholder="Subject" />
                    <div className="md:col-span-2 col-span-1">
                        <textarea name="description" className="w-[100%] rounded md:py-[18px] py-[12px] md:px-[24px] px-[16px]" style={{border: "1px solid #DDE2E5"}} placeholder="Message" rows={5}></textarea>
                    </div>
                </div>

                <input type="submit" value="Submit" className="w-[100%] bg-main-color hover:bg-[#FFB800] text-white py-2 rounded cursor-pointer mt-4" />
            </form>
        </div>
    )
}
export default ContactForm;