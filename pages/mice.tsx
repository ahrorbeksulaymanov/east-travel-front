import SEO from '@/SEO'
import ToTopBtn from '@/components/Buttons/toTop'
import Layout from '@/components/Layouts'
import AllMice from '@/components/Mice'
import MiceFirst from '@/components/Mice/firstBlock'

export default function Cities () {
  
  return (
    <Layout>
      <>
        <SEO />
        <MiceFirst />
        <AllMice />
        <ToTopBtn />
      </>
    </Layout>
  )
}
