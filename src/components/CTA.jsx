const CTA = () => {
  const styles = {
    background: `url('/ctaBG.png') no-repeat center / cover`,
  };

  return (
    <section style={styles} className="mb-30 py-20 md:py-54.5 px-5 md:px-25">
      <div className="flex flex-col xl:flex-row gap-6">
        <div>
            <h1 className="font-lato text-[32px] font-bold text-white">Enter your email address for our mailing Promo or other interesting things</h1>
        </div>
        <div>
            <form action="" className="flex  items-center gap-6 md:pt-6 ">
                <input className=" bg-[rgba(217,217,217,0.03)] w-118.75 py-3 px-6.25 border border-white rounded-[5px] placeholder:font-raleway placeholder:font-medium placeholder-[rgba(255,255,255,0.8)] text-white" type="text" placeholder="Enter your email" />
                <button className=" font-raleway font-bold text-[16px] bg-primary text-white py-3 cursor-pointer px-11.25 rounded-[5px]">Submit</button>
            </form>
        </div>
      </div>
    </section>
  );
};

export default CTA;