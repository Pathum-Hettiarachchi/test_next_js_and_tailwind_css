import React from 'react'


export default function page() {
  return (
    <div>
    <div className='flex justify-center items-center w-ful bg-background h-[100vh] relative flex-col'>
      <div className="navBar absolute top-0 left-0 flex w-full py-3 items-center justify-center">
        <div className="nav-items flex bg-white bg-opacity-80 py-3 px-10 rounded-full list-none font-semibold text-gray-700">
        <li className='mr-8'><a href="/service">Service</a></li>
        <li className='mr-8'><a href="/project">Project</a></li>
        <li className='mr-8'><a href="/about">About</a></li>
        <li className='mr-8'><a href="">Lets Talk</a></li>
        </div>
      </div>
      <h1 className='text-[64px] text-fontcolor'>Home Page</h1>
      <p className='w-[600px] mt-5 text-center text-bodytext'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ab iste sequi aliquid illo! 
        Commodi molestias temporibus ab sunt sapiente eum perferendis earum hic quos soluta magnam, 
        autem iure option.</p>

        <div>
          <button className='bg-blue-500 px-8 py-2 mt-5 rounded-full text-red-50 hover:bg-blue-700 duration-300'>Submit</button>
          </div>
        
      </div>
  
      
    
  <section className="w-full h-auto bg-background flex flex-wrap items-center justify-center gap-4 p-4">

  <div className="card1 w-full md:w-[48%] h-[600px] bg-cardbg rounded-2xl shadow-md flex items-center justify-center text-white text-lg">
    <h1 className='text-[36px] md:text-[64px]'>Ui/Ux Design</h1>
  </div>
  <div className="card2 w-full md:w-[48%] h-[600px] bg-cardbg rounded-2xl shadow-md flex items-center justify-center text-white text-lg">
    <h1 className='text-[36px] md:text-[56px]'>Frontend Development</h1>
  </div>
  <div className="card3 w-full md:w-[48%] h-[600px] bg-cardbg2 rounded-2xl shadow-md flex items-center justify-center text-white text-lg">
    Card3
  </div>
  <div className="card4 w-full md:w-[48%] h-[600px] bg-cardbg2 rounded-2xl shadow-md flex items-center justify-center text-white text-lg">
    Card4
  </div>
</section>
      </div>
  )
}
