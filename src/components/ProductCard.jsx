import React from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";

const ProductCard = ({ productImage, ProductName, oldPrice, newPrice, isFavorite }) => {
  return (
    <div className="border border-[rgba(0,0,0,0.03)] rounded-[10px] group overflow-hidden bg-white shadow-sm flex flex-col justify-between">
      {/* Image Container */}
      <div className="relative bg-gray-100 overflow-hidden">
        <img 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
          src={productImage} 
          alt={ProductName} 
        />
        <div className="flex items-center justify-center h-8 w-8 bg-white rounded-full absolute right-3.75 top-3.75 shadow-sm">
          <button className="cursor-pointer group/icon">
            {isFavorite ? (
              <FaHeart className="text-primary text-[14px]" />
            ) : (
              <>
                <FaRegHeart className="text-gray-700 text-[14px] block group-hover/icon:hidden" />
                <FaHeart className="text-primary text-[14px] hidden group-hover/icon:block" />
              </>
            )}
          </button>
        </div>
      </div>

      {/* Info & Action Section */}
      <div className="py-6 px-2.5 flex items-center justify-between">
        <div>
          <h4 className="font-lato font-bold text-primary">{ProductName}</h4>
          <p className="font-lato font-normal text-[12px] text-[#121212] flex gap-1.75 mt-1">
            <span className="line-through">(${oldPrice})</span>
            <span className="font-bold font-lato text-[12px] text-primary">
              (${newPrice})
            </span>
          </p>
        </div>
        <div>
          <button className="group-hover:text-white duration-300 group-hover:bg-primary cursor-pointer px-6 py-2 text-primary font-lato text-[14px] font-black rounded-[3px] border border-primary whitespace-nowrap">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;