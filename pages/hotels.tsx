import SEO from '@/SEO'
import AllTours from '@/components/AllTours'
import AllToursFirst from '@/components/AllTours/firstBlock'
import PopularHotelsSlider from '@/components/AllTours/citiesSlider'
import ToTopBtn from '@/components/Buttons/toTop'

export default function Hotels() {
  
  return (
      <>
        <SEO />
        <AllToursFirst />
        {/* <AllTours /> */}
        <PopularHotelsSlider />
        <ToTopBtn />
      </>
  )
}
