import SEO from '@/SEO'
import ToTopBtn from '@/components/Buttons/toTop'
import AllCities from '@/components/Cities'
import CitiesFirst from '@/components/Cities/firstBlock'
import { BASE_URL } from '@/congif/constans'


export async function getStaticProps({ params } : {params: any}) {
  const response = await fetch(
    `${BASE_URL}/cities`
  )
  const tours = await response.json()
  return {
    props: tours,
  }
}

export default function Cities (params: any) {
  
  console.log("cities", params?.data?.items);
  
  return (
      <>
        <SEO />
        <CitiesFirst />
        <AllCities data={params?.data?.items} />
        <ToTopBtn />
      </>
  )
}
