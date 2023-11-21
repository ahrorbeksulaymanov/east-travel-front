import SEO from '@/SEO'
import ToTopBtn from '@/components/Buttons/toTop'
import AllMice from '@/components/Mice'
import AllTransports from '@/components/Transports'
import TransportFirst from '@/components/Transports/firstBlock'

export default function Cities () {
  
  return (
      <>
        <SEO />
        <TransportFirst />
        <AllTransports />
        <ToTopBtn />
      </>
  )
}
