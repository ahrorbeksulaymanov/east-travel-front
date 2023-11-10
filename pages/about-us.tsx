import SEO from '@/SEO'
import AboutC from '@/components/AboutUs'
import EmployeesSlider from '@/components/AboutUs/employeesSlider'
import AboutUsFirst from '@/components/AboutUs/firstBlock'
import ToTopBtn from '@/components/Buttons/toTop'
import Layout from '@/components/Layouts'

export default function AboutUs() {
  
  return (
    <Layout>
      <>
        <SEO />
        <AboutUsFirst />
        <AboutC />
        <EmployeesSlider />
        <ToTopBtn />
      </>
    </Layout>
  )
}
