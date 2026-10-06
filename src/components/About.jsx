import SectionHeadingF from "./SectionHeadingF";
import AboutCard from "./AboutCard";
import { IndorePlantIcon, OutdoorPlantIcon, BanbooIcon } from "./icon";

const About = () => {
  return (
    <section className="py-30">
      <div className="container">
        <div className="flex flex-col xs:flex-row items-center gap-18 pb-22.5">
          <SectionHeadingF
            heading={"We Help choose the most suitable plants for you"}
          />
          <p className=" capitalize max-w-165 font-raleway font-medium text-[18px] leading-normal">
            Our selection includes a wide variety of flowers, from classic roses
            to exotic orchids, as well as a variety of lush indoor and outdoor
            plants and also offer unique floral arrangements that are perfect
            for any occasion, whether you're looking to brighten up your home or
            send a thoughtful gift.{" "}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-20">
          <AboutCard
            title="Indoor Plants"
            decription={
              "Bring the beauty of nature to your outdoor spaces with our wide selection of outdoor plants"
            }
          >
            <IndorePlantIcon />
          </AboutCard>
          <AboutCard
            title="Indoor Plants"
            decription={
              "Bring the beauty of nature to your outdoor spaces with our wide selection of outdoor plants"
            }
          >
            <OutdoorPlantIcon />
          </AboutCard>
          <AboutCard
            title="Indoor Plants"
            decription={
              "Bring the beauty of nature to your outdoor spaces with our wide selection of outdoor plants"
            }
          >
            <BanbooIcon />
          </AboutCard>
        </div>
      </div>
    </section>
  );
};

export default About;
