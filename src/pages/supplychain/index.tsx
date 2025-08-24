import Checklist from "../../components/supplychain/Checklist"
import Commitment from "../../components/supplychain/Commitment"
import GlobalAdvantage from "../../components/supplychain/GlobalAdvantage"
import ManagementTeam from "../../components/supplychain/ManagementTeam"
import MissionVisionSection from "../../components/supplychain/MissionVisson"
import PartnerSection from "../../components/supplychain/PartnerShip"
import SupplyChainSolutions from "../../components/supplychain/SupplyChainSolutions"
import SupplyHero from "../../components/supplychain/SupplyHero"
import SupplyServicesSection from "../../components/supplychain/SupplyServicesSection"
import SupplyText from "../../components/supplychain/SupplyText"
import SupplyText2 from "../../components/supplychain/SupplyText2"


const SupplychainPage = () => {
  return (
    <>
     <div className="mt-14">
      <SupplyHero/>
      <MissionVisionSection/>
      <ManagementTeam/>
      
      <SupplyText/>
      <Checklist/>
      <SupplyChainSolutions/>
      <SupplyText2/>
      <SupplyServicesSection/>
      <Commitment/>
      <GlobalAdvantage/>
      <PartnerSection/>
     </div>
    </>
  )
}

export default SupplychainPage