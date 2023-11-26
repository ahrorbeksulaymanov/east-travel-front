import SEO from '@/SEO'
import AllTours from '@/components/AllTours'
import AllToursFirst from '@/components/AllTours/firstBlock'
import PopularHotelsSlider from '@/components/AllTours/citiesSlider'
import ToTopBtn from '@/components/Buttons/toTop'
import { BASE_URL } from '@/congif/constans'


export async function getStaticProps({ params } : {params: any}) {

  const response = await fetch(
    `${BASE_URL}/tours`
  )
  const tours = await response.json()

  const citiesResponse = await fetch(
    `${BASE_URL}/cities`
  )
  const cities = await citiesResponse.json()

  return {
    props: {
      tours,
      cities
    },
  }
}

export default function Tours({tours, cities}: any) {    
  
  return (
      <>
        <SEO />
        <AllToursFirst />
        <AllTours data={tours?.data?.items} />
        <PopularHotelsSlider data={cities?.data?.items} />
        <ToTopBtn />
      </>
  )
}
