import SEO from '@/SEO'
import AllTours from '@/components/AllTours'
import AllToursFirst from '@/components/AllTours/firstBlock'
import PopularHotelsSlider from '@/components/AllTours/citiesSlider'
import ToTopBtn from '@/components/Buttons/toTop'
import { BASE_URL } from '@/congif/constans'
import { IBasic, ICity, ITour } from '@/models'


export async function getStaticProps() {

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

export default function Tours({tours, cities}: {tours: IBasic<ITour[]>, cities: IBasic<ICity[]>}) {    
  
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
