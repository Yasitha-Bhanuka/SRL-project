import React from "react";
import { useState } from "react";
import { ReactTyped } from "react-typed";
import Channels from "../Channels/Channels";

const Banner = () => {
  const [showChannels, setShowChannels] = useState(false);

  const handleButtonClick = () => {
    setShowChannels(!showChannels);
  };

  return (
    <div className="section-container">
      <div className="flex flex-col items-center justify-between gap-8 px-4 pt-48">
        {/*Top */}
        <div className="mx-auto text-4xl font-bold leading-snug md:w-3/4 space-y-7 md:leading-snug md:text-5xl text-bl">
          Welcome to{" "}
          <ReactTyped
            className="text-white"
            strings={["SRL"]}
            typeSpeed={110}
            backSpeed={160}
            loop
          />
          <p className="my-8 text-xl font-medium text-justify text-white">
            "Survay Research Lanka Pvt Ltd is a data science and analytics
            company based in Sri Lanka. They specialize in research projects and
            provide data solutions for industries. Their expertise in data
            science drives informed decision-making and strategic planning,
            making them a key player in research and analytics"
          </p>
        </div>

        {/* Button */}
        <div className="flex flex-col items-center justify-center px-4 md:w-1/2 space-y-7">
          <button
            className="px-6 py-3 font-bold text-white rounded-full bg-bl"
            onClick={handleButtonClick}
          >
            Channel Streaming
          </button>
          <div>{showChannels && <Channels />}</div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
