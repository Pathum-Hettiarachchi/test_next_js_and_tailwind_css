'use client'
import React, { useState } from "react";

const ContactSection = () => {
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  return (
    <div className="bg-cardbg text-white p-10 flex flex-col md:flex-row justify-between items-center rounded-2xl">
      {/* Left Section */}
      <div className="md:w-1/2 space-y-4">
        <h2 className="text-xl font-bold text-green-300">Contact Us</h2>
        <h1 className="text-3xl font-bold">
          Let’s <span className="text-green-300">Connect</span> & <span className="text-green-300">Collaborate</span>
        </h1>
        <p className="text-gray-300">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
        </p>
        <div className="space-y-2">
          <p>📞 +1 (406) 555-0120</p>
          <p>📧 example@gmail.com</p>
          <p>💬 example</p>
          <p>📍 2464 Royal Ln. Mesa, New Jersey 45463</p>
        </div>
      </div>
      
      {/* Right Section - Form */}
      <div className="md:w-1/2 bg-cardbg2 p-6 rounded-lg shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" placeholder="First Name *" className="p-2 rounded-md w-full" />
          <input type="text" placeholder="Last Name *" className="p-2 rounded-md w-full" />
          <input type="email" placeholder="Email *" className="p-2 rounded-md w-full" />
          <input 
            type="number" 
            placeholder="Phone Number *" 
            className="p-2 rounded-md w-full" 
            value={phoneNumber} 
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <input type="text" placeholder="Subject *" className="p-2 rounded-md w-full mt-4" />
        <textarea placeholder="Message *" className="p-2 rounded-md w-full mt-4" rows={4}></textarea>
        <button className="mt-4 bg-green-400 text-black px-6 py-2 rounded-md font-bold flex items-center">
          ➕ Send Message
        </button>
      </div>
    </div>
  );
};

export default ContactSection;
