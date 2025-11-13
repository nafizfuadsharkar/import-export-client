import React, { useState, useEffect } from "react";
import Slider from "../Components/Slider";
import FeatureToys from "../Components/RecentProducts";
import Section1 from "../Components/Section1";
import Section2 from "../Components/Section2";
import Loading from "./Loading";
import AOS from "aos";
import "aos/dist/aos.css";
import DynamicTitle from "../Components/DynamicTitle";
import { useLoaderData } from "react-router";
import RecentProducts from "../Components/RecentProducts";
import HeroSection from "../Components/HeroSection";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const data = useLoaderData();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
      easing: "ease-in-out",
    });
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    AOS.refresh(); // refresh after loading screen disappears
  }, [loading]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="w-full max-w-[1200px] mx-auto px-4 overflow-x-hidden">
      <DynamicTitle title="Home"></DynamicTitle>
      <div data-aos="fade-down">
        <HeroSection></HeroSection>
      </div>
      <div data-aos="fade-up" data-aos-delay="200">
        <RecentProducts data={data} />
      </div>
      <div data-aos="fade-right" data-aos-delay="400">
        <Section1 />
      </div>
      <div data-aos="fade-left" data-aos-delay="600">
        <Section2 />
      </div>
    </div>
  );
};

export default Home;
