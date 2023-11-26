import SEO from '@/SEO'
import AboutC from '@/components/AboutUs'
import EmployeesSlider from '@/components/AboutUs/employeesSlider'
import AboutUsFirst from '@/components/AboutUs/firstBlock'
import ToTopBtn from '@/components/Buttons/toTop'
import { BASE_URL } from '@/congif/constans'

export async function getStaticProps({ params } : {params: any}) {
  const response = await fetch(
    `${BASE_URL}/users`
  )
  const users = await response.json()
  return {
    props: users,
  }
}

export default function AboutUs({data}: any) {
    
  return (
      <>
        <SEO />
        <AboutUsFirst />
        <AboutC />
        <EmployeesSlider data={data?.items} />
        <ToTopBtn />
      </>
  )
}
