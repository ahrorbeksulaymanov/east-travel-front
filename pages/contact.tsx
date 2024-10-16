import SEO from '@/SEO'
import ToTopBtn from '@/components/Buttons/toTop'
import ContactFirst from '@/components/Contact/firstBlock'
import ContactForm from '@/components/Contact'

export default function Contact () {
  
  return (
      <>
        <SEO
          title='Contact us'
          description='Hey, We are the EastTour Brief History About Us.'
        />
        <ContactFirst />
        <ContactForm />
        <ToTopBtn />
      </>
  )
}
