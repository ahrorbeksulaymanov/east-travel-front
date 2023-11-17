import SEO from '@/SEO'
import AllTours from '@/components/AllTours'
import AllToursFirst from '@/components/AllTours/firstBlock'
import PopularHotelsSlider from '@/components/AllTours/citiesSlider'
import ToTopBtn from '@/components/Buttons/toTop'
import { BASE_URL } from '@/congif/constans'


export async function getStaticProps({ params } : {params: any}) {
  const response = await fetch(
    `${BASE_URL}/tours`
  )
  const tours = await response.json()
  return {
    props: tours,
  }
}

export default function Tours(params: any) {  
  
  return (
      <>
        <SEO />
        <AllToursFirst />
        <AllTours data={params?.data?.items} />
        <PopularHotelsSlider />
        <ToTopBtn />
      </>
  )
}
