const AboutCard = ({title, decription, children}) => {
  return (
    <div className=" shadow-[10px_10px_20px_0px_rgba(0,0,0,0.02)] border border-[rgba(0,0,0,0.03)] pt-5 pl-7.5 pb-14 pr-10.25 duration-300 hover:bg-primary2 group rounded-[10px] cursor-pointer">
      <div className="icon w-31.5 h-31.5 flex items-center justify-center " >
          {children}
      </div>
      <div className="text pl-5 ">
        <h6 className="duration-300 group-hover:text-white pt-2.5 pb-5 leading-[140%] font-lato font-black text-[20px] text-primary">
          {title}
        </h6>
        <p className=" duration-300 group-hover:text-white font-raleway text-[16px] text-[#121212] leading-[150%]">
          {decription}
        </p>
      </div>
    </div>
  );
};

export default AboutCard;
      