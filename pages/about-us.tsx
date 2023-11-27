import SEO from '@/SEO'
import AboutC from '@/components/AboutUs'
import EmployeesSlider from '@/components/AboutUs/employeesSlider'
import AboutUsFirst from '@/components/AboutUs/firstBlock'
import ToTopBtn from '@/components/Buttons/toTop'
import { BASE_URL } from '@/congif/constans'
import { IBasic, IEmployee } from '@/models'

export async function getStaticProps() {
  const response = await fetch(
    `${BASE_URL}/users`
  )
  const users = await response.json()
  return {
    props: {
      users
    },
  }
}

export default function AboutUs({users}: {users: IBasic<IEmployee[]>}) {
      
  return (
      <>
        <SEO />
        <AboutUsFirst />
        <AboutC />
        <EmployeesSlider data={users?.data?.items} />
        <ToTopBtn />
      </>
  )
}
