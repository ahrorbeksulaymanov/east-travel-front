import SEO from '@/SEO'
import ToTopBtn from '@/components/Buttons/toTop'
import FirstBlock from '@/components/FirstBlock'
import Layout from '@/components/Layouts'
import AboutUsBlock from '@/components/aboutUsBlock'
import ContactUsBlock from '@/components/contactUsBlock'
import PerfectCities from '@/components/perfectCities'
import PhotoGallery from '@/components/photoGallery'
import PopularHotels from '@/components/popularHotels'
import PopularTours from '@/components/popularTours'

export default function Home() {
  
  return (
    <Layout>
      <>
        <SEO />
        <FirstBlock />
        <PopularTours />
        <PopularHotels />
        <PerfectCities />
        <AboutUsBlock />
        <PhotoGallery />
        <ContactUsBlock />
        <ToTopBtn />
      </>
    </Layout>
  )
}
