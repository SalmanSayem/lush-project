import { FaRegHeart, FaHeart } from "react-icons/fa";

const ProductCard = ({ productImage, ProductName, oldPrice, newPrice }) => {
  return (
    <div className="border border-[rgba(0,0,0,0.03)] rounded-[10px] group overflow-hidden">
      <div className="relative">
        <img className="w-full" src={productImage} alt="product image" />
        <div className=" flex items-center justify-center h-8 w-8 bg-white rounded-[50%] absolute right-3.75 top-3.75">
          <button className="cursor-pointer group/icon">
            <FaRegHeart className="text-gray-700 text-[14px] block group-hover/icon:hidden" />
            <FaHeart className="text-primary text-[14px] hidden group-hover/icon:block" />
          </button>
        </div>
      </div>
      <div className="py-6 px-2.5 flex items-center gap-11.25">
        <div>
          <h4 className="font-lato font-bold text-primary">{ProductName}</h4>
          <p className="font-lato font-normal text-[12px] text-[#121212] flex gap-1.75">
            <span className="line-through">(${oldPrice}) </span>
            <span className="line-none font-bold font-lato text-[12px] text-primary">
              (${newPrice})
            </span>
          </p>
        </div>
        <div>
          <button className=" group-hover:text-white duration-300 group-hover:bg-primary cursor-pointer px-6 py-2 text-primary font-lato text-[14px] font-black rounded-[3px] border border-primary">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
