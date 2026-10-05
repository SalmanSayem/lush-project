import React from "react";
import productImage1 from "../assets/product1.png";
import productImage2 from "../assets/product2.jpg";
import productImage3 from "../assets/product3.jpg";
import productImage4 from "../assets/product4.jpg";
import productImage5 from "../assets/product5.jpg";
import productImage6 from "../assets/product6.jpg";
import productImage7 from "../assets/product7.jpg";
import productImage8 from "../assets/product8.jpg";

import ProductCard from "./ProductCard";
import SectionHeading from "./SectionHeading";

// Array data set
const productsData = [
  {
    id: 1,
    ProductName: "Cactus Plant",
    oldPrice: "10",
    newPrice: "8",
    productImage: productImage1,
    isFavorite: true,
  },
  {
    id: 2,
    ProductName: "Cactus Plant",
    oldPrice: "10",
    newPrice: "8",
    productImage: productImage2,
    isFavorite: false,
  },
  {
    id: 3,
    ProductName: "Cactus Plant",
    oldPrice: "10",
    newPrice: "8",
    productImage: productImage3,
    isFavorite: false,
  },
  {
    id: 4,
    ProductName: "Cactus Plant",
    oldPrice: "10",
    newPrice: "8",
    productImage: productImage4,
    isFavorite: false,
  },
  {
    id: 5,
    ProductName: "Cactus Plant",
    oldPrice: "10",
    newPrice: "8",
    productImage: productImage5,
    isFavorite: false,
  },
  {
    id: 6,
    ProductName: "Cactus Plant",
    oldPrice: "10",
    newPrice: "8",
    productImage: productImage6,
    isFavorite: false,
  },
  {
    id: 7,
    ProductName: "Cactus Plant",
    oldPrice: "10",
    newPrice: "8",
    productImage: productImage7,
    isFavorite: false,
  },
  {
    id: 8,
    ProductName: "Cactus Plant",
    oldPrice: "10",
    newPrice: "8",
    productImage: productImage8,
    isFavorite: false,
  },
];

const Product = () => {
  return (
    <section className="pb-30">
      <div className="container mx-auto px-4">
        <SectionHeading heading={"What we offer to you"} />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6.75 pt-8.75">
          {productsData.map((item) => (
            <ProductCard
              key={item.id}
              ProductName={item.ProductName}
              oldPrice={item.oldPrice}
              newPrice={item.newPrice}
              productImage={item.productImage}
              isFavorite={item.isFavorite}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Product;