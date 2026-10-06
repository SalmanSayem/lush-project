import benefitImg1 from '../assets/benefit(1).png';
import benefitImg2 from '../assets/benefit(2).png';
import benefitImg3 from '../assets/benefit(3).png';
import benefitImg4 from '../assets/benefit(4).png';

import BenefitCard from "./BenefitCard"

const Benefit = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 pb-30">
        <div className="benefitBanner">

        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <BenefitCard benefitImg={benefitImg1}  heading={"Quality Product"} description={"Our flowers are of the highest quality, carefully selected and sourced from reputable"  }/>
          <BenefitCard benefitImg={benefitImg2}  heading={"Always Fresh"} description={"Our flowers are always fresh, handpicked and delivered promptly for maximum longevity and enjoyment."  }/>
          <BenefitCard benefitImg={benefitImg4}  heading={"Work Smart"} description={"We work smart, using innovative techniques and technology to streamline our processes"  }/>
          <BenefitCard benefitImg={benefitImg3}  heading={"Excelent Service"} description={"We pride ourselves on providing excellent service, going above and beyond to meet our customers' needs"  }/>
        </div>
    </section>
  )
}

export default Benefit
