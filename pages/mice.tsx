import SEO from '@/SEO'
import ToTopBtn from '@/components/Buttons/toTop'
import AllMice from '@/components/Mice'
import MiceFirst from '@/components/Mice/firstBlock'
import { BASE_URL } from '@/congif/constans'


export async function getStaticProps({ params } : {params: any}) {
  const response = await fetch(
    `${BASE_URL}/mice`
  )
  const tours = await response.json()
  return {
    props: tours,
  }
}

export default function Mice (params: any) {

  console.log("mice", params);

  return (
      <>
        <SEO />
        <MiceFirst />
        <AllMice data={params?.data?.items} />
        <ToTopBtn />
      </>
  )
}
