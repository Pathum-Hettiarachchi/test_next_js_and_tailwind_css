'use client';
import React from 'react'
import SignificantOthers from './Components/SignificantOthers'
import Footer from './Components/Footer'
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import LogoMarquee from './Components/LogoMarquee';


export default function page() {
  return (
    <div className='p-6 bg-background'>
    <div className='flex justify-center items-center w-ful bg-background h-[100vh] relative flex-col'>
      <div className="navBar absolute top-0 left-0 flex w-full py-3 items-center justify-center">
        <div className="nav-items flex bg-white bg-opacity-80 py-3 px-10 rounded-full list-none font-semibold text-gray-700">
        <li className='mr-8'><a href="/service">Service</a></li>
        <li className='mr-8'><a href="/project">Project</a></li>
        <li className='mr-8'><a href="/about">About</a></li>
        <li className='mr-8'><a href="">Lets Talk</a></li>
        </div>
      </div>

      <motion.h1
        className="text-[48px] font-semibold bg-clip-text text-transparent leading-none"
        style={{
          backgroundImage: "linear-gradient(90deg, #008FF6, #E150D3, #F44733)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundSize: "200% 200%"
        }}
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      >
        Ui/Ux Designer
      </motion.h1>
      <h1 className="text-[48px] font-semibold text-fontcolor leading-none">& Frondend Developer</h1>

        
      </div>
      < LogoMarquee />
  
      
  <div className="section-title bg-background">
    <h1 className='text-[48px] text-fontcolorsecond p-[20px]'>Services & Recent Work</h1>
  </div>
  <section className="w-full h-auto bg-background flex flex-wrap items-center justify-center gap-4 p-4">
  <div className="card1 w-full md:w-[48%] h-[600px] bg-cardbg rounded-2xl shadow-md flex flex-col items-start justify-start p-10">
    <h1 className='text-[36px] md:text-[28px] leading-[0.9] text-fontcolor'>Ui/Ux Design</h1>
    <p className='mt-5 text-bodytext text-[17px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla maiores expedita neque eligendi debitis a qui eaque vitae sed? Deleniti.</p>
  </div>
  <div className="card2 w-full md:w-[48%] h-[600px] bg-cardbg rounded-2xl shadow-md flex flex-col items-start justify-start p-10">
    <h1 className='text-[36px] md:text-[28px] leading-[0.9] text-fontcolor'>Frontend<br></br>Development</h1>
    <p className='mt-5 text-fontsecondary text-[17px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla maiores expedita neque eligendi debitis a qui eaque vitae sed? Deleniti.</p>
  </div>
  <div className="card3 w-full md:w-[48%] h-[600px] bg-cardbg2 rounded-2xl shadow-md flex flex-col items-start justify-start text-lg p-10">
    <h1 className='text-[36px] md:text-[56px] leading-[0.9] text-fontcolor'>Project 01</h1>
    <p className='mt-5 text-fontsecondary'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
  </div>
  <div className="card4 w-full md:w-[48%] h-[600px] bg-cardbg2 rounded-2xl shadow-md flex flex-col items-start justify-start text-lg p-10">
  <h1 className='text-[36px] md:text-[56px] leading-[0.9] text-fontcolor'>Project 02</h1>
  <p className='mt-5 text-fontsecondary'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
  </div>
</section>

<div className="section-title bg-background">
    <h1 className='text-[86px] text-fontcolor p-[20px] text-center'>About Me</h1>
  </div>
  <section className='w-[96%] bg-cardbg2 flex justify-center items-center text-[36px] text-fontcolor h-[120px] rounded-2xl gap-4'>
    <div className="items">
      <h1>20+</h1>
      <p>Projects</p>
    </div>
    <div className="items">
      <h1>15+</h1>
      <p>Clients</p>
    </div>
    <div className="items">
      <h1>4+</h1>
      <p>Years</p>
    </div>
  </section>
  <section className='flex justify-center items-center w-full h-auto'>
    <SignificantOthers />
    </section>

    <section className='contact w-full flex flex-col justify-center items-center p-10 h-[100vh] relative'>
      <h1 className='text-[48px] text-center leading-none text-fontcolor mb-10'>See if Pathum good fit<br></br> for you</h1>
      <p className='text-fontsecondary mb-5'>Get into a discovery call and find out how we can improve your business for good.</p>
      <div className='btn flex gap-4'>
        <button className='px-10 py-4 rounded-2xl border-2 border-solid text-white'>Book a call</button>
        <button className='px-10 py-4 rounded-2xl bg-white'>Send an email</button>
      </div>
      <div className="icons text-fontcolor flex absolute bottom-0 left-[16px] text-2xl gap-3">
        <FaWhatsapp />
        <FaSquareXTwitter />
        <FaLinkedin />
        <FaGithub />
        </div>
    </section>
    
    <section className='flex justify-center items-center w-full h-auto'>
    <Footer />
    </section>
      </div>
  )
}
