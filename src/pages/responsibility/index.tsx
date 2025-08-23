import ResponseHero from "../../components/responsibility/ResponsibilityHero"
import ResponsibilitySections from "../../components/responsibility/ResponsibilitySections"
import ResponsibilityText1 from "../../components/responsibility/ResponsibilityText1"

const ResponsibilityPage = () => {
  return (
    <>
     <div className="mt-14">
      <ResponseHero/>
      <ResponsibilityText1/>
      <ResponsibilitySections/>
     </div>
    </>
  )
}

export default ResponsibilityPage