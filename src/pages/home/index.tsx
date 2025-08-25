import HomeAbout from "../../components/home/HomeAbout"
import { HomeTextScroll } from "../../components/home/HomeTextScroll"
import HomeTopSection from "../../components/home/HomeTopSection"
import Operations from "../../components/home/Operations"
import PresidentMessage from "../../components/home/PresidentMessage"
import WelcomeSection from "../../components/home/WelcomeSection"
import ManagementTeam from "../../components/supplychain/ManagementTeam"


const HomePage = () => {
  return (
    <>
     <div className='mt-12 pt-10 sm:pt-4 '>
      <HomeTopSection/>
      <div className="py-4 px-4 md:px-10">
        <HomeTextScroll/>
      </div>
      <WelcomeSection/>
      <HomeAbout/>
      <PresidentMessage/>
      <Operations/>
      <ManagementTeam/>
      {/* <HomeCardsSection/> */}
     </div>
    </>
  )
}

export default HomePage