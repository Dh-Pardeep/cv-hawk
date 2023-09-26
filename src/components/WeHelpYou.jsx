import React from 'react'
import HelpYouImg from '../assets/img/png/HelpyouImg.png'
import { Link } from 'react-router-dom'
const WeHelpYou = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className='md:flex gap-[31px] md:pt-[120px] lg:pt-[150px] md:mb-[35px] lg:mb-[70px]'>
          <div className='md:w-6/12 lg:pt-[57px]'  data-aos="fade-left" data-aos-duration="800" data-aos-delay="300" data-aos-easing="linear">
            <h2 className='text-[#010101] font-Rubik text-[27px] md:text-[30px] font-medium pt-[100px] md:pt-0 pb-[15px] '>We’ll help you</h2>
            <p className='text-black font-Rubik text-[14px] font-normal leading-[150%] pb-[40px] md:pb-0 lg:max-w-[455px]'>Once you've booked a session, a confirmation email will be sent to the provided email address, containing all the necessary details, including the date, time, and instructions for the session.</p>
            <div className='flex'>
              <Link onClick={() => setShowNavbar(true)} className='px-[22px] py-[14px] mt-[40px] hidden md:block  xs:px-[38px] xs:py-[17px] bg-[#F36A3E] text-white common_btn rounded-[41px]  font-semibold font-Rubik hover:text-white  xs:me-[17px] ' to="/Touch"  >Book a Call</Link>
            </div>
          </div>
          <div className='mb-[100px] md:order-first md:w-6/12'  data-aos="fade-right" data-aos-duration="800" data-aos-delay="300" data-aos-easing="linear">
            <img className='w-full' src={HelpYouImg} alt="image" />
            <Link onClick={() => setShowNavbar(true)} className='px-[22px] py-[14px] mt-[40px] md:hidden  xs:px-[38px] xs:py-[17px] bg-[#F36A3E] text-white common_btn rounded-[41px]  font-semibold font-Rubik hover:text-white inline-block xs:me-[17px] ' to="/Touch" >Book a Call</Link>
          </div>
        </div>
      </div>
    </section >
  )
}

export default WeHelpYou