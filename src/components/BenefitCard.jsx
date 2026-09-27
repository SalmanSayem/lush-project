

const BenefitCard = ({benefitImg, heading, description }) => {
  return (
    <div className="pt-13.5 pl-13 pb-19.25 pr-12.25">
      <img src={benefitImg} alt="" />
      <div className="pl-4">
        <h4 className="pt-2.5 pb-3 font-lato font-black text-[20px] text-primary leading-[1.4]">{heading}</h4>
        <p className="font-raleway font-medium text-[16px] leading-normal">
          {description}
        </p>
      </div>
    </div>
  );
};

export default BenefitCard;
