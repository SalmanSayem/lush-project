import React from "react";

const TestimonialCard = ({person, name, review, watermark}) => {
  return (
    <div className="pt-10 pl-11 pb-18.5 pr-18.25 bg-[#F8F8F8] rounded-[10px] relative">
      <div className="flex items-center gap-5 z-10">
        <img src={person} alt="" />
        <h4 className="font-lato text-[20px] font-black text-primary leading-[1.4]">
          {name}
        </h4>
      </div>
      <div>
        <p className=" z-10 font-raleway font-medium text-[16px] leading-normal text-[rgba(18,18,18,0.80)] pt-7.75">
            {review}
        </p>
      </div>
      <img className=" absolute  bottom-0 right-0 " src={watermark} alt="" />
    </div>
  );
};

export default TestimonialCard;
