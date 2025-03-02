import React from 'react'
import Footer from '../Components/Footer'

export default function About() {
  return (
    <div className='flex flex-col justify-center items-center bg-background w-full h-[100vh]'>
          <div className="navBar absolute top-0 left-0 flex w-full py-3  items-center justify-center">
        <div className="nav-items flex bg-white bg-opacity-80 py-5 px-10 rounded-2xl list-none font-semibold text-gray-700">
        <li className='mr-8'><a href="/service">Service</a></li>
        <li className='mr-8'><a href="/project">Project</a></li>
        <li className='mr-8'><a href="/about">About</a></li>
        <li className='mr-8'><a href="">Lets Talk</a></li>
        </div>
      </div>
    <h1 className='text-[80px] text-fontcolor'>About Page</h1>
    <p className='w-[600px] mt-5 text-center text-fontcolor'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ab iste sequi aliquid illo! 
        Commodi molestias temporibus ab sunt sapiente eum perferendis earum hic quos soluta magnam, 
        autem iure option.</p>

         <section className='flex justify-center items-center w-full h-auto absolute bottom-0'>
        <Footer />
        </section>
    </div>
  )
}
