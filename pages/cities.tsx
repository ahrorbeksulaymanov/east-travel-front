import SEO from '@/SEO'
import ToTopBtn from '@/components/Buttons/toTop'
import AllCities from '@/components/Cities'
import CitiesFirst from '@/components/Cities/firstBlock'
import { BASE_URL } from '@/congif/constans'
import { IBasic, ICity } from '@/models'


export async function getStaticProps() {
  const response = await fetch(
    `${BASE_URL}/cities`
  )
  const cities = await response.json()
  return {
    props: {
      cities
    },
  }
}

export default function Cities ({cities} : {cities: IBasic<ICity[]>}) {
    
  return (
      <>
        <SEO />
        <CitiesFirst />
        <AllCities data={cities?.data?.items} />
        <ToTopBtn />
      </>
  )
}
