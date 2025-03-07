import React from "react";
import SpotlightCard from "../blocks/Components/SpotlightCard/SpotlightCard";
import StarBorder from "../blocks/Animations/StarBorder/StarBorder";
import RotatingText from "../blocks/TextAnimations/RotatingText/RotatingText";
export default function Hero() {
  return (
    <>
      {/* Hero Section */}

      <div id="home" className="relative w-full bg-[url('/grid-pattern.webp')] bg-cover bg-center min-h-[100vh]">
  {/* Spotlight di kanan atas */}
  {/* Konten Hero */}
  <div className="flex justify-center min-h-[100vh]">
    <div className="relative z-10 text-white p-10" style={{ marginTop: "200px", minHeight: "400px" }}>
      <div className="h-auto" style={{ minHeight: "72px" }}>
        <h1 className="text-3xl sm:text-5xl md:text-[72px] font-bold flex items-center justify-center text-center">
          Revolutionize Your{" "}
        </h1>
      </div>
      
      {/* Container dengan tinggi tetap untuk menampung teks yang berputar */}
      <div className="h-auto" style={{ minHeight: "72px" }}>
        <h1 className="text-3xl sm:text-5xl md:text-[72px] font-bold flex items-center justify-center text-center">
          Digital&nbsp;
          <span className="inline-flex" style={{ minWidth: "200px", minHeight: "72px" }}>
            <RotatingText
              texts={["Solutions", "Products", "Systems"]}
              mainClassName="px-2 sm:px-2 md:px-3 bg-[#5e4bf5] text-white overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg inline-flex items-center"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />
          </span>
        </h1>
      </div>
      
      <div style={{ minHeight: "50px" }}>
        <p className="mt-4 text-base sm:text-lg text-center justify-center">
          Transform and accelerate the growth of your digital business with{" "}
          <span className="text-[#5e4bf5] font-bold">StartCode</span>.
        </p>
      </div>
      
      {/* Mengganti multiple <br /> dengan container yang memiliki height tetap */}
      <div style={{ height: "200px" }} aria-hidden="true"></div>
      
      <div className="flex-5 border-l-[6px] border-[#5e4bf5] flex items-center" style={{ minHeight: "40px" }}>
        <p className="text-white text-[20px] mt-1 font-medium w-80 ml-[20px]">
          Meet our featured clients
        </p>
      </div>
      
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-10 mt-6" style={{ minHeight: "100px" }}>
        {[
          "plantsasriLogo.webp",
          "tni.webp",
          "ipb.svg",
          "moodprimalogo.webp",
          "logosmkn3.webp",
          "djp.webp",
          "sulteng-logo.webp",
          "mpp-logo.webp",
          "bonet.webp",
          "smkn4.svg",
          "logo-bkad.webp",
          "bi.webp",
          "travelwifi.webp",
        ].map((logo, index) => (
          <img
            key={index}
            src={logo}
            loading="lazy"
            className="h-6 sm:h-8 md:h-[30px] object-contain"
            alt={`Client Logo ${index + 1}`}
            width="120"
            height="30"
            style={{ aspectRatio: "4/1" }}
          />
        ))}
      </div>
    </div>
  </div>
</div>


      {/* Spotlight di kanan atas */}
      <div id="about"></div>
      <br />
      <br />
      <h1 className="text-3xl  text-center sm:text-5xl text-white font-bold md:text-[40px]">
        About <span className="text-[#5e4bf5]">Us</span>
      </h1>

      <br />
      <br />
      <div className="w-full px-4 sm:w-[90%] md:w-[80%] mx-auto">
        {/* First Row of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 mb-4 sm:mb-6">
          {/* Left Large Card */}
          <div className="relative md:col-span-7 bg-gradient-to-r from-[#04071D] to-[#0C0E23] rounded-[23px] border border-[rgba(54,55,73,0.43)] text-white overflow-hidden">
            <div className="grid md:grid-cols-2 h-full">
              <img
                src="/laptop.webp"
                className="absolute inset-0 w-full h-full object-cover rounded-[23px] opacity-100"
                alt="Advanced Technology Solutions"
              />
              <div className="relative z-10 p-4 sm:p-6 flex flex-col justify-center">
                <h1 className="text-base sm:text-lg font-semibold mb-2">
                  Innovative Technology Ecosystem
                </h1>
                <p className="text-xs sm:text-sm">
                  Explore our comprehensive technology solutions that transform
                  complex challenges into streamlined, efficient digital
                  strategies.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side Cards */}
          <div className="md:col-span-5 flex flex-col gap-4 sm:gap-6">
            {/* Top Card */}
            <div
              style={{ flex: "1" }}
              className="relative bg-gradient-to-r from-[#04071D] to-[#0C0E23] rounded-[23px] border border-[rgba(54,55,73,0.43)] text-white overflow-hidden"
            >
              <img
                src="/globe.webp"
                className="absolute inset-0 w-full h-full object-cover opacity-100"
                alt="Global Technology Solutions"
              />
              <div className="relative z-10 p-4 sm:p-6">
                <h1 className="text-base sm:text-lg font-semibold mb-2">
                  Global Digital Transformation
                </h1>
                <p className="text-xs sm:text-sm">
                  Leverage our international expertise to drive digital
                  innovation across diverse business landscapes.
                </p>
              </div>
            </div>

            {/* Bottom Card */}
            <div
              style={{ flex: "1" }}
              className="bg-gradient-to-r from-[#04071D] to-[#0C0E23] rounded-[23px] border border-[rgba(54,55,73,0.43)] text-white flex items-center"
            >
              <div className="p-4 sm:p-6 flex-1">
                <h1 className="text-base sm:text-lg font-semibold mb-2">
                  Tech Stack Integration
                </h1>
                <p className="text-xs sm:text-sm">
                  Seamlessly integrate cutting-edge technologies to enhance your
                  existing infrastructure and boost productivity.
                </p>
              </div>
              <img
                src="/techstack.webp"
                className="w-[50%] h-full object-cover"
                style={{
                  borderTopRightRadius: "15px",
                  borderBottomRightRadius: "15px",
                }}
                alt="Technology Stack"
              />
            </div>
          </div>
        </div>

        {/* Second Row of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6">
          {/* Left Side Cards */}
          <div className="md:col-span-4 flex flex-col gap-4 sm:gap-6">
            {/* Top Card */}
            <div
              style={{ flex: "1" }}
              className="relative bg-gradient-to-r from-[#04071D] to-[#0C0E23] rounded-[23px] border border-[rgba(54,55,73,0.43)] text-white overflow-hidden"
            >
              <img
                src="/backgorund-grid.webp"
                className="absolute inset-0 w-full h-full object-cover opacity-100"
                alt="Input Solutions"
              />
              <div className="relative z-10 p-4 sm:p-6">
                <h1 className="text-base sm:text-lg font-semibold mb-2">
                  Smart Input Solutions
                </h1>
                <p className="text-xs sm:text-sm">
                  Implement intelligent input systems that streamline data
                  collection and processing.
                </p>
                <img
                  src="/input.webp"
                  className="absolute right-0 w-[50%] object-cover opacity-100"
                  alt="Input Technology"
                />
              </div>
            </div>

            {/* Bottom Card */}
            <div
              style={{ flex: "1" }}
              className="relative bg-gradient-to-r from-[#04071D] to-[#0C0E23] rounded-[23px] border border-[rgba(54,55,73,0.43)] text-white overflow-hidden"
            >
              <img
                src="/backgroundrainbow.webp"
                className="absolute inset-0 w-full h-full object-cover opacity-50"
                style={{ borderRadius: "20px" }}
                alt="Innovative Solutions"
              />
              <div className="relative z-10 p-4 sm:p-6">
                <h1 className="text-base sm:text-lg font-semibold mb-2">
                  Creative Technology Solutions
                </h1>
                <p className="text-xs sm:text-sm">
                  Unlock innovative approaches to solve complex technological
                  challenges with our creative problem-solving strategies.
                </p>
              </div>
            </div>
          </div>

          {/* Right Large Card */}
          <div className="relative md:col-span-8 bg-gradient-to-r from-[#04071D] to-[#0C0E23] rounded-[23px] border border-[rgba(54,55,73,0.43)] text-white overflow-hidden">
            <img
              src="/backgorund-grid.webp"
              className="absolute inset-0 w-full h-full object-cover opacity-100"
              alt="Advanced Coding Solutions"
            />
            <div className="relative z-10 flex items-center justify-between pl-6 py-6">
              <div className="flex-1 pr-4">
                <h1 className="text-base sm:text-lg font-semibold mb-2">
                  Advanced Coding Platforms
                </h1>
                <p className="text-xs sm:text-sm">
                  Develop robust, scalable, and efficient coding solutions that
                  push the boundaries of technological innovation and
                  performance.
                </p>
              </div>
              <img
                src="/code.webp"
                className="w-[50%] h-full object-cover"
                alt="Coding Technology"
              />
            </div>
          </div>
        </div>
      </div>

      <br />
    </>
  );
}
