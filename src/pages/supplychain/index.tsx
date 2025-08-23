import Checklist from "../../components/supplychain/Checklist"
import Commitment from "../../components/supplychain/Commitment"
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
      <SupplyText/>
      <Checklist/>
      <SupplyChainSolutions/>
      <SupplyText2/>
      <SupplyServicesSection/>
      <Commitment/>
      <PartnerSection/>
     </div>
    </>
  )
}

export default SupplychainPage