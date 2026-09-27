import React from "react";
import SectionHeading from "./SectionHeading";
import TestimonialCard from "./TestimonialCard";

const Testimonial = () => {
  return (
    <section className="pb-30">
      <div className="container">
        <SectionHeading heading={"What do they say about us"} />

        <div className="grid grid-cols-3 gap-17.5 pt-8.75">
            <TestimonialCard person={"./person(1).png"} name={"Doris Watson"} watermark={"testimonialWatermark(1).png"} review={"“ Highly recommend this website for quality flowers and plants. Great prices, timely delivery and excellent customer service. ”" }/>
            <TestimonialCard person={"./person(2).png"} name={"Kate Szu"} watermark={"testimonialWatermark(2).png"} review={"“Great service, beautiful flowers, timely delivery. Highly recommend.”" }/>
            <TestimonialCard person={"./person(3).png"} name={"Dyness "} watermark={"testimonialWatermark(3).png"} review={"“I am very happy with my purchase from this website, the plants were healthy and arrived on time.”" }/>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
