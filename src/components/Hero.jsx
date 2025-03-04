import React from "react";

import RotatingText from "../blocks/TextAnimations/RotatingText/RotatingText";
export default function Hero() {
  return (
    <>
      <div className="relative w-full bg-[url('/grid-pattern.png')] bg-cover bg-center">
        {/* Spotlight di kanan atas */}

        {/* Konten Hero */}
        <div className="flex justify-center h-[100vh] ">
          <div className="relative z-10 text-white p-10 mt-[200px]">
            <h1 className="text-3xl sm:text-5xl md:text-[72px] font-bold flex items-center justify-center text-center">
              Revolutionize Your{" "}
            </h1>

            <h1 className="text-3xl sm:text-5xl md:text-[72px] font-bold flex items-center justify-center text-center">
              Digital&nbsp;
              <span className="inline-flex">
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

            <p className="mt-4 text-base sm:text-lg text-center justify-center">
              Transform and accelerate the growth of your digital business with{" "}
              <span className="text-[#5e4bf5] font-bold">StartCode</span>.
            </p>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className="flex-5 border-l-[6px] border-[#5e4bf5] flex items-center">
              <p className="text-white text-[20px] mt-1 font-medium w-80 ml-[20px]">
                Meet our featured clients
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-10 mt-6">
              {[
                "plantsasriLogo.png",
                "tni.png",
                "ipb.svg",
                "moodprimalogo.png",
                "logosmkn3.png",
                "djp.png",
                "sulteng-logo.png",
                "mpp-logo.png",
                "bonet.jpg",
                "smkn4.svg",
                "logo-bkad.png",
                "bi.png",
                "travelwifi.png",
              ].map((logo, index) => (
                <img
                  key={index}
                  src={logo}
                  className="h-6 sm:h-8 md:h-[30px] object-contain"
                  alt={`Client Logo ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Spotlight di kanan atas */}

      <div className="w-[80%] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 p-6">
          {/* Card Kiri */}
          <div className="relative md:col-span-7 bg-gradient-to-r h-[400px] from-[#04071D] to-[#0C0E23] p-6 rounded-[23px] border border-[rgba(54,55,73,0.43)] text-white flex items-center">
            <img
              src="/laptop.png"
              className="absolute inset-0 w-full h-full object-cover rounded-[23px] opacity-100"
              alt="Background"
            />
            <div>
              <h1 className="text-lg font-semibold">Card Kiri</h1>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>

          {/* Card Kanan (2 card dalam51 kolom) */}
          <div className="md:col-span-5 flex flex-col gap-6">
            <div
              style={{ flex: "1" }}
              className="relative bg-gradient-to-r from-[#04071D] to-[#0C0E23] p-6 rounded-[23px] border border-[rgba(54,55,73,0.43)] text-white flex items-center"
            >
              <img
                src="/globe.png"
                className="absolute inset-0 w-full h-full object-cover opacity-100"
                alt="Background"
              />
              <div>
                <h1 className="text-lg font-semibold">Card Atas</h1>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>

            <div
              style={{ flex: "1" }}
              className="bg-gradient-to-r from-[#04071D] to-[#0C0E23] pl-4 pr-2 rounded-[23px] border border-[rgba(54,55,73,0.43)] text-white flex items-center"
            >
              <div>
                <h1 className="text-lg font-semibold">Card Bawah</h1>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
              <img
                src="/techstack.png"
                className="w-[50%] h-full object-cover opacity-100"
                style={{
                  borderTopRightRadius: "15px",
                  borderBottomRightRadius: "15px",
                }}
                alt="Background"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 p-6">
          {/* Card Kiri (2 card dalam 1 kolom) */}
          <div className="md:col-span-4 flex flex-col gap-6">
            <div
              style={{ flex: "1" }}
              className="relative bg-gradient-to-r from-[#04071D] to-[#0C0E23] p-6 rounded-[23px] border border-[rgba(54,55,73,0.43)] text-white flex items-center"
            >
              <img
                src="/backgorund-grid.png"
                className="absolute inset-0 w-full h-full object-cover opacity-100"
                alt="Background"
              />
              <div>
                <h1 className="text-lg font-semibold">Card Atas</h1>
                <p className="text-sm">Lorem ipsum dolor sit a</p>
              </div>
              <img
                src="/input.png"
                className="absolute bottom-0 right-0 w-[50%] object-cover opacity-100"
                alt="Input"
              />
            </div>

            <div
              style={{ flex: "1" }}
              className="relative bg-gradient-to-r from-[#04071D] to-[#0C0E23] p-6 rounded-[23px] border border-[rgba(54,55,73,0.43)] text-white flex items-center"
            >
              <img
                src="/backgroundrainbow.png"
                className="absolute inset-0 w-full h-full object-cover opacity-50"
                style={{ borderRadius: "20px" }}
                alt="Background"
              />
              <div>
                <h1 className="text-lg font-semibold">Card Bawah</h1>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </div>

          {/* Card Kanan */}
          <div className="relative md:col-span-8 bg-gradient-to-r from-[#04071D] to-[#0C0E23] pl-6 py-6 rounded-[23px] border border-[rgba(54,55,73,0.43)] text-white flex items-center justify-between overflow-hidden">
            <img
              src="/backgorund-grid.png"
              className="absolute inset-0 w-full h-full object-cover opacity-100"
              alt="Background"
            />
            <div>
              <h1 className="text-lg font-semibold">Card Kanan</h1>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <img
              src="/code.png"
              className="w-[50%] h-full object-cover opacity-100"
              alt="Background"
            />
          </div>
        </div>
      </div>

      <br />
    </>
  );
}
