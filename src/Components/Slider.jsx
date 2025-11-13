import React from "react";
import slideImg1 from "../assets/img19.jpg";
import slideImg2 from "../assets/img20.jpg";
import slideImg3 from "../assets/img21.jpg";
import slideImg4 from "../assets/img22.jpg";

const Slider = () => {
  const slides = [
    {
      id: 1,
      img: slideImg1,
      title: "Discover Endless Creativity",
      desc: "Explore amazing design ideas and elevate your imagination.",
    },
    {
      id: 2,
      img: slideImg2,
      title: "Innovate with Technology",
      desc: "Empower your future with smart and modern tech solutions.",
    },
    {
      id: 3,
      img: slideImg3,
      title: "Build Your Vision",
      desc: "We help turn your ideas into a beautiful digital reality.",
    },
    {
      id: 4,
      img: slideImg4,
      title: "Inspire & Grow",
      desc: "Unlock your potential with inspiration that drives change.",
    },
  ];

  return (
    <div className="carousel w-full mx-auto  shadow-2xl overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          id={`slide${slide.id}`}
          className="carousel-item relative w-full"
        >
          <img
            src={slide.img}
            className="w-full h-[500px] object-cover"
            alt={slide.title}
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30"></div>

          <div className="absolute flex flex-col justify-center h-full pl-10 md:pl-20 text-white space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold">{slide.title}</h2>
            <p className="max-w-lg text-sm md:text-lg">{slide.desc}</p>
            <button className="btn btn-primary w-fit mt-3">Learn More</button>
          </div>

          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a
              href={`#slide${
                slides[index - 1]?.id || slides[slides.length - 1].id
              }`}
              className="btn btn-circle bg-black/50 border-none hover:bg-black/70"
            >
              ❮
            </a>
            <a
              href={`#slide${slides[index + 1]?.id || slides[0].id}`}
              className="btn btn-circle bg-black/50 border-none hover:bg-black/70"
            >
              ❯
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Slider;
