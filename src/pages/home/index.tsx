import HomeAbout from "../../components/home/HomeAbout"
import HomeCardsSection from "../../components/home/HomeCards"
import { HomeTextScroll } from "../../components/home/HomeTextScroll"
import HomeTopSection from "../../components/home/HomeTopSection"


const HomePage = () => {
  return (
    <>
     <div className='mt-12 pt-10 sm:pt-4 '>
      <HomeTopSection/>
      <div className="py-4 px-4 md:px-10">
        <HomeTextScroll/>
      </div>
      <HomeAbout/>
      <HomeCardsSection/>
     </div>
    </>
  )
}

export default HomePage