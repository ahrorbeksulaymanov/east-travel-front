import SEO from '@/SEO'
import ToTopBtn from '@/components/Buttons/toTop'
import Layout from '@/components/Layouts'
import AllCities from '@/components/Cities'
import CitiesFirst from '@/components/Cities/firstBlock'

export default function Cities () {
  
  return (
    <Layout>
      <>
        <SEO />
        <CitiesFirst />
        <AllCities />
        <ToTopBtn />
      </>
    </Layout>
  )
}
