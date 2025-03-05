import React from "react";
import SpotlightCard from "../blocks/Components/SpotlightCard/SpotlightCard";

export default function Services() {
  const services = [
    {
      image: "/webDevelopment.webp",
      title: "Web Development Solutions",
      description:
        "Craft responsive, scalable web applications using cutting-edge technologies and best practices to drive your digital transformation.",
    },
    {
      image: "/mobileDevelopment.webp",
      title: "Mobile App Development",
      description:
        "Build cross-platform mobile applications that provide seamless user experiences and leverage the latest mobile development frameworks.",
    },
    {
      image: "/solutionTechnology.webp",
      title: "Custom Technology Solutions",
      description:
        "Develop tailored technological solutions that address your unique business challenges and accelerate your operational efficiency.",
    },
    {
      image: "/softwareDevelopment.webp",
      title: "Enterprise Software Development",
      description:
        "Design and implement robust enterprise software systems that integrate smoothly with your existing infrastructure and business processes.",
    },
  ];

  return (
    <>
      <br />
      <br />
      <br />
      <h1 className="text-3xl  text-center sm:text-5xl text-white font-bold md:text-[40px]">
        Our <span className="text-[#5e4bf5]">Services</span>
      </h1>
      <br />
      <br />

      {/* Cards in 2x2 grid */}
      <center>
        <div className="w-full px-4 sm:w-[90%] md:w-[80%] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {services.map((service, index) => (
              <SpotlightCard
                key={index}
                className="p-4 sm:p-6 rounded-[23px] min-h-[200px] border border-[rgba(54,55,73,0.43)] text-white flex flex-col sm:flex-row gap-4 sm:gap-8 items-center bg-gradient-to-r from-[#04071D] to-[#0C0E23]"
              >
                <img
                  src={service.image}
                  className="w-[100px] sm:w-[150px] object-contain"
                  alt={service.title}
                />
                <div className="text-center sm:text-left">
                  <h1 className="text-base sm:text-lg font-semibold mb-2">
                    {service.title}
                  </h1>
                  <p className="text-xs sm:text-sm">{service.description}</p>
                </div>
              </SpotlightCard>
            ))}
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
