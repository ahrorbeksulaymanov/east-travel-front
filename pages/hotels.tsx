import SEO from '@/SEO'
import PopularHotelsSlider from '@/components/AllTours/citiesSlider'
import ToTopBtn from '@/components/Buttons/toTop'
import AllHotels from '@/components/Hotels'
import HotelsFirst from '@/components/Hotels/firstBlock'

export default function Hotels() {
  
  return (
      <>
        <SEO />
        <HotelsFirst />
        <AllHotels data={[]} />
        {/* <PopularHotelsSlider /> */}
        <ToTopBtn />
      </>
  )
}
