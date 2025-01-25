import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Circle } from 'lucide-react';
import { champTextImage } from '../constants';

const Workflow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
    beforeChange: (oldIndex, newIndex) => setCurrentIndex(newIndex), // Update index on slide change
  };

  return (
    <div className="mt-20 px-4 sm:px-10">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
        Behold the Champions of
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text"> {" "} Vitalos</span>
      </h2>
      <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center lg:items-stretch gap-8 mt-12 pl-20">
        {/* Left Side: Image Slider */}
        <div className="w-full lg:w-2/5 flex flex-col mb-8 lg:mb-0">
          <Slider {...sliderSettings}>
            {champTextImage.map((item, index) => (
              <div key={index}>
                <img src={item.image} alt={`Slide ${index + 1}`} className="rounded-lg h-full object-cover" />
              </div>
            ))}
          </Slider>
        </div>

        {/* Right Side: Name and Bullet Points */}
        <div className="w-full lg:w-1/2 px-4 flex flex-col justify-center">
          {/* Name with Larger Font */}
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white-800 mb-6">
            {champTextImage[currentIndex].name}
          </h3>

          {/* Bullet Points */}
          {champTextImage[currentIndex].bulletPoints.map((point, index) => (
            <div key={index} className="flex items-center gap-4 mb-6">
              <div className="flex-shrink-0 text-orange-400 bg-neutral-900 h-10 w-10 flex justify-center items-center rounded-full">
                <Circle className="h-6 w-6" />
              </div>
              <p className="text-md text-neutral-500 leading-relaxed">{point}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Workflow;
