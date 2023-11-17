import SEO from "@/SEO";
import ToTopBtn from "@/components/Buttons/toTop";
import TourCalculator from "@/components/TourView/calculator";
import TourCalendar from "@/components/TourView/calendar";
import TourViewFirst from "@/components/TourView/firstBlock";
import TourViewSlider from "@/components/TourView/slider";
import TourTab from "@/components/TourView/tabs";
import { BASE_URL } from "@/congif/constans";

export async function getStaticProps(context: any) {

    const response = await fetch(
      `${BASE_URL}/tours/${context.params.tour_id}`
    )
    const post = await response.json()
    return {
      props: post,
    }
  }

  export async function getStaticPaths() {
    const res = await fetch(`${BASE_URL}/tours`)
    const posts = await res.json()
    const paths = posts?.data?.items?.map((i: any) => ({ params: { tour_id: `${i?.slug}` } }))
    return {
      paths, 
      fallback: true,
    }
  }
  

export default function TourView(params: any) {    
    
    return (
        <>
            <SEO />
            <TourViewFirst title={params?.data?.title} />
            <TourViewSlider data={params?.data} />
            <TourTab data={params?.data} />
            <TourCalendar data={params?.data} />
            <TourCalculator data={params?.data} />
            <ToTopBtn />
        </>
    )
}