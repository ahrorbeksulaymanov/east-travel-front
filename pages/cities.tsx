import SEO from '@/SEO'
import ToTopBtn from '@/components/Buttons/toTop'
import AllCities from '@/components/Cities'
import CitiesFirst from '@/components/Cities/firstBlock'

export default function Cities () {
  
  return (
      <>
        <SEO />
        <CitiesFirst />
        <AllCities />
        <ToTopBtn />
      </>
  )
}
