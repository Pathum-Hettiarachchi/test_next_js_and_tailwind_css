import React from 'react'

export default function page() {
  return (
    <div className='flex justify-center items-center w-ful bg-blue-200 h-[100vh] relative flex-col'>
      <div className="navBar absolute top-0 left-0 flex w-full py-3 items-center justify-center">
        <div className="nav-items flex bg-white bg-opacity-50 py-3 px-10 rounded-full list-none font-semibold">
        <li className='mr-8'><a href="">Service</a></li>
        <li className='mr-8'><a href="">Project</a></li>
        <li className='mr-8'><a href="">About</a></li>
        <li className='mr-8'><a href="">Lets Talk</a></li>
        </div>
      </div>
      <h1 className='text-3xl'>Home Page</h1>
      <p className='w-[600px] mt-5 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ab iste sequi aliquid illo! 
        Commodi molestias temporibus ab sunt sapiente eum perferendis earum hic quos soluta magnam, 
        autem iure option.</p>

        <div>
          <button className='bg-blue-500 px-8 py-2 mt-5 rounded-full text-red-50 hover:bg-blue-700 duration-300'>Submit</button>
          </div>
        
      </div>
  )
}
