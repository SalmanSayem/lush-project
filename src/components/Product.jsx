import productImage1 from "../assets/product1.png"
import productImage2 from "../assets/product2.jpg"
import productImage3 from "../assets/product3.jpg"
import productImage4 from "../assets/product4.jpg"
import productImage5 from "../assets/product5.jpg"
import productImage6 from "../assets/product6.jpg"
import productImage7 from "../assets/product7.jpg"
import productImage8 from "../assets/product8.jpg"
import ProductCard from "./ProductCard"
import SectionHeading from "./SectionHeading"

const Product = () => {
  return (
    <section className="pb-30">
        <div className="container">
            <SectionHeading heading={"What we offer to you"} />

            <div className="grid grid-cols-4 gap-6.75 pt-8.75">
                <ProductCard ProductName={"Cactus Plant"} oldPrice={"10"} newPrice={"8"} productImage={productImage1} />
                <ProductCard ProductName={"Cactus Plant"} oldPrice={"10"} newPrice={"8"} productImage={productImage2} />
                <ProductCard ProductName={"Cactus Plant"} oldPrice={"10"} newPrice={"8"} productImage={productImage3} />
                <ProductCard ProductName={"Cactus Plant"} oldPrice={"10"} newPrice={"8"} productImage={productImage4} />
                <ProductCard ProductName={"Cactus Plant"} oldPrice={"10"} newPrice={"8"} productImage={productImage5} />
                <ProductCard ProductName={"Cactus Plant"} oldPrice={"10"} newPrice={"8"} productImage={productImage6} />
                <ProductCard ProductName={"Cactus Plant"} oldPrice={"10"} newPrice={"8"} productImage={productImage7} />
                <ProductCard ProductName={"Cactus Plant"} oldPrice={"10"} newPrice={"8"} productImage={productImage8} />
            </div>
        </div>
    </section>
  )
}

export default Product
