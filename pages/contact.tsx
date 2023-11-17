import SEO from '@/SEO'
import ToTopBtn from '@/components/Buttons/toTop'
import ContactFirst from '@/components/Contact/firstBlock'
import ContactForm from '@/components/Contact'

export default function Contact () {
  
  return (
      <>
        <SEO />
        <ContactFirst />
        <ContactForm />
        <ToTopBtn />
      </>
  )
}
