import SEO from "@/SEO";
import ToTopBtn from "@/components/Buttons/toTop";
import TourCalculator from "@/components/TourView/calculator";
import TourCalendar from "@/components/TourView/calendar";
import TourViewFirst from "@/components/TourView/firstBlock";
import TourViewSlider from "@/components/TourView/slider";
import TourTab from "@/components/TourView/tabs";
import { BASE_URL } from "@/congif/constans";
import { ITour } from "@/models";
import { useEffect, useState } from "react";

export async function getStaticProps(context: any) {

    const response = await fetch(
      `${BASE_URL}/tours/get-one?slug=${context.params.tour_id}`
    )
    const post = await response.json()
    return {
      props: post,
    }
  }

  export async function getStaticPaths() {
    const res = await fetch(`${BASE_URL}/tours`)
    const posts = await res.json()
    const paths = posts?.data?.items?.map((i: ITour) => ({ params: { tour_id: `${i?.slug}` } }))
    return {
      paths, 
      fallback: true,
    }
  }

export default function TourView(params: {data: ITour, message: string, status: number}) {  

  const [selectedDate, setselectedDate] = useState<string>()
    
  useEffect(() => {
    localStorage.removeItem("phone_is_checked")
  }, [])

  return (
    <>
      <SEO />
      <TourViewFirst title={params?.data?.title} />
      <TourViewSlider data={params?.data} />
      <TourTab data={params?.data} />
      <TourCalendar data={params?.data} setselectedDate={setselectedDate} />
      <TourCalculator data={params?.data} selectedDate={selectedDate} />
      <ToTopBtn />
    </>
  )
}