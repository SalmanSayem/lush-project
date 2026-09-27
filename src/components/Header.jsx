const Header = () => {
  return <nav className=" bg-transparent pt-9.25 w-full absolute top-0 left-0">
    <div className="container flex items-center justify-between">
      <div className="logo">
        <a href="#">
          <img src="logo.svg" alt="logo" />
        </a>
      </div>

      <div className="flex items-center gap-16.75 font-lato">
        <ul className="flex items-center gap-12.5 text-[18px] text-white font-medium">
          <li><a href="#">Home</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Planters</a></li>
          <li><a href="#">Contact</a></li>
        </ul>

        <button className=" cursor-pointer text-[16px] text-white font-bold px-12.5 py-2.75 border border-white rounded-[3px]">Call Us</button>
      </div>
    </div>
  </nav>;
};

export default Header;
