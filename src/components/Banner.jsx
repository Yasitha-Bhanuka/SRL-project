import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { ReactTyped } from "react-typed";
const Banner = () => {
  return (
    <div className="min-h-screen section-container">
      <div className="flex flex-col items-center justify-between gap-8 px-4 pt-40 md:pt-48 sm:pt-44">
        {/*Top */}
        <div className="mx-auto md:w-3/4 md:space-y-7 sm:space-x-3 ">
          <h1 className="text-3xl font-bold leading-snug text-center sm:text-4xl md:text-5xl md:leading-snug text-bl">
            Welcome to{" "}
            <ReactTyped
              className="text-white"
              strings={["SRL"]}
              typeSpeed={110}
              backSpeed={160}
              loop
            />
          </h1>
          <p className="my-8 text-xl text-justify text-white md:text-3xl sm:text-2xl">
            "Survay Research Lanka Pvt Ltd is a data science and analytics
            company based in Sri Lanka. They specialize in research projects and
            provide data solutions for industries. Their expertise in data
            science drives informed decision-making and strategic planning,
            making them a key player in research and analytics"
          </p>
        </div>

        {/* Button */}
        <div className="flex flex-col items-center justify-center px-4 md:w-1/2 space-y-7">
          <button className="px-6 py-3 font-bold text-white rounded-full bg-bl ">
            <Link to={"/channelview"}>Channel Streaming</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
