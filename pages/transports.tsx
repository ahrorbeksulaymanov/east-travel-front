import SEO from '@/SEO'
import ToTopBtn from '@/components/Buttons/toTop'
import AllTransports from '@/components/Transports'
import TransportFirst from '@/components/Transports/firstBlock'
import { BASE_URL } from '@/congif/constans'


export async function getStaticProps({ params } : {params: any}) {

  const transportTypeResponse = await fetch( `${BASE_URL}/transport-types` )
  const transportTypes = await transportTypeResponse.json()

  const transportsResponse = await fetch( `${BASE_URL}/transports` )
  const transports = await transportsResponse.json()

  return {
    props: {
      transportTypes,
      transports,
    },
  }
}


export default function Transports ({transportTypes, transports}: any) {
  
  console.log("transportTypes, transports",transportTypes?.data, transports);
  
  return (
      <>
        <SEO />
        <TransportFirst />
        <AllTransports transportTypes={transportTypes?.data} transports={transports?.data?.items} />
        <ToTopBtn />
      </>
  )
}
