import SEO from '@/SEO'
import AboutC from '@/components/AboutUs'
import EmployeesSlider from '@/components/AboutUs/employeesSlider'
import AboutUsFirst from '@/components/AboutUs/firstBlock'
import ToTopBtn from '@/components/Buttons/toTop'
import { BASE_URL } from '@/congif/constans'
import { IBasic, IEmployee } from '@/models'


export default function AboutUs({users}: {users: IBasic<IEmployee[]>}) {
      
  return (
      <>
        <SEO
          title='About East Tour'
          description='Hey, We are the EastTour Brief History About East Tour.'
        />
        <AboutUsFirst />
        <AboutC />
        <EmployeesSlider data={users?.data?.items} />
        <ToTopBtn />
      </>
  )
}

export async function getServerSideProps() {
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
