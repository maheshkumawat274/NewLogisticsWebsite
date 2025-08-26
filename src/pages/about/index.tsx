
import HomeAbout from "../../components/home/HomeAbout"
import GlobalAdvantage from "../../components/about/GlobalAdvantage"
import ManagementTeam from "../../components/about/ManagementTeam"
import MissionVisionSection from "../../components/about/MissionVisson"
import SupplyHero from "../../components/about/SupplyHero"


const SupplychainPage = () => {
  return (
    <>
     <div className="mt-14">
      <SupplyHero/>
      <HomeAbout showButton={false} />
      <MissionVisionSection/>
      <ManagementTeam/>
      
      <GlobalAdvantage/>
     </div>
    </>
  )
}

export default SupplychainPage