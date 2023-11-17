import SEO from '@/SEO'
import ToTopBtn from '@/components/Buttons/toTop'
import FirstBlock from '@/components/FirstBlock'
import AboutUsBlock from '@/components/aboutUsBlock'
import ContactUsBlock from '@/components/contactUsBlock'
import PerfectCities from '@/components/perfectCities'
import PhotoGallery from '@/components/photoGallery'
import PopularHotels from '@/components/popularHotels'
import PopularTours from '@/components/popularTours'
import { BASE_URL } from '@/congif/constans'


export async function getStaticProps({ params } : {params: any}) {
  // fetch single post detail
  const tourResponse = await fetch(
    `${BASE_URL}/tours`
  )
  const tours = await tourResponse.json()
  return {
    props: {
      tours
    },
  }
}


export default function Home({tours}: any) {  
  
  return (
      <>
        <SEO />
        <FirstBlock />
        <PopularTours data={tours?.data?.items} />
        <PopularHotels />
        <PerfectCities />
        <AboutUsBlock />
        <PhotoGallery />
        <ContactUsBlock />
        <ToTopBtn />
      </>
  )
}
