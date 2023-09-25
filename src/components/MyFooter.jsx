import React from 'react'
import FooterLogo from '../assets/img/png/FooterLogo.png'
import { FacebookIcon, InstagramIcon, MailIcon, PhoneIcon, TwitterIcon } from './common/Icon'
import { Link } from 'react-router-dom'
const MyFooter = () => {
    return (
        <footer className='bg-black'> 
            <div className='container mx-auto pt-[70px] md:pt-[100px] lg:pt-[210px]'>
                <div  className='md:flex justify-between items-center mb-[30px] md:mb-[50px] lg:mb-[70px]' >
                    <div className='md:w-4/12 lg:5/12'>
                        <img className='cursor-pointer w-[156px] h-[100px]' src={FooterLogo} alt="Log" />
                        <p className='opacity-[0.9] text-white font-Rubik text-[14px] md:text-[16px] font-normal md:max-w-[189px] lg:max-w-[373px] md:mb-0 mb-[30px]'>Sit urna ornare sed quam molestie sit placerat convallis. Ac condimentum mollis malesuada placerat in placerat id facilisis.</p>
                        <div className='md:flex pt-[32px] hidden'>
                            <TwitterIcon />
                            <div className='px-[32px]'>
                                <FacebookIcon />
                            </div>
                            <InstagramIcon />
                        </div>
                    </div>
                    <div className='sm:flex justify-between md:w-8/12 lg:w-7/12 pt-[20px ]' >
                        <div className='flex justify-between'>
                            <ul className='text-white font-Rubik '>
                                <li className='font-medium '>Quick Links</li>
                                <li><Link className='opacity-[0.8] mt-[20px] inline-block'>Home</Link></li>
                                <li><Link className='opacity-[0.8] mt-[20px] inline-block'>About</Link></li>
                                <li><Link className='opacity-[0.8] mt-[20px] inline-block'>We’ll help you</Link></li>
                                <li><Link className='opacity-[0.8] mt-[20px] inline-block'>Testimonials</Link></li>
                            </ul>
                            <ul className='text-white font-Rubik sm:hidden'>
                                <li className='font-medium'>Support</li>
                                <li><PhoneIcon /><Link className='opacity-[0.8]  mt-[20px] inline-block'>+012 345 67890</Link></li>
                                <li><MailIcon /><Link className='opacity-[0.8]  mt-[20px] inline-block'>Cvhawk@gmail.com</Link></li>
                            </ul>
                        </div>
                        <ul className='text-white font-Rubik '>
                            <li className='font-medium'>Support</li>
                            <li><PhoneIcon /><Link className='opacity-[0.8]  mt-[20px] inline-block'>+012 345 67890</Link></li>
                            <li><MailIcon /><Link className='opacity-[0.8]  mt-[20px] inline-block'>Cvhawk@gmail.com</Link></li>
                        </ul>
                        <ul className='text-white font-Rubik'>
                            <li className='font-medium mt-[30px] sm:mt-0'>Legal</li>
                            <li><Link className='opacity-[0.8] inline-block  mt-[20px]'>Privacy Policy</Link></li>
                            <li><Link className='opacity-[0.8] inline-block  mt-[20px]'>Terms & conditions</Link></li>
                        </ul>
                    </div>
                    <div className='flex pt-[32px] md:hidden'>
                        <TwitterIcon />
                        <div className='px-[32px]'>
                            <FacebookIcon />
                        </div>
                        <InstagramIcon />
                    </div>
                </div>
            </div>
            <div className='border-[0.5px] border-solid border-white opacity-[0.5]'></div>
            <h2 className='font-Rubik font-normal text-[14px] md:text-base text-[#FAFAFA] text-center py-[14px] opacity-[0.7]  '>Copyright@CVhawk2023</h2>
        </footer>
    )
}

export default MyFooter