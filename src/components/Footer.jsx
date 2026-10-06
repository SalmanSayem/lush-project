import { LuFacebook } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa";
import { LuTwitter } from "react-icons/lu";

const Footer = () => {
  return (
    <section className="">
      <div className=" overflow-hidden relative pt-18.75 pb-16 bg-primary">
        <h4 className="font-lato font-bold text-white text-[32px] text-center">
          Feel free to contact us
        </h4>
        <div className="flex justify-center py-8.75 gap-18">
          <a
            className=" flex items-center justify-center rounded-[50%] text-white text-[28px] w-14.25 h-14.25 border border-white"
            href="#"
          >
            <FaInstagram />
          </a>
          <a
            className=" flex items-center justify-center rounded-[50%] text-white text-[28px] w-14.25 h-14.25 border border-white"
            href="#"
          >
            <LuFacebook />
          </a>
          <a
            className=" flex items-center justify-center rounded-[50%] text-white text-[28px] w-14.25 h-14.25 border border-white"
            href="#"
          >
            <LuTwitter />
          </a>
        </div>
        <div>
          <ul className="text-white font-bold text-[16px] flex flex-col md:flex-row items-center justify-center gap-7 md:gap-15">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Plants</a>
            </li>
            <li>
              <a href="#">Delivery</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
        <img
          className=" pointer-events-none absolute -bottom-9 left-0"
          src="footerbg(1).png"
          alt=""
        />
        <img
          className=" pointer-events-none absolute  -bottom-9 right-0"
          src="footerbg(2).png"
          alt=""
        />
      </div>
      <div className="bg-black py-2 z-10">
        <p className="font-bold font-raleway text-[12px]  md:text-[16px] text-white text-center">
          Copyright © 2024 Lush. All rights reserved. Dennis Nzioki DNX{" "}
        </p>
      </div>
    </section>
  );
};

export default Footer;
