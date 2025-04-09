import { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const Portfolio = () => {
  const images = [
    {
      title: "ETWPAD",
      src: "/images/etwpad.webp",
      tech: [
        "/tech-stack/laravel.svg",
        "/tech-stack/go.svg",
        "/tech-stack/livewire.webp",
        "/tech-stack/bootstrap.svg",
        "/tech-stack/postgresql.svg",
        "/tech-stack/nginx.svg",
      ],
      gridArea: "itgrid one shadow md:col-span-2 bg-top md:row-span-2",
    },
    {
      title: "BKAD",
      src: "images/bkad.webp",
      tech: [
        "/tech-stack/laravel.svg",
        "/tech-stack/bootstrap.svg",
        "/tech-stack/mysql.svg",
        "/tech-stack/apache.svg",
      ],
      gridArea: "itgrid two shadow md:col-span-2 md:row-span-1 bg-top",
    },
    {
      title: "DMP",
      src: "images/DMP.webp",
      tech: [
        "/tech-stack/flask.svg",
        "/tech-stack/next.svg",
        "/tech-stack/tailwind.svg",
        "/tech-stack/postgresql.svg",
        "/tech-stack/nginx.svg",
      ],
      gridArea: "itgrid three shadow md:col-span-2 md:row-span-1",
    },
    {
      title: "REFMED",
      src: "images/refmed.webp",
      tech: [
        "/tech-stack/laravel.svg",
        "/tech-stack/bootstrap.svg",
        "/tech-stack/mysql.svg",
        "/tech-stack/nginx.svg",
      ],
      gridArea: "itgrid four shadow md:col-span-2 md:row-span-1",
    },
    {
      title: "Plantsari",
      src: "images/plantsasri.webp",
      tech: [
        "/tech-stack/laravel.svg",
        "/tech-stack/bootstrap.svg",
        "/tech-stack/firebase.svg",
        "/tech-stack/mysql.svg",
        "/tech-stack/apache.svg",
        "/tech-stack/MIDTRANS.webp",
        "/tech-stack/stripe.svg",
        "/tech-stack/paypal.svg",

        // "/tech-stack/express.svg",
        // "/tech-stack/next.svg",
        // "/tech-stack/tailwind.svg",
        // "/tech-stack/mongodb.svg",
        // "/tech-stack/nginx.svg",
      ],
      gridArea: "itgrid five shadow md:col-span-2 md:row-span-2 bg-top",
    },
    {
      title: "SIMPOL",
      src: "images/simpol.webp",
      tech: [
        "/tech-stack/laravel.svg",
        "/tech-stack/php.svg",
        "/tech-stack/bootstrap.svg",
        "/tech-stack/mysql.svg",
        "/tech-stack/apache.svg",
      ],
      gridArea: "itgrid six shadow md:col-span-2 md:row-span-1",
    },
    {
      title: "SIDAK",
      src: "images/sidak.webp",
      tech: [
        "/tech-stack/express.svg",
        "/tech-stack/next.svg",
        "/tech-stack/tailwind.svg",
        "/tech-stack/firebase.svg",
        "/tech-stack/postgresql.svg",
        "/tech-stack/nginx.svg",
      ],
      gridArea: "itgrid seven md:col-span-2 md:row-span-2 bg-top shadow",
    },
    {
      title: "GENCERLING",
      src: "images/gencerling.webp",
      tech: [
        "/tech-stack/laravel.svg",
        "/tech-stack/bootstrap.svg",
        "/tech-stack/mysql.svg",
        "/tech-stack/s3.svg",
        "/tech-stack/apache.svg",
      ],
      gridArea: "itgrid eight md:col-span-2 md:row-span-2 bg-top shadow",
    },
    {
      title: "MPP",
      src: "images/mpp1.webp",
      tech: [
        "/tech-stack/laravel.svg",
        "/tech-stack/tailwind.svg",
        "/tech-stack/flutter.svg",
        "/tech-stack/firebase.svg",
        "/tech-stack/mysql.svg",
        "/tech-stack/nginx.svg",
      ],
      gridArea: "itgrid eleven md:col-span-1 md:row-span-2 shadow",
    },
    {
      title: "MPP",
      src: "images/mpp2.webp",
      tech: [
        "/tech-stack/laravel.svg",
        "/tech-stack/tailwind.svg",
        "/tech-stack/flutter.svg",
        "/tech-stack/firebase.svg",
        "/tech-stack/mysql.svg",
        "/tech-stack/nginx.svg",
      ],
      gridArea: "itgrid twelve md:col-span-1 md:row-span-2 shadow",
    },
    {
      title: "Red Hunter",
      src: "images/redhunter-page.webp",
      tech: [
        "/tech-stack/laravel.svg",
        "/tech-stack/flask.svg",
        "/tech-stack/next.svg",
        "/tech-stack/appium.png",
        "/tech-stack/selenium.svg",
        "/tech-stack/tailwind.svg",
        "/tech-stack/postgresql.svg",
        "/tech-stack/mongodb.svg",
        "/tech-stack/apache.svg",
      ],
      gridArea: "itgrid thirteen md:col-span-2 md:row-span-2 shadow bg-top",
    },

    {
      title: "ABL",
      src: "images/branding-ABL.webp",
      tech: ["/tech-stack/youtube.svg"],
      gridArea: "itgrid sixteen md:col-span-2 md:row-span-1 bg-top shadow",
    },

    {
      title: "DJP",
      src: "images/branding-DJP.webp",
      tech: ["/tech-stack/youtube.svg"],
      gridArea: "itgrid sixteen md:col-span-2 md:row-span-1 bg-top shadow",
    },
    {
      title: "IPB",
      src: "images/branding-IPB.webp",
      tech: ["/tech-stack/youtube.svg"],
      gridArea: "itgrid sixteen md:col-span-2 md:row-span-1 bg-top shadow",
    },
    {
      title: "Kemensos",
      src: "images/branding-kemensos.webp",
      tech: ["/tech-stack/youtube.svg"],
      gridArea: "itgrid sixteen md:col-span-2 md:row-span-1 bg-top shadow",
    },

    {
      title: "Dokter Siska",
      src: "images/branding-dokter-siska.webp",
      tech: ["/tech-stack/youtube.svg"],
      gridArea: "itgrid sixteen md:col-span-2 md:row-span-1 bg-top shadow",
    },
    {
      title: "Travel Wifi",
      src: "images/branding-Travel-wifi.webp",
      tech: ["/tech-stack/youtube.svg"],
      gridArea: "itgrid sixteen md:col-span-2 md:row-span-1 bg-top shadow",
    },
    {
      title: "Scindapsus",
      src: "images/scindapsus.webp",
      tech: [
        "/tech-stack/laravel.svg",
        "/tech-stack/php.svg",
        "/tech-stack/mysql.svg",
        "/tech-stack/apache.svg",
      ],
      gridArea: "itgrid sixteen md:col-span-2 md:row-span-1 bg-top shadow",
    },

    {
      title: "PLAB",
      src: "images/plab.png",
      tech: [
        "/tech-stack/laravel.svg",
        "/tech-stack/php.svg",
        "/tech-stack/mysql.svg",
        "/tech-stack/apache.svg",
      ],
      gridArea: "itgrid sixteen md:col-span-2 md:row-span-1 bg-top shadow",
    },
    {
      title: "SMKN 3 Bogor",
      src: "images/smk3.png",
      tech: [
        "/tech-stack/next.svg",
        "/tech-stack/antdesign.svg",
        "/tech-stack/postgresql.svg",
        "/tech-stack/nginx.svg",
      ],
      gridArea: "itgrid sixteen md:col-span-2 md:row-span-1 bg-top shadow",
    },
  ];

  const ref = useRef(null);

  const isScroll = useInView(ref, { once: false });
  const aboutContentControls = useAnimation();

  const dataProjectsVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.2,
        duration: 0.5,
        delay: 0.25,
        type: "spring",
        stiffness: 80,
      },
    },
  };

  const item = {
    hidden: { x: 12, opacity: 0 },
    visible: {
      opacity: 1,
      x: 0,
      duration: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const imagesPerPage = [6, 5, 8, 7]; // Jumlah gambar per halaman
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = imagesPerPage.length; // Jumlah total halaman

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const currentImages = images.slice(
    imagesPerPage.slice(0, currentPage - 1).reduce((acc, val) => acc + val, 0),
    imagesPerPage.slice(0, currentPage).reduce((acc, val) => acc + val, 0)
  );

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    if (isScroll) {
      aboutContentControls.start("visible");
    }
  }, [isScroll]);

  return (
    <div id="portfolio" className="w-full px-4 sm:w-[90%] md:w-[80%] mx-auto">
      <br />
      <br />
      <br />
      <h1 className="text-3xl  text-center sm:text-5xl text-white font-bold md:text-[40px]">
        Our <span className="text-[#5e4bf5]">Works</span>
      </h1>

      <br />
      <br />
      <motion.div
        ref={ref}
        animate={aboutContentControls}
        initial="hidden"
        variants={dataProjectsVariants}
        className="w-full mx-auto mt-10"
      >
        <div className="gallery grid gap-5 grid-cols-4 sm:grid-rows-[repeat(6,1fr)] h-[1400px] md:grid-cols-2 md:grid-rows-[repeat(4,1fr)]">
          {currentImages.map((image, index) => (
            <div className="flex flex-col border border-[#202131] rounded-lg p-8 gap-6">
              <div className="bg-radial from-[#1B2E50] from-40% to-[#13162D] pt-6 px-12 rounded-lg w-full h-60 overflow-hidden">
                <img src={image.src} alt="" className="rounded-lg" />
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-white text-md font-semibold">{image.title}</p>
                <p className="text-white">Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.</p>
              </div>
              <div className="flex">
              {image.tech.map((techLogo, techIndex) => (
                  <div className="border border-[#22253D] rounded-full p-2">
                  <img
                    key={techIndex}
                    src={techLogo}
                    alt="Tech Logo"
                    className="h-6 w-6"
                  />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-end mt-4 space-x-4">
          <button
            aria-label="Prev portofolio"

            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-[#1bacdc] text-white rounded disabled:bg-gray-300"
          >
            <span className="sr-only">Prev portofolio</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-caret-left-fill"
              viewBox="0 0 16 16"
            >
              <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
            </svg>
          </button>
          <button
            aria-label="Next portofolio"
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-[#1bacdc] text-white rounded disabled:bg-gray-300"
          >
            <span className="sr-only">Next portofolio</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-caret-right-fill"
              viewBox="0 0 16 16"
            >
              <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
            </svg>
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Portfolio;
