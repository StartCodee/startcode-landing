import React from "react";
import RotatingText from "../blocks/TextAnimations/RotatingText/RotatingText";
import TrueFocus from "../blocks/TextAnimations/TrueFocus/TrueFocus";

import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

import { FiMail, FiPhone } from "react-icons/fi";

export default function Footer() {
  return (
    // <footer id="contact" className="relative text-white">
    //   <div className="relative w-full bg-[url('/footer-pattern.webp')] bg-cover bg-center">
    //     <div className="container mx-auto px-4 py-12">
    //       {/* Desktop Layout */}
    //       <div className="hidden md:flex flex-col items-center justify-center text-center text-white">
    //         <div className="flex justify-between w-full space-x-8">
    //           {/* Left Column - Logo */}
    //           <div className="flex-1 flex flex-col items-start justify-end">
    //             <img
    //               src="/StartCode-lg.png"
    //               alt="Startcode Logo"
    //               className="w-32 mb-4"
    //             />
    //             <h2 className="text-xl font-semibold">
    //               Startcode Technology Digital
    //             </h2>
    //             <p className="text-gray-400 text-left mt-2">
    //               Menyediakan solusi terbaik untuk kebutuhan bisnis Anda.
    //             </p>
    //           </div>

    //           {/* Center Column - Your Vision, Our Code */}
    //           <div className="flex-1 flex flex-col items-center justify-center">
    //             <TrueFocus
    //               sentence="Your Vision, Our Code."
    //               manualMode={false}
    //               blurAmount={5}
    //               borderColor="#00d8ff"
    //               animationDuration={0.5}
    //               pauseBetweenAnimations={1}
    //             />
    //             <p className="mt-4 text-gray-400 text-sm">
    //               &copy; {new Date().getFullYear()} Startcode Technology Digital. Semua Hak Dilindungi.
    //             </p>
    //             <div className="mt-4">
    //               <p className="text-gray-400">Email: startcodedigital@gmail.com</p>
    //               <p className="text-gray-400">Telp: +62 8953 3149 3506</p>
    //               <div className="flex gap-4 mt-4 justify-center">
    //                 <a href="#" aria-label="Kunjungi Link" className="text-gray-400 hover:text-white text-2xl">
    //                    <span className="sr-only">Kunjungi Link</span>
    //                   <FaFacebook /></a>
    //                 <a href="#" aria-label="Kunjungi Link" className="text-gray-400 hover:text-white text-2xl">
    //                    <span className="sr-only">Kunjungi Link</span>
    //                   <FaInstagram /></a>
    //                 <a href="#" aria-label="Kunjungi Link" className="text-gray-400 hover:text-white text-2xl">
    //                    <span className="sr-only">Kunjungi Link</span>
    //                   <FaLinkedin /></a>
    //                 <a href="#" aria-label="Kunjungi Link" className="text-gray-400 hover:text-white text-2xl">
    //                    <span className="sr-only">Kunjungi Link</span>
    //                   <FaWhatsapp /></a>
    //               </div>
    //             </div>
    //           </div>

    //           {/* Right Column - Addresses */}
    //           <div className="flex-1" style={{display:'flex',alignItems:'end'}}>
    //             <p className="text-gray-400 mt-2">
    //               <strong>Jakarta Office:</strong><br />
    //               Plaza Aminta, Jalan Let. Jen. TB Simatupang No.Kav.10, Lantai 5/504, RT.06/RW.14, Pd. Pinang, Kec. Kby. Lama, Kota Jakarta Selatan, DKI Jakarta 12310
    //               <br /><br />
    //               <strong>Bogor Office:</strong><br />
    //               Kp. Baru Desa Wates Jaya, Kec. Cigombong, Kab. Bogor, Jawa Barat
    //             </p>
    //           </div>
    //         </div>
    //       </div>

    //       {/* Mobile Layout */}
    //       <div className="md:hidden flex flex-col items-center text-center space-y-6">
    //         {/* Your Vision, Our Code - Now at the top */}
    //         <div className="w-full">
    //           <TrueFocus
    //             sentence="Your Vision, Our Code."
    //             manualMode={false}
    //             blurAmount={5}
    //             borderColor="#00d8ff"
    //             animationDuration={0.5}
    //             pauseBetweenAnimations={1}
    //           />
    //         </div>

    //         {/* Logo and Description */}
    //         <div className="flex flex-col items-center">
    //           <img
    //             src="/scode.webp"
    //             alt="Startcode Logo"
    //             className="w-32 mb-4"
    //           />
    //           <h2 className="text-xl font-semibold">
    //             Startcode Technology Digital
    //           </h2>
    //           <p className="text-gray-400 mt-2 max-w-xs">
    //           Transform and accelerate the growth of your digital business.
    //           </p>
    //         </div>

    //         {/* Contact and Social Media */}
    //         <div>
    //           <p className="text-gray-400">Email: startcodedigital@gmail.com</p>
    //           <p className="text-gray-400">Telp: +62 8953 3149 3506</p>
    //           <div className="flex gap-4 mt-4 justify-center">
    //             <a href="#" aria-label="Kunjungi Link" className="text-gray-400 hover:text-white text-2xl">
    //                <span className="sr-only">Kunjungi Link</span>
    //               <FaFacebook /></a>
    //             <a href="#" aria-label="Kunjungi Link" className="text-gray-400 hover:text-white text-2xl">
    //                <span className="sr-only">Kunjungi Link</span>
    //               <FaInstagram /></a>
    //             <a href="#" aria-label="Kunjungi Link" className="text-gray-400 hover:text-white text-2xl">
    //                <span className="sr-only">Kunjungi Link</span>
    //               <FaLinkedin /></a>
    //             <a href="#" aria-label="Kunjungi Link" className="text-gray-400 hover:text-white text-2xl">
    //                <span className="sr-only">Kunjungi Link</span>
    //               <FaWhatsapp /></a>
    //           </div>
    //         </div>

    //         {/* Addresses */}
    //         <div>
    //           <p className="text-gray-400">
    //             <strong>Jakarta Office:</strong><br />
    //             Plaza Aminta, Jalan Let. Jen. TB Simatupang No.Kav.10, Lantai 5/504, RT.06/RW.14, Pd. Pinang, Kec. Kby. Lama, Kota Jakarta Selatan, DKI Jakarta 12310
    //             <br /><br />
    //             <strong>Bogor Office:</strong><br />
    //             Kp. Baru Desa Wates Jaya, Kec. Cigombong, Kab. Bogor, Jawa Barat
    //           </p>
    //         </div>

    //         {/* Copyright */}
    //         <p className="text-gray-400 text-sm">
    //           &copy; {new Date().getFullYear()} Startcode Technology Digital. Semua Hak Dilindungi.
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </footer>
    <footer id="contact" className="relative text-white bg-[#6155FF]/16">
      <div className="relative w-full bg-[url('/footer-pattern.webp')] bg-cover bg-center">
        <div className="container mx-auto px-4 py-8">
          {/* Desktop Layout */}
          <div className="hidden md:flex flex-col gap-4 items-center justify-center text-center text-white">
            <div className="flex justify-between w-full space-x-8">
              {/* Left Column - Logo */}
              <div className="flex flex-1 flex-col gap-4 h-fit items-start justify-center">
                <div className="flex gap-4 items-center">
                  <img
                    src="/StartCode-lg.png"
                    alt="Startcode Logo"
                    className="w-12"
                  />
                  <h2 className="text-xl font-semibold">
                    Startcode Technology Digital
                  </h2>
                </div>
                <TrueFocus
                  sentence="Your Vision, Our Code."
                  manualMode={false}
                  blurAmount={5}
                  borderColor="#00d8ff"
                  animationDuration={0.5}
                  pauseBetweenAnimations={1}
                />
              </div>

              <div className="flex flex-1 flex-col gap-4 items-start">
                <p className="text-white font-bold">Services</p>
                <div className="flex flex-col gap-2 items-start">
                  <p className="text-white/80 font-medium">Web Development</p>
                  <p className="text-white/80 font-medium">Mobile App Development</p>
                  <p className="text-white/80 font-medium">Custom Technology Solutions</p>
                  <p className="text-white/80 font-medium">Enterprise Software Development</p>
                </div>
              </div>

              <div className="flex flex-1 flex-col gap-4 items-start">
                <p className="text-white font-bold">Contact</p>
                <div className="flex flex-col gap-2 items-start">
                  <div className="flex gap-2 items-center">
                    <FiMail />
                    <p className="text-white/80 font-medium">startcodedigital@gmail.com</p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <FiPhone />
                    <p className="text-white/80 font-medium">+62 8953 3149 3506</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-1 flex-col gap-4 items-start">
                <p className="text-white font-bold">Address</p>
                <div className="flex flex-col gap-2 items-start">
                  <p className="text-white/90 font-medium">Jakarta Office</p>
                  <p className="text-white/80 text-left">Plaza Aminta, Jalan Let. Jen. TB Simatupang No.Kav.10, Lantai 5/504, RT.06/RW.14, Pd. Pinang, Kec. Kby. Lama, Kota Jakarta Selatan, DKI Jakarta 12310
                  </p>
                </div>
                <div className="flex flex-col gap-2 items-start">
                  <p className="text-white/90 font-medium">Bogor Office</p>
                  <p className="text-white/80 text-left">Kp. Baru Desa Wates Jaya, Kec. Cigombong, Kab. Bogor, Jawa Barat
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-between w-full border-t border-white/40">
              <p className="mt-4 text-gray-400 text-sm">
                &copy; {new Date().getFullYear()} Startcode Technology Digital. Semua Hak Dilindungi.
              </p>
              <div className="flex gap-4 mt-4 justify-center">
                <a href="#" aria-label="Kunjungi Link" className="text-gray-400 hover:text-white text-2xl">
                  <span className="sr-only">Kunjungi Link</span>
                  <FaFacebook /></a>
                <a href="#" aria-label="Kunjungi Link" className="text-gray-400 hover:text-white text-2xl">
                  <span className="sr-only">Kunjungi Link</span>
                  <FaInstagram /></a>
                <a href="#" aria-label="Kunjungi Link" className="text-gray-400 hover:text-white text-2xl">
                  <span className="sr-only">Kunjungi Link</span>
                  <FaLinkedin /></a>
                <a href="#" aria-label="Kunjungi Link" className="text-gray-400 hover:text-white text-2xl">
                  <span className="sr-only">Kunjungi Link</span>
                  <FaWhatsapp /></a>
              </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden flex flex-col items-center text-center space-y-6">
            {/* Your Vision, Our Code - Now at the top */}
            <div className="w-full">
              <TrueFocus
                sentence="Your Vision, Our Code."
                manualMode={false}
                blurAmount={5}
                borderColor="#00d8ff"
                animationDuration={0.5}
                pauseBetweenAnimations={1}
              />
            </div>

            {/* Logo and Description */}
            <div className="flex flex-col items-center">
              <img
                src="/scode.webp"
                alt="Startcode Logo"
                className="w-32 mb-4"
              />
              <h2 className="text-xl font-semibold">
                Startcode Technology Digital
              </h2>
              <p className="text-gray-400 mt-2 max-w-xs">
                Transform and accelerate the growth of your digital business.
              </p>
            </div>

            {/* Contact and Social Media */}
            <div>
              <p className="text-gray-400">Email: startcodedigital@gmail.com</p>
              <p className="text-gray-400">Telp: +62 8953 3149 3506</p>
              <div className="flex gap-4 mt-4 justify-center">
                <a href="#" aria-label="Kunjungi Link" className="text-gray-400 hover:text-white text-2xl">
                  <span className="sr-only">Kunjungi Link</span>
                  <FaFacebook /></a>
                <a href="#" aria-label="Kunjungi Link" className="text-gray-400 hover:text-white text-2xl">
                  <span className="sr-only">Kunjungi Link</span>
                  <FaInstagram /></a>
                <a href="#" aria-label="Kunjungi Link" className="text-gray-400 hover:text-white text-2xl">
                  <span className="sr-only">Kunjungi Link</span>
                  <FaLinkedin /></a>
                <a href="#" aria-label="Kunjungi Link" className="text-gray-400 hover:text-white text-2xl">
                  <span className="sr-only">Kunjungi Link</span>
                  <FaWhatsapp /></a>
              </div>
            </div>

            {/* Addresses */}
            <div>
              <p className="text-gray-400">
                <strong>Jakarta Office:</strong><br />
                Plaza Aminta, Jalan Let. Jen. TB Simatupang No.Kav.10, Lantai 5/504, RT.06/RW.14, Pd. Pinang, Kec. Kby. Lama, Kota Jakarta Selatan, DKI Jakarta 12310
                <br /><br />
                <strong>Bogor Office:</strong><br />
                Kp. Baru Desa Wates Jaya, Kec. Cigombong, Kab. Bogor, Jawa Barat
              </p>
            </div>

            {/* Copyright */}
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Startcode Technology Digital. Semua Hak Dilindungi.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
