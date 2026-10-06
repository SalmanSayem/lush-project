import React from 'react';

const Gallery = () => {
  return (
    <section className="pb-20 md:pb-30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 xs:grid-cols-3 gap-1 md:gap-2.5">
          
          {/* Left Large Card */}
          <div className="xs:row-span-2">
            <img
              className="w-full h-full object-cover rounded-sm"
              src="./gallery(5).png"
              alt="Gallery plant 1"
            />
          </div>

          {/* Middle Top */}
          <div>
            <img
              className="w-full h-48 sm:h-64 md:h-72 object-cover rounded-sm"
              src="./gallery(4).png"
              alt="Gallery plant 2"
            />
          </div>

          {/* Right Top */}
          <div>
            <img
              className="w-full h-48 sm:h-64 md:h-72 object-cover rounded-sm"
              src="./gallery(2).png"
              alt="Gallery plant 3"
            />
          </div>

          {/* Middle Bottom */}
          <div>
            <img
              className="w-full h-48 sm:h-64 md:h-72 object-cover rounded-sm"
              src="./gallery(3).png"
              alt="Gallery plant 4"
            />
          </div>

          {/* Right Bottom */}
          <div>
            <img
              className="w-full h-48 sm:h-64 md:h-72 object-cover rounded-sm"
              src="./gallery(1).png"
              alt="Gallery plant 5"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Gallery;