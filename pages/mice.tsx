import SEO from '@/SEO'
import ToTopBtn from '@/components/Buttons/toTop'
import AllMice from '@/components/Mice'
import MiceFirst from '@/components/Mice/firstBlock'
import { BASE_URL } from '@/congif/constans'
import { IBasic, IMice } from '@/models'

export async function getStaticProps() {

  const miceResponse = await fetch( `${BASE_URL}/mice` )
  const mice = await miceResponse.json()

  return {
    props: {
      mice,
    },
  }
}

export default function Mice ({mice}: {mice: IBasic<IMice[]>}) {
  
  return (
      <>
        <SEO />
        <MiceFirst />
        <AllMice data={mice?.data?.items} />
        <ToTopBtn />
      </>
  )
}
