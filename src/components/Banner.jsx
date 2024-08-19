import React from "react";
import companyImg from "../assets/companyImg.png";
import { ReactTyped } from "react-typed";

const Banner = () => {
  return (
    <div className="container px-4 mx-auto max-w-screen-2xl xl:px-24">
      <div className="grid grid-cols-1 gap-4 py-16 lg:grid-cols-2">
        <div className="flex flex-col justify-center px-4 item-center lg:items-end">
          <div className="mx-auto text-3xl font-bold md:mx-0 md:text-4xl text-bl">
            Welcome to{" "}
            <ReactTyped
              strings={["SRL"]}
              typeSpeed={110}
              backSpeed={160}
              loop
            />
          </div>
          <p className="py-4 pl-10 text-base font-medium md:text-xl lg:text-right">
            Survay Research Lanka Pvt Ltd is a data science and analytics
            company based in Sri Lanka. They specialize in research projects and
            provide data solutions for industries. Their expertise in data
            science drives informed decision-making and strategic planning,
            making them a key player in research and analytics.
          </p>
          <button className="mx-auto lg:mx-0 px-4 py-2 my-2 w-[150px] text-white font-medium rounded bg-bl">
            Learn More
          </button>
        </div>
        <div className="items-center justify-start hidden pl-10 lg:flex">
          <img
            src={companyImg}
            alt="banner"
            className="object-contain rounded-br-3xl h-44 rounded-tl-3xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
