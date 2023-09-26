import React, { useState } from 'react'
import Logo from '../../assets/img/png/SiteLogo.png'
import { Link } from 'react-router-dom';
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
const MyNavBar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  if (showNavbar) {
    document.body.classList.remove('overflow-hidden');
  } else {
    document.body.classList.add('overflow-hidden')
  }
  return (
    <>
      <section className=' top-0 w-full z-[1000]'>
        <div className='container mx-auto'>
          <nav className='flex justify-between items-center py-1'>
            <img className='cursor-pointer w-[156px] h-[100px]' src={Logo} alt="Log" />
            <ul className={`${showNavbar ? 'flex items-center mb-0 nav_sm p-0' : 'flex items-center mb-0 nav_sm nav_show p-0'} `}>
              <li> <img className='cursor-pointer w-[156px] h-[100px] md:hidden mb-[38px]' src={Logo} alt="Log" /> </li>
              <li><Link onClick={() => setShowNavbar(true)} className='text-[#F36A3E] font-Rubik text-base hover:text-[#F36A3E] font-normal inline-block  relative after:container-[""] after:w-0 after:h-[2.5px] after:rounded-[50%] after:transition-all transition-all  after:ease-in-out ease-in-out after:duration-300 duration-300 after:bg-[#F36A3E] after:absolute after:bottom-0 hover:after:w-full hover:after:left-0 after:left-[50%]  ' to="/">Home</Link></li>
              <li><div className='w-[294px] h-[0.3px] opacity-[0.7] lg:hidden bg-[#CCCCCC] my-[24px]'></div></li>
              <li><Link onClick={() => setShowNavbar(true)} className='lg:ms-[41px] font-Rubik text-base hover:text-[#F36A3E] font-normal inline-block  relative after:container-[""] after:w-0 after:h-[2.5px] after:rounded-[50%] after:transition-all transition-all  after:ease-in-out ease-in-out after:duration-300 duration-300 after:bg-[#F36A3E] after:absolute after:bottom-0 hover:after:w-full hover:after:left-0 after:left-[50%]  text-[#252525]' to="/about">About Us</Link></li>
              <li><div className='w-[294px] h-[0.3px] opacity-[0.7] lg:hidden bg-[#CCCCCC] my-[24px]'></div></li>
              <li><Link onClick={() => setShowNavbar(true)} className='lg:ms-[41px] font-Rubik text-base hover:text-[#F36A3E] font-normal inline-block  relative after:container-[""] after:w-0 after:h-[2.5px] after:rounded-[50%] after:transition-all transition-all  after:ease-in-out ease-in-out after:duration-300 duration-300 after:bg-[#F36A3E] after:absolute after:bottom-0 hover:after:w-full hover:after:left-0 after:left-[50%]  text-[#252525]' to="/help">We’ll help you</Link></li>
              <li><div className='w-[294px] h-[0.3px] opacity-[0.7] lg:hidden bg-[#CCCCCC] my-[24px]'></div></li>
              <li><Link onClick={() => setShowNavbar(true)} className='lg:ms-[41px] font-Rubik text-base hover:text-[#F36A3E] font-normal inline-block  relative after:container-[""] after:w-0 after:h-[2.5px] after:rounded-[50%] after:transition-all transition-all  after:ease-in-out ease-in-out after:duration-300 duration-300 after:bg-[#F36A3E] after:absolute after:bottom-0 hover:after:w-full hover:after:left-0 after:left-[50%]  text-[#252525]' to="/Testimonials">Testimonials</Link></li>
              <li><Link onClick={() => setShowNavbar(true)} className='md:hidden px-[38px] py-[17px] bg-[#F36A3E] text-white  rounded-[41px] font-semibold font-Rubik inline-block mt-[60px]' to="/Touch">Get in Touch</Link></li>
              <span title="close" className="ms-4 close_nav text-white fw-bold lg:hidden" onClick={() => setShowNavbar(true)} ><RxCross2 fontSize={40} color='#F36A3E' /></span>
            </ul>
            <div className='flex items-center '>
              <ul className=''>
                <li><Link onClick={() => setShowNavbar(true)} className='px-[38px] py-[17px] bg-[#F36A3E] text-white  rounded-[41px] font-semibold font-Rubik me-[30px] lg:me-0 hidden md:block common_btn hover:bg-transparent' to="/Touch">Get in Touch</Link></li>
              </ul>
              <span title="open"
                className="inline-block lg:hidden fw-bold text-white"
                onClick={() => setShowNavbar(false)}>
                <RxHamburgerMenu fontSize={40} color='black' /></span>
            </div>
          </nav>
        </div>
      </section>
    </>
  )
}

export default MyNavBar