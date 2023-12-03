import SEO from '@/SEO'
import PopularCitiesSlider from '@/components/AllTours/citiesSlider'
import ToTopBtn from '@/components/Buttons/toTop'
import AllHotels from '@/components/Hotels'
import HotelsFirst from '@/components/Hotels/firstBlock'
import { BASE_URL } from '@/congif/constans'
import { IBasic, ICity, IHotel } from '@/models'

export async function getServerSideProps (context: any) {

  const { districtId, regionId } = context.query;

  const citiesResponse = await fetch( `${BASE_URL}/cities` )
  const cities = await citiesResponse.json()

  const hotelsResponse = await fetch(`${BASE_URL}/hotels${regionId ? "?regionId="+regionId : ""}${districtId ? "&districtId="+districtId : ""}`)
  const hotels = await hotelsResponse.json()

  return {
    props: {
      cities,
      hotels,
    },
  }
}

export default function Hotels({cities, hotels}: {cities: IBasic<ICity[]>, hotels: IBasic<IHotel[]> }) {
  
  return (
      <>
        <SEO />
        <HotelsFirst />
        <AllHotels data={hotels?.data?.items} />
        <PopularCitiesSlider data={cities?.data?.items} />
        <ToTopBtn />
      </>
  )
}
