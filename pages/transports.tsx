import SEO from '@/SEO'
import ToTopBtn from '@/components/Buttons/toTop'
import AllTransports from '@/components/Transports'
import TransportFirst from '@/components/Transports/firstBlock'
import { BASE_URL } from '@/congif/constans'
import { ITransportType } from '@/models'
import { useState } from 'react'


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


export default function Transports ({transportTypes, transports}: {transportTypes: {message: string, status: number, data: ITransportType[]}, transports: any}) {
  
  const [transportTypeId, settransportTypeId] = useState<number>()

  console.log("transportTypes",transportTypes);
  console.log("transports", transports);
  
  return (
      <>
        <SEO />
        <TransportFirst />
        <AllTransports transportTypes={transportTypes?.data} transports={transports?.data?.items} settransportTypeId={settransportTypeId} />
        <ToTopBtn />
      </>
  )
}
