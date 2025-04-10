import { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

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

  const imagesPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  // Hitung total halaman berdasarkan jumlah gambar
  const totalPages = Math.ceil(images.length / imagesPerPage);

  // Navigasi ke halaman sebelumnya
  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  // Navigasi ke halaman berikutnya
  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  // Ambil gambar untuk halaman saat ini
  const indexOfFirstImage = (currentPage - 1) * imagesPerPage;
  const indexOfLastImage = currentPage * imagesPerPage;
  const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);

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
        <div className="gallery grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-auto">
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
                {image.tech.slice(0, 4).map((techLogo, techIndex) => (
                  <div key={techIndex} className="bg-[#353B5D]/30 border border-[#22253D] rounded-full p-2">
                    <img
                      src={techLogo}
                      alt="Tech Logo"
                      className="h-6 w-6"
                    />
                  </div>
                ))}

                {image.tech.length > 4 && (
                  <div className="bg-[#353B5D]/30 border border-[#22253D] rounded-full p-2 flex items-center justify-center text-sm font-medium w-10 h-10 text-white">
                    +{image.tech.length - 4}
                  </div>
                )}

              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between mt-4 text-white">
          <p>
            Showing result {(currentPage - 1) * imagesPerPage + 1}
            <span> - </span>
            {Math.min(currentPage * imagesPerPage, images.length)}
            <span> of </span>
            {images.length}
          </p>

          <div className="flex items-center gap-2">
            {/* Tombol Prev */}
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className="px-3 py-3 bg-[#353B5D]/46 rounded disabled:bg-white/4 border border-white/40 disabled:border-black/16 hover:bg-white/40"
            >
              <FaChevronLeft />
            </button>

            {/* Tombol Angka Halaman */}
            {[...Array(totalPages)].map((_, index) => {
              const pageNumber = index + 1;
              return (
                <button
                  key={pageNumber}
                  onClick={() => setCurrentPage(pageNumber)}
                  className={`px-3 py-2 rounded border transition-all
            ${currentPage === pageNumber
                      ? 'bg-white text-black font-bold'
                      : 'bg-[#353B5D]/46 text-white border-white/40 hover:bg-white/30'
                    }
          `}
                >
                  {pageNumber}
                </button>
              );
            })}

            {/* Tombol Next */}
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="px-3 py-3 bg-[#353B5D]/46 rounded disabled:bg-white/4 border border-white/40 disabled:border-black/16 hover:bg-white/40"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>


      </motion.div>
    </div>
  );
};

export default Portfolio;
