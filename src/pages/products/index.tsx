import MiddleDistillates from "../../components/products/MiddleDistillates"
import ProductsCardSection from "../../components/products/ProductsCardSection"
import ProductsHero from "../../components/products/ProductsHero"
import ProductsSections from "../../components/products/ProductsSections"
import ProductTopText from "../../components/products/ProductsTopText"


const ProductsPage = () => {
  return (
    <>
     <div className="mt-14">
      <ProductsHero/>
      <ProductTopText/>
      <ProductsCardSection/>
      <MiddleDistillates/>
      <ProductsSections/>
     </div>
    </>
  )
}

export default ProductsPage