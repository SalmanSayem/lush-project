import React from "react";

const CTA = () => {
  const styles = {
    background: `url('/ctaBG.png') no-repeat center / cover`,
  };

  return (
    <section 
      style={styles} 
      className="mb-16 md:mb-30 py-12 md:py-32 xl:py-54.5 px-4 sm:px-8 md:px-16 xl:px-25"
    >
      <div className="container mx-auto flex flex-col xl:flex-row items-center justify-between gap-8 xl:gap-12">
        {/* Left Heading */}
        <div className="w-full xl:max-w-2xl text-center xl:text-left">
          <h2 className="font-lato text-2xl xs:text-3xl md:text-[32px] font-bold text-white leading-tight">
            Enter your email address for our mailing Promo or other interesting things
          </h2>
        </div>

        {/* Right Form */}
        <div className="w-full xl:w-auto">
          <form 
            onSubmit={(e) => e.preventDefault()} 
            className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full"
          >
            <input 
              className="bg-[rgba(217,217,217,0.03)] w-full sm:w-80 md:w-96 lg:w-[475px] py-3 px-6.25 border border-white rounded-[5px] placeholder:font-raleway placeholder:font-medium placeholder-[rgba(255,255,255,0.8)] text-white focus:outline-none focus:border-primary transition-colors" 
              type="email" 
              placeholder="Enter your email" 
            />
            <button 
              type="submit"
              className="w-full sm:w-auto font-raleway font-bold text-[16px] bg-primary text-white py-3 cursor-pointer px-11.25 rounded-[5px] hover:opacity-90 transition-opacity whitespace-nowrap"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CTA;