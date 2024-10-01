import React from "react";


import Slider from "react-slick";
import { reviews } from "../../images/dummy_products";

const Reviews = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="my-10">
      <div className="flex justify-between items-center gap-2">
        <hr className="h-[2px] bg-black flex-1" />
        <h2 className="font-robson min-w-min font-bold text-[40px] tracking-wider cursor-pointer">
          What Does People Say about us
        </h2>
        <hr className="h-[2px] bg-black flex-1" />
      </div>
      <Slider {...settings}>
        {reviews.map((review) => (
          <div className="flex items-center gap-4 p-4">
            <div className="flex gap-2">
              <img
                src={review.image}
                alt={review.name}
                className="w-[100px] h-[100px] object-cover "
              />
              <div className="flex flex-col justify-center p-3">
                <h3 className="text-[32px] font-robson font-semibold tracking-wider">
                  {review.name}
                </h3>
                <p className="text-sm font-fredoka uppercase">
                  {review.comment}
                </p>
                <div className="flex justify-between items-center text-gray-500 text-sm mt-2">
                  <p className="text-[20px] font-robson font-semibold tracking-wider">
                    {review.rating}/5
                  </p>
                  <p className="text-[20px] font-robson font-semibold tracking-wider">
                    {review.date}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Reviews;
