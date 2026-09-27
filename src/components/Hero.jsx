import bannerImage from "../assets/hero.jpg"
import play from "../assets/play.svg"

const Hero = () => {
    const styles={
        background: `url(${bannerImage}) no-repeat center / cover`,
        paddingTop: "218px",
        paddingBottom: "299px"
    }
  return (
    <section style={styles}>
      <div className="container">
        <h1 className="font-lato font-bold text-[64px] text-center text-white">Beauty Delivered to You</h1>
        <p className="py-9.25 max-w-196.75 font-poppins font-medium text-[18px] text-white text-center mx-auto ">Nature's beauty is just a click away with our online flower and plant shop. We offer a wide variety of flowers that will bring a touch of nature to your home!</p>

        <div className="text-white text-[14px] font-lato gap-3.25 flex justify-center items-center">
          <button className=" font-bold py-3 px-12.5 bg-primary cursor-pointer rounded-[3px]">Book Now</button>
          <button className=" cursor-pointer font-semibold flex items-center gap-2.5 py-2.5 px-8.75 border border-white rounded-[3px]" > <img src={play} alt="" />Watch Video</button>
        </div>
      </div>
    </section>
  )
}

export default Hero
