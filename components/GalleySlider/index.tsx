import Image from "next/image";
import React from "react";
import Slider from "react-slick";

type Props = {};

const GallerySlider = (props: Props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="px-10 mt-8 slider-container max-w-[1280px] mx-auto">
      <Slider {...settings}>
        {[...Array(6)].map((_, index) => (
          <div key={index} className="px-2">
            <Image
              src={`/gallery/gallery (${index + 1}).webp`}
              width={400}
              height={400}
              alt={`gallery-${index + 1}`}
              className="rounded"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default GallerySlider;
