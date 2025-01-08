import SEO from '@/SEO'
import PopularCitiesSlider from '@/components/AllTours/citiesSlider'
import ToTopBtn from '@/components/Buttons/toTop'
import AllHotels from '@/components/Hotels'
import HotelsFirst from '@/components/Hotels/firstBlock'
import { BASE_URL } from '@/congif/constans'
import { IBasic, ICity, IHotel, IRegion } from '@/models'

export async function getServerSideProps (context: any) {

  const { districtId, regionId } = context.query;

  const citiesResponse = await fetch( `${BASE_URL}/cities` )
  const cities = await citiesResponse.json()

  const regionsResponse = await fetch( `${BASE_URL}/regions` )
  const regions = await regionsResponse.json()


  const hotelsResponse = await fetch(`${BASE_URL}/hotels${regionId ? "?regionId="+regionId : ""}${districtId ? "&districtId="+districtId : ""}`)
  const hotels = await hotelsResponse.json()

  return {
    props: {
      cities,
      hotels,
      regions
    },
  }
}

export default function Hotels({cities, hotels, regions}: {cities: IBasic<ICity[]>, hotels: IBasic<IHotel[]>, regions: {status: number, message: string, data: IRegion[]} }) {
    
  return (
      <>
        <SEO
          title='Hotels'
          description='Select your the best hotel in Uzbekistan'
        />
        <HotelsFirst />
        <AllHotels data={hotels?.data?.items} regions={regions?.data} />
        <PopularCitiesSlider data={cities?.data?.items} />
        <ToTopBtn />
      </>
  )
}
