import { MdDateRange } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";


const BlogCard = ({image, heading, decription, date}) => {
  return (
    <div>
      <img className="w-full" src={image} alt="" />
      <h4 className="font-lato font-black text-[20px] text-primary leading-[1.4] pt-3.5 pb-1.25">
        {heading}
      </h4>
      <p>
        {decription}
      </p>

      <div className="flex justify-between items-center pt-2.5">
        <div>
          <div className="flex gap-1.25 text-[rgba(18,18,18,0.8)]">
            <span className="size-6 flex items-center justify-center text-[18px]">
              <MdDateRange />
            </span>
            <span className="text-[16px] opacity-80">{date}</span>
          </div>
        </div>
        <div>
            <a href="#" className="flex items-center gap-1.25 text-primary font-lato font-black">Read More<FaArrowRight /></a>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
