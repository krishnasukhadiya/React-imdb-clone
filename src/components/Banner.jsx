import React from "react";

function Banner() {
  return (
    <div
      className="h-[20vh] md:h-[80vh] bg-cover bg-center flex items-end"
      style={{
        backgroundImage: `url(https://i0.wp.com/www.heyuguys.com/images/2011/12/The-Avengers-International-Banners-1.jpg?ssl=1)`,
      }}
    >
        <div className="text-white text-xl text-center bg-gray-900/60 w-full p-4">
            Avengers
        </div>
    </div>
  );
}

export default Banner;
