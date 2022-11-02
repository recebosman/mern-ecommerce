import React, { useState } from "react";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const Images = [
    {
      url: "https://cdn.shopify.com/s/files/1/0421/6153/7180/files/Home-default-1510-4.png?v=1614316605",
    },
    {
      url: "https://cdn.shopify.com/s/files/1/0421/6153/7180/files/Home-default-1510-3.png?v=1614316604",
    },
  ];

  const onPrev = () => {
    setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : Images.length - 1);
  };
  const onNext = () => {
    setCurrentSlide(currentSlide < Images.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div className="relative ">
      <img
        src={Images[currentSlide].url}
        alt="hero"
        className="h-[850px] object-cover"
      />
      <div className="text-4xl absolute font-fOxygen top-[300px] left-[80px] md:left-[20px]  ">
        {currentSlide === 0 ? (
          <h1 className="sm:text-xl">
            <span className="text-2xl font-bold">The Best</span>
            <br />
            <span className="text-5xl font-bold">
              Black <span className="text-black">Combine </span>
            </span>
          </h1>
        ) : (
          <h1>
            <span className="text-2xl font-bold">The Best</span>
            <br />
            <span className="text-5xl font-bold">White Combine </span>
          </h1>
        )}

        {/* <h1>
         */}
      </div>
      <i
        onClick={onPrev}
        className="ri-arrow-right-s-line text-4xl absolute bottom-5 left-[20px]"
      ></i>
      <h2 className="text-3xl absolute bottom-5 left-[60px]">
        0{currentSlide + 1} <span>/ 02</span>
      </h2>
      <i
        onClick={onNext}
        className="ri-arrow-left-s-line text-4xl left-[160px] absolute bottom-5"
      ></i>
    </div>
  );
};

export default Hero;
