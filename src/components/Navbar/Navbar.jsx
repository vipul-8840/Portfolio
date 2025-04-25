import React, { useState } from 'react'
import {FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const menuItems = [
    {id:"About",label:"About"},
    {id:"skills",label:"Skills"},
    {id:"Experience",label:"Experience"},
    {id:"project",label:"Projects"},
    {id:"contact",label:"Contact"}

  ]
    const[activeSection, setActiveSection] = useState("");
    const [isScrolled, setIsScrolled] = useState(false);   

  
  return (
    <nav  className={`fixed top-0 w-full z-50 transition duration-300 px-[7vw] md:px-[7vw] lg:px-[20vw] ${
      isScrolled ? "bg-[#050414] bg-opacity-50 backdrop-blur-md shadow-md" : "bg-transparent"
    }`}>
      <div className="text-white py-5 flex justify-between items-center">
          <div className="text-lg font-semibold cursor-pointer">
               <span  className="text-[#8245ec]">
                  &lt;
               </span>
               <span className='text-white'>
                 Vipul
               </span>
               <span className='text-white'>
                 /
               </span>
               <span className='text-white'>
                  Kumar
               </span>
               <span className="text-[#8245ec]">
                  &gt;
               </span>
          </div>
          <ul className="hidden md:flex space-x-8 text-gray-300">
              {
                 menuItems.map((item)=>{
                     return (
                      <li
                      key={item.id}
                      onClick={() => setActiveSection(item.id)}
                      className={`cursor-pointer  hover:text-[#8245ec] ${
                        activeSection === item.id ? 'text-[#8245ec]' : ''
                      }`}
                    >
                              <button className={`hover:text-[#8245ec] ${
    activeSection === item.id ? 'text-[#8245ec]' : 'text-gray-300'
  } cursor-pointer`} >
                                 {item.label}
                              </button>
                            </li>
                     )
                            
                     
                 })
              }
          </ul>
           
      </div>
      
    </nav>
  )
}

export default Navbar
