import SEO from '@/SEO'
import ToTopBtn from '@/components/Buttons/toTop'
import Layout from '@/components/Layouts'
import AllCities from '@/components/Cities'
import ContactFirst from '@/components/Contact/firstBlock'
import ContactForm from '@/components/Contact'

export default function Contact () {
  
  return (
    <Layout>
      <>
        <SEO />
        <ContactFirst />
        <ContactForm />
        <ToTopBtn />
      </>
    </Layout>
  )
}
