import SEO from '@/SEO'
import ToTopBtn from '@/components/Buttons/toTop'
import FirstBlock from '@/components/FirstBlock'
import AboutUsBlock from '@/components/aboutUsBlock'
import ContactUsBlock from '@/components/contactUsBlock'
import PerfectCities from '@/components/Cities/perfectCities'
import PhotoGallery from '@/components/photoGallery'
import PopularHotels from '@/components/Hotels/popularHotels'
import PopularTours from '@/components/AllTours/popularTours'
import { BASE_URL } from '@/congif/constans'
import { IBasic, ICity, ITour } from '@/models'


export async function getStaticProps() {

  const tourResponse = await fetch( `${BASE_URL}/tours` )
  const tours = await tourResponse.json()

  const citiesResponse = await fetch( `${BASE_URL}/cities?size=${6}&page=1` )
  const cities = await citiesResponse.json()

  const hotelsResponse = await fetch(`${BASE_URL}/hotels`)
  const hotels = await hotelsResponse.json()

  const galleriesResponse = await fetch(`${BASE_URL}/galleries`)
  const galleries = await galleriesResponse.json()



  return {
    props: {
      tours,
      cities,
      hotels,
      galleries
    },
  }
}


export default function Home({tours, cities, hotels, galleries}: {cities: IBasic<ICity[]>, tours: IBasic<ITour[]>, hotels: any, galleries: any }) {  
  
  console.log("hotels", hotels);
  console.log("galleries", galleries);
  

  return (
      <>
        <SEO />
        <FirstBlock />
        <PopularTours data={tours?.data?.items} />
        <PopularHotels data={hotels?.data?.items} />
        <PerfectCities data={cities?.data?.items} />
        <AboutUsBlock />
        <PhotoGallery />
        <ContactUsBlock />
        <ToTopBtn />
      </>
  )
}
