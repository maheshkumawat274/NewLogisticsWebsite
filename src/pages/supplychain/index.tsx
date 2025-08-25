
import HomeAbout from "../../components/home/HomeAbout"
import GlobalAdvantage from "../../components/supplychain/GlobalAdvantage"
import ManagementTeam from "../../components/supplychain/ManagementTeam"
import MissionVisionSection from "../../components/supplychain/MissionVisson"
import SupplyHero from "../../components/supplychain/SupplyHero"


const SupplychainPage = () => {
  return (
    <>
     <div className="mt-14">
      <SupplyHero/>
      <HomeAbout showButton={false} />
      <MissionVisionSection/>
      <ManagementTeam/>
      {/* <SupplyText/>
      <Checklist/>
      <SupplyChainSolutions/>
      <SupplyText2/>
      <SupplyServicesSection/>
      <Commitment/> */}
      <GlobalAdvantage/>
      {/* <PartnerSection/> */}
     </div>
    </>
  )
}

export default SupplychainPage