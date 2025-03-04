import React from "react";
import SpotlightCard from "../blocks/Components/SpotlightCard/SpotlightCard";

export default function Services() {
  return (
    <>
      <br />
      <br />
      <br />
      <h1 className="text-3xl  text-center sm:text-5xl text-white font-bold md:text-[40px]">
        Our <span className="text-[#5e4bf5]">Services</span>
      </h1>
      {/* <div className="w-[80%] m-auto flex justify-center gap-10">
        <SpotlightCard
          className="custom-spotlight-card h-[300px] w-[32rem] text-white"
          spotlightColor="rgba(0, 229, 255, 0.2)"
        ></SpotlightCard>
        <SpotlightCard
          className="custom-spotlight-card h-[300px] w-[32rem] text-white"
          spotlightColor="rgba(0, 229, 255, 0.2)"
        ></SpotlightCard>
        <SpotlightCard
          className="custom-spotlight-card h-[300px] w-[32rem] text-white"
          spotlightColor="rgba(0, 229, 255, 0.2)"
        ></SpotlightCard>
        <SpotlightCard
          className="custom-spotlight-card h-[300px] w-[32rem] text-white"
          spotlightColor="rgba(0, 229, 255, 0.2)"
        ></SpotlightCard>
      </div> */}
      <br />
      <br />

      {/* Cards in 2x2 grid */}
      <center>
        <div className="w-[80%]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-[23px] h-[200px] border border-[rgba(54,55,73,0.43)] text-white flex gap-8 items-center bg-gradient-to-r from-[#04071D] to-[#0C0E23]">
              <img
                src="/webDevelopment.webp"
                className=" w-[150px] mr-4"
                alt="Mobile Development"
              />
              <div className="text-left">
                <h1 className="text-lg font-semibold">DASDASD</h1>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reiciendis, alias!
                </p>
              </div>
            </div>

            <div className="p-6 rounded-[23px] h-[200px] border border-[rgba(54,55,73,0.43)] text-white flex gap-8 items-center bg-gradient-to-r from-[#04071D] to-[#0C0E23]">
              <img
                src="/mobileDevelopment.webp"
                className=" w-[150px] mr-4"
                alt="Mobile Development"
              />
              <div className="text-left">
                <h1 className="text-lg font-semibold">DASDASD</h1>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reiciendis, alias!
                </p>
              </div>
            </div>

            <div className="p-6 rounded-[23px] h-[200px] border border-[rgba(54,55,73,0.43)] text-white flex gap-8 items-center bg-gradient-to-r from-[#04071D] to-[#0C0E23]">
              <img
                src="/solutionTechnology.webp"
                className=" w-[150px] mr-4"
                alt="Mobile Development"
              />
              <div className="text-left">
                <h1 className="text-lg font-semibold">DASDASD</h1>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reiciendis, alias!
                </p>
              </div>
            </div>

            <div className="p-6 rounded-[23px] h-[200px] border border-[rgba(54,55,73,0.43)] text-white flex gap-8 items-center bg-gradient-to-r from-[#04071D] to-[#0C0E23]">
              <img
                src="/softwareDevelopment.webp"
                className=" w-[150px] mr-4"
                alt="Mobile Development"
              />
              <div className="text-left">
                <h1 className="text-lg font-semibold">DASDASD</h1>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reiciendis, alias!
                </p>
              </div>
            </div>
          </div>
        </div>
      </center>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}
