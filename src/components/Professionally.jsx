import React from 'react'
import ProfessionallyImg from '../assets/img/png/profesnalsliderimg.png'
import { Link } from 'react-router-dom'
import { TrueIcon } from './common/Icon'
const Professionally = () => {
    return (
        <section className='bg-[#F9F9F9] relative'>
             <div className='blur-[120px] opacity-[0.5] hidden md:block  bg-[#F36A3E] w-[160px] h-[160px]  absolute top-[40%] lg:top-[35%] right-[30%]'></div>
            <div className="container mx-auto">
                <div className='md:flex items-center md:py-[80px]'>
                    <div className=' lg:w-7/12'  data-aos="fade-right" data-aos-duration="700" data-aos-delay="300" data-aos-easing="linear">
                        <h2 className='text-[#010101] font-Rubik text-[27px] md:text-[30px] font-medium pt-[40px] md:pt-0 pb-[15px] lg:max-w-[402px] relative'>20+ <span className='text-[#F36A3E]'>Professionally designed</span> resume sections</h2>
                        <p className='text-black font-Rubik text-[13px] md:text-[16px] font-normal leading-[150%] pb-[30px] md:pb-0 lg:max-w-[455px] '>Express your professional history without limitations or worry about how your resume looks</p>
                        <div className='flex mb-[22px] mt-[24px]'>
                            <div className='me-[12px] mt-[3px]  cursor-pointer'>
                                <TrueIcon />
                            </div>
                            <p className='font-normal text-black font-Rubik text-[13px] md:text-[16px] '>Professional sections like <span className='font-semibold'>Experience, Skills, Summary</span> and <span className='font-medium'>Education</span></p>
                        </div>
                        <div className='flex mb-[22px]'>
                            <div className='me-[12px] mt-[3px] cursor-pointer'>
                                <TrueIcon />
                            </div>
                            <p className='font-normal text-black font-Rubik text-[13px] md:text-[16px] '>Professional sections like <span className='font-semibold'>Strengths, Quotes, Books, Interests</span> and <span className='font-medium'>My Time.</span></p>
                        </div>
                        <div className='flex'>
                            <div className='me-[12px] mt-[3px] cursor-pointer'>
                                <TrueIcon />
                            </div>
                            <p className='font-normal text-black font-Rubik text-[13px] md:text-[16px] '>Professional sections like <span className='font-semibold'> Certifications, Awards, Achievements, Language</span> and <span className='font-medium'>Reference</span></p>
                        </div>
                        <div className='flex'>
                            <Link onClick={() => setShowNavbar(true)} className='px-[22px] py-[14px] mt-[40px] hidden md:block  xs:px-[38px] xs:py-[17px] bg-[#F36A3E] text-white common_btn rounded-[41px]  font-semibold font-Rubik hover:text-white  xs:me-[17px] ' to="/Touch">Get Started</Link>
                        </div>
                    </div>
                    <div className='pb-[50px] md:pb-0  lg:w-5/12  ' data-aos="fade-left" data-aos-duration="700" data-aos-delay="300" data-aos-easing="linear">
                        <img className='w-full' src={ProfessionallyImg} alt="image" />
                        <Link onClick={() => setShowNavbar(true)} className='px-[22px] py-[14px] mt-[40px] md:hidden  xs:px-[38px] xs:py-[17px] bg-[#F36A3E] text-white common_btn rounded-[41px]  font-semibold font-Rubik hover:text-white inline-block xs:me-[17px] ' to="/Touch">Get Started</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Professionally 