import React from "react";
import bannerImage from "../assets/hero.jpg";
import play from "../assets/play.svg";

const Hero = () => {
  const styles = {
    background: `url(${bannerImage}) no-repeat center / cover`,
  };

  return (
    <section 
      style={styles} 
      className="pt-28 pb-32 xs:pt-36 xs:pb-44 md:pt-48 md:pb-60 xl:pt-54.5 xl:pb-74.75 flex items-center min-h-screen"
    >
      <div className="container mx-auto px-4">
        {/* Responsive Heading */}
        <h1 className="font-lato font-bold text-3xl xs:text-4xl md:text-5xl xl:text-[64px] text-center text-white leading-tight">
          Beauty Delivered to You
        </h1>

        {/* Responsive Paragraph */}
        <p className="py-5 xs:py-7 xl:py-9.25 max-w-full xs:max-w-[85%] lg:max-w-196.75 font-poppins font-medium text-sm xs:text-base xl:text-[18px] text-white text-center mx-auto">
          Nature's beauty is just a click away with our online flower and plant shop. We offer a wide variety of flowers that will bring a touch of nature to your home!
        </p>

        {/* Responsive Buttons Container */}
        <div className="text-white text-[14px] font-lato gap-3.25 xs:gap-4 flex flex-col xs:flex-row justify-center items-center">
          <button className="w-full xs:w-auto text-center font-bold py-3 px-8 xl:px-12.5 bg-primary cursor-pointer rounded-[3px] hover:opacity-90 transition-opacity">
            Book Now
          </button>
          
          <button className="w-full xs:w-auto justify-center cursor-pointer font-semibold flex items-center gap-2.5 py-2.5 px-6 xl:px-8.75 border border-white rounded-[3px] hover:bg-white/10 transition-colors">
            <img src={play} alt="play icon" />
            Watch Video
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;