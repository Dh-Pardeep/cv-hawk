import React from 'react'
import FooterLogo from '../assets/img/png/FooterLogo.png'
import { FacebookIcon, InstagramIcon, MailIcon, PhoneIcon, TwitterIcon } from './common/Icon'
import { Link } from 'react-router-dom'
const MyFooter = () => {
    return (
        <footer className='bg-black'>
            <div className='container mx-auto'>
                <div>
                    <div>
                        <img className='cursor-pointer w-[156px] h-[100px]' src={FooterLogo} alt="Log" />
                        <p className='opacity-[0.9] text-white font-Rubik text-[14px] md:text-[16px] font-normal md:max-w-[373px]'>Sit urna ornare sed quam molestie sit placerat convallis. Ac condimentum mollis malesuada placerat in placerat id facilisis.</p>
                        <div className='md:flex pt-[32px] hidden'>
                            <TwitterIcon />
                            <div className='px-[32px]'>
                                <FacebookIcon />
                            </div>
                            <InstagramIcon />
                        </div>
                    </div>
                    <div>
                        <ul className='text-white font-Rubik'>
                            <li>Quick Links</li>
                            <li><Link>Home</Link></li>
                            <li><Link>About</Link></li>
                            <li><Link>We’ll help you</Link></li>
                            <li><Link>Testimonials</Link></li>
                        </ul>
                        <ul className='text-white font-Rubik'>
                            <li>Support</li>
                            <li><PhoneIcon /><Link>+012 345 67890</Link></li>
                            <li><MailIcon /><Link>Cvhawk@gmail.com</Link></li>
                        </ul>
                        <ul className='text-white font-Rubik'>
                            <li>Legal</li>
                            <li><Link>Privacy Policy</Link></li>
                            <li><Link>Terms & conditions</Link></li>
                        </ul>
                    </div>
                    <div className='flex py-[32px]'>
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