import SEO from '@/SEO'
import ToTopBtn from '@/components/Buttons/toTop'
import FirstBlock from '@/components/FirstBlock'
import AboutUsBlock from '@/components/aboutUsBlock'
import ContactUsBlock from '@/components/contactUsBlock'
import Footer from '@/components/footer'
import PerfectCities from '@/components/perfectCities'
import PhotoGallery from '@/components/photoGallery'
import PopularHotels from '@/components/popularHotels'
import PopularTours from '@/components/popularTours'

export default function Home() {
  
  return (
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
      <Footer />
    </>
  )
}
