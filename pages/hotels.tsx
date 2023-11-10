import SEO from '@/SEO'
import AllTours from '@/components/AllTours'
import AllToursFirst from '@/components/AllTours/firstBlock'
import PopularHotelsSlider from '@/components/AllTours/citiesSlider'
import ToTopBtn from '@/components/Buttons/toTop'
import Layout from '@/components/Layouts'

export default function Hotels() {
  
  return (
    <Layout>
      <>
        <SEO />
        <AllToursFirst />
        <AllTours />
        <PopularHotelsSlider />
        <ToTopBtn />
      </>
    </Layout>
  )
}
