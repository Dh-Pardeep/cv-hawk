import React, { useRef } from 'react'
import Slider from "react-slick";
import { StarIcon } from './common/Icon';
import SavannahImg from '../assets/img/png/Savannahimg.png'
import DarrellImg from '../assets/img/png/Darrell.png'
import JennyImg from '../assets/img/png/Jenny.png'
import EstherimgImg from '../assets/img/png/Esther.png'
import WadeImg from '../assets/img/png/Wade.png'
import CommentBoximg from '../assets/img/png/CommentBox.png'
import { slider } from '@material-tailwind/react';
const ClientsSlider = () => {
    const slider = React.useRef(null);
    var settingsThree = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        centerMode: true,
        centerPadding: '1px',
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                },
            },
        ],
    }
    var settingsfour = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        centerMode: true,
        centerPadding: '1px',
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                },
            },
        ],
    }
    return (
        <section className='bg-[#F9F9F9] '>
            <div className="container mx-auto relative">
                <h2 className="text-black font-medium text-[28px] md:text-[30px] lg:text-[40px]  font-Rubik leading-none text-center pt-[40px] md:pt-[60px] lg:pt-[80px] pb-[30px] md:pb-[40px] lg:pb-[45px]">What our Clients Say</h2>
                <div className='relative md:hidden'data-aos="zoom-in" data-aos-duration="800" data-aos-delay="300" data-aos-easing="linear">
                    <div onClick={() => slider?.current?.slickPrev()}
                        className="absolute left-[40%] bottom-[30px]  hover:bg-[#F36A3E] transition-all duration-300  ease-in-out leftarrow  sm:left-[43%] z-40 cursor-pointer w-[25px] h-[25px] md:w-[42px] md:h-[42px] border-[2px] border-solid border-[#F36A3E] rounded-[50%] flex items-center justify-center" >
                        <svg className="w-[16px] h-[16px] md:w-[24px] md:h-[24px] transition-all duration-300  ease-in-out" width="12" height="22" viewBox="0 0 12 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.1998 0.779111L0.993402 10.2235C0.831706 10.3894 0.741211 10.6119 0.741211 10.8436C0.741211 11.0752 0.831706 11.2977 0.993402 11.4636L10.1998 20.9116C10.2751 20.9889 10.3651 21.0504 10.4646 21.0924C10.5641 21.1344 10.671 21.156 10.7789 21.156C10.8869 21.156 10.9938 21.1344 11.0932 21.0924C11.1927 21.0504 11.2828 20.9889 11.3581 20.9116C11.5131 20.7529 11.5998 20.5399 11.5998 20.3182C11.5998 20.0964 11.5131 19.8834 11.3581 19.7248L2.70072 10.8436L11.3581 1.9641C11.5125 1.80554 11.5989 1.59295 11.5989 1.37161C11.5989 1.15027 11.5125 0.937676 11.3581 0.779111C11.2828 0.701752 11.1927 0.640265 11.0932 0.598282C10.9938 0.556298 10.8869 0.534668 10.7789 0.534668C10.671 0.534668 10.5641 0.556298 10.4646 0.598282C10.3651 0.640265 10.2751 0.701752 10.1998 0.779111Z" fill="#F36A3E" />
                        </svg>
                    </div>
                    <div onClick={() => slider?.current?.slickNext()}
                        className="absolute right-[40%] bottom-[30px] sm:right-[43%] z-40 cursor-pointer  hover:bg-[#F36A3E] transition-all duration-300  ease-in-out  rightarrow w-[25px] h-[25px] md:w-[42px] md:h-[42px] border-[2px] border-solid border-[#F36A3E] rounded-[50%] flex items-center justify-center">
                        <svg className="w-[16px] h-[16px] md:w-[24px] md:h-[24px] transition-all duration-300  ease-in-out" width="12" height="22" viewBox="0 0 12 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.14131 20.9116L11.3477 11.4671C11.5094 11.3013 11.5999 11.0788 11.5999 10.8471C11.5999 10.6155 11.5094 10.393 11.3477 10.2271L2.14131 0.779108C2.06599 0.701748 1.97593 0.640263 1.87646 0.598278C1.77699 0.556293 1.67011 0.534666 1.56214 0.534666C1.45417 0.534666 1.34729 0.556293 1.24782 0.598278C1.14834 0.640263 1.05829 0.701748 0.982965 0.779108C0.828007 0.937754 0.741254 1.15072 0.741254 1.37249C0.741254 1.59426 0.828007 1.80723 0.982965 1.96588L9.64035 10.8471L0.982965 19.7266C0.828538 19.8851 0.742121 20.0977 0.742121 20.3191C0.742121 20.5404 0.828538 20.753 0.982965 20.9116C1.05829 20.9889 1.14834 21.0504 1.24782 21.0924C1.34729 21.1344 1.45417 21.156 1.56214 21.156C1.67011 21.156 1.77699 21.1344 1.87646 21.0924C1.97593 21.0504 2.06599 20.9889 2.14131 20.9116Z" fill="#F36A3E" />
                        </svg>
                    </div>
                    <Slider ref={slider} {...settingsThree}>
                        <div className='px-[10px]'>
                            <div className='pb-[80px]'>
                                <div className='rounded-[10px] bg-white p-[16px] w-full relative'>
                                    <p className='text-[14px] md:text-[16px] font-Rubik text-black font-normal'>Magna ipsum erat magna nulla auctor. Phasellus consectetur aliquam vel at non faucibus viverra.</p>
                                    <img className='absolute bottom-[-25px] left-[28px]' src={CommentBoximg} alt="" />
                                </div>
                                <div className='flex mt-[29px] ms-[20px]'>
                                    <img className='rounded-[50%] me-[10px]' src={SavannahImg} alt="" />
                                    <div>
                                        <h2 className='text-[20px] font-normal font-Rubik '>Savannah Nguyen</h2>
                                        <div className='flex'>
                                            <StarIcon />
                                            <StarIcon />
                                            <StarIcon />
                                            <StarIcon />
                                            <StarIcon />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='px-[10px]'>
                            <div className='pb-[80px]'>
                                <div className='rounded-[10px] bg-white p-[16px] w-full  relative'>
                                    <p className='text-[14px] md:text-[16px] font-Rubik text-black font-normal'>Sit urna ornare sed quam molestie sit placerat convallis. Ac condimentum mollis malesuada placerat in placerat</p>
                                    <img className='absolute bottom-[-25px] left-[28px]' src={CommentBoximg} alt="" />
                                </div>
                                <div className='flex mt-[29px] ms-[20px]'>
                                    <img className='rounded-[50%] me-[10px]' src={DarrellImg} alt="" />
                                    <div>
                                        <h2 className='text-[20px] font-normal font-Rubik '>Darrell Steward</h2>
                                        <div className='flex'>
                                            <StarIcon />
                                            <StarIcon />
                                            <StarIcon />
                                            <StarIcon />
                                            <StarIcon />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='px-[10px]'>
                            <div className='pb-[80px]'>
                                <div className='rounded-[10px] bg-white p-[16px] w-full  relative'>
                                    <p className='text-[14px] md:text-[16px] font-Rubik text-black font-normal'>Urna ac eu cras pellentesque scelerisque et. Vestibulum sed felis leo leo massa elementum sit praesent</p>
                                    <img className='absolute bottom-[-25px] left-[28px]' src={CommentBoximg} alt="" />
                                </div>
                                <div className='flex mt-[29px] ms-[20px]'>
                                    <img className='rounded-[50%] me-[10px]' src={JennyImg} alt="" />
                                    <div>
                                        <h2 className='text-[20px] font-normal font-Rubik '>Jenny Wilson</h2>
                                        <div className='flex'>
                                            <StarIcon />
                                            <StarIcon />
                                            <StarIcon />
                                            <StarIcon />
                                            <StarIcon />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='px-[10px]'>
                            <div className='pb-[80px]'>
                                <div className='rounded-[10px] bg-white p-[16px] w-full  relative'>
                                    <p className='text-[14px] md:text-[16px] font-Rubik text-black font-normal'>Urna ac eu cras pellentesque scelerisque et. Vestibulum sed felis leo leo massa elementum sit praesent</p>
                                    <img className='absolute bottom-[-25px] left-[28px]' src={CommentBoximg} alt="" />
                                </div>
                                <div className='flex mt-[29px] ms-[20px]'>
                                    <img className='rounded-[50%] me-[10px]' src={JennyImg} alt="" />
                                    <div>
                                        <h2 className='text-[20px] font-normal font-Rubik '>Jenny Wilson</h2>
                                        <div className='flex'>
                                            <StarIcon />
                                            <StarIcon />
                                            <StarIcon />
                                            <StarIcon />
                                            <StarIcon />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='px-[10px]'>
                            <div className='pb-[80px]'>
                                <div className='rounded-[10px] bg-white p-[16px] w-full  relative'>
                                    <p className='text-[14px] md:text-[16px] font-Rubik text-black font-normal'>Nibh in commodo faucibus tincidunt. Adipiscing lobortis est elit neque sem scelerisque tellus magna urna.</p>
                                    <img className='absolute bottom-[-25px] left-[28px]' src={CommentBoximg} alt="" />
                                </div>
                                <div className='flex mt-[29px] ms-[20px]'>
                                    <img className='rounded-[50%] me-[10px]' src={WadeImg} alt="" />
                                    <div>
                                        <h2 className='text-[20px] font-normal font-Rubik '>Wade Warren</h2>
                                        <div className='flex'>
                                            <StarIcon />
                                            <StarIcon />
                                            <StarIcon />
                                            <StarIcon />
                                            <StarIcon />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
                <div className='relative hidden md:block lg:hidden'data-aos="zoom-in" data-aos-duration="800" data-aos-delay="300" data-aos-easing="linear">
                    <div onClick={() => slider?.current?.slickPrev()}
                        className="absolute left-[-1%] top-[40%] hover:bg-[#F36A3E] transition-all duration-300  ease-in-out leftarrow  z-40 cursor-pointer w-[25px] h-[25px] md:w-[42px] md:h-[42px] border-[2px] border-solid border-[#F36A3E] rounded-[50%] flex items-center justify-center" >
                        <svg className="w-[16px] h-[16px] md:w-[24px] md:h-[24px] transition-all duration-300  ease-in-out" width="12" height="22" viewBox="0 0 12 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.1998 0.779111L0.993402 10.2235C0.831706 10.3894 0.741211 10.6119 0.741211 10.8436C0.741211 11.0752 0.831706 11.2977 0.993402 11.4636L10.1998 20.9116C10.2751 20.9889 10.3651 21.0504 10.4646 21.0924C10.5641 21.1344 10.671 21.156 10.7789 21.156C10.8869 21.156 10.9938 21.1344 11.0932 21.0924C11.1927 21.0504 11.2828 20.9889 11.3581 20.9116C11.5131 20.7529 11.5998 20.5399 11.5998 20.3182C11.5998 20.0964 11.5131 19.8834 11.3581 19.7248L2.70072 10.8436L11.3581 1.9641C11.5125 1.80554 11.5989 1.59295 11.5989 1.37161C11.5989 1.15027 11.5125 0.937676 11.3581 0.779111C11.2828 0.701752 11.1927 0.640265 11.0932 0.598282C10.9938 0.556298 10.8869 0.534668 10.7789 0.534668C10.671 0.534668 10.5641 0.556298 10.4646 0.598282C10.3651 0.640265 10.2751 0.701752 10.1998 0.779111Z" fill="#F36A3E" />
                        </svg>
                    </div>
                    <div onClick={() => slider?.current?.slickNext()}
                        className="absolute right-[-1%] top-[40%] hover:bg-[#F36A3E] transition-all duration-300  ease-in-out  rightarrow  z-40 cursor-pointer w-[25px] h-[25px] md:w-[42px] md:h-[42px] border-[2px] border-solid border-[#F36A3E] rounded-[50%] flex items-center justify-center">
                        <svg className="w-[16px] h-[16px] md:w-[24px] md:h-[24px] transition-all duration-300  ease-in-out" width="12" height="22" viewBox="0 0 12 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.14131 20.9116L11.3477 11.4671C11.5094 11.3013 11.5999 11.0788 11.5999 10.8471C11.5999 10.6155 11.5094 10.393 11.3477 10.2271L2.14131 0.779108C2.06599 0.701748 1.97593 0.640263 1.87646 0.598278C1.77699 0.556293 1.67011 0.534666 1.56214 0.534666C1.45417 0.534666 1.34729 0.556293 1.24782 0.598278C1.14834 0.640263 1.05829 0.701748 0.982965 0.779108C0.828007 0.937754 0.741254 1.15072 0.741254 1.37249C0.741254 1.59426 0.828007 1.80723 0.982965 1.96588L9.64035 10.8471L0.982965 19.7266C0.828538 19.8851 0.742121 20.0977 0.742121 20.3191C0.742121 20.5404 0.828538 20.753 0.982965 20.9116C1.05829 20.9889 1.14834 21.0504 1.24782 21.0924C1.34729 21.1344 1.45417 21.156 1.56214 21.156C1.67011 21.156 1.77699 21.1344 1.87646 21.0924C1.97593 21.0504 2.06599 20.9889 2.14131 20.9116Z" fill="#F36A3E" />
                        </svg>
                    </div>
                    <Slider ref={slider} {...settingsfour} className='pb-[50px]'>
                        <div className='px-[30px]'>
                            <div className='flex '>
                                <div className='me-[30px]'>
                                    <div className='rounded-[10px] bg-white p-[16px] w-full  relative'>
                                        <p className='text-[14px] md:text-[16px] font-Rubik text-black font-normal'>Sit urna ornare sed quam molestie sit placerat convallis. Ac condimentum mollis malesuada placerat in placerat</p>
                                        <img className='absolute bottom-[-25px] left-[28px]' src={CommentBoximg} alt="" />
                                    </div>
                                    <div className='flex mt-[29px] ms-[20px]'>
                                        <img className='rounded-[50%] me-[10px]' src={DarrellImg} alt="" />
                                        <div>
                                            <h2 className='text-[20px] font-normal font-Rubik '>Darrell Steward</h2>
                                            <div className='flex'>
                                                <StarIcon />
                                                <StarIcon />
                                                <StarIcon />
                                                <StarIcon />
                                                <StarIcon />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='pt-[40px]'>
                                    <div className='rounded-[10px] bg-white p-[16px] w-full relative'>
                                        <p className='text-[14px] md:text-[16px] font-Rubik text-black font-normal'>Magna ipsum erat magna nulla auctor. Phasellus consectetur aliquam vel at non faucibus viverra.</p>
                                        <img className='absolute bottom-[-25px] left-[28px]' src={CommentBoximg} alt="" />
                                    </div>
                                    <div className='flex mt-[29px] ms-[20px]'>
                                        <img className='rounded-[50%] me-[10px]' src={SavannahImg} alt="" />
                                        <div>
                                            <h2 className='text-[20px] font-normal font-Rubik '>Savannah Nguyen</h2>
                                            <div className='flex'>
                                                <StarIcon />
                                                <StarIcon />
                                                <StarIcon />
                                                <StarIcon />
                                                <StarIcon />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex pt-[40px]'>
                                <div className='me-[70px]'>
                                    <div className='rounded-[10px] bg-white p-[16px] w-full  relative'>
                                        <p className='text-[14px] md:text-[16px] font-Rubik text-black font-normal'>Urna ac eu cras pellentesque scelerisque et. Vestibulum sed felis leo leo massa elementum sit praesent</p>
                                        <img className='absolute bottom-[-25px] left-[28px]' src={CommentBoximg} alt="" />
                                    </div>
                                    <div className='flex mt-[29px] ms-[20px]'>
                                        <img className='rounded-[50%] me-[10px]' src={JennyImg} alt="" />
                                        <div>
                                            <h2 className='text-[20px] font-normal font-Rubik '>Jenny Wilson</h2>
                                            <div className='flex'>
                                                <StarIcon />
                                                <StarIcon />
                                                <StarIcon />
                                                <StarIcon />
                                                <StarIcon />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='pt-[40px]'>
                                    <div className='rounded-[10px] bg-white p-[16px] w-full  relative'>
                                        <p className='text-[14px] md:text-[16px] font-Rubik text-black font-normal'>Nibh in commodo faucibus tincidunt. Adipiscing lobortis est elit neque sem scelerisque tellus magna urna.</p>
                                        <img className='absolute bottom-[-25px] left-[28px]' src={CommentBoximg} alt="" />
                                    </div>
                                    <div className='flex mt-[29px] ms-[20px]'>
                                        <img className='rounded-[50%] me-[10px]' src={WadeImg} alt="" />
                                        <div>
                                            <h2 className='text-[20px] font-normal font-Rubik '>Wade Warren</h2>
                                            <div className='flex'>
                                                <StarIcon />
                                                <StarIcon />
                                                <StarIcon />
                                                <StarIcon />
                                                <StarIcon />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='px-[30px]'>
                            <div className='flex '>
                                <div className='pt-[40px]'>
                                    <div className='rounded-[10px] bg-white p-[16px] w-full relative'>
                                        <p className='text-[14px] md:text-[16px] font-Rubik text-black font-normal'>Magna ipsum erat magna nulla auctor. Phasellus consectetur aliquam vel at non faucibus viverra.</p>
                                        <img className='absolute bottom-[-25px] left-[28px]' src={CommentBoximg} alt="" />
                                    </div>
                                    <div className='flex mt-[29px] ms-[20px]'>
                                        <img className='rounded-[50%] me-[10px]' src={SavannahImg} alt="" />
                                        <div>
                                            <h2 className='text-[20px] font-normal font-Rubik '>Savannah Nguyen</h2>
                                            <div className='flex'>
                                                <StarIcon />
                                                <StarIcon />
                                                <StarIcon />
                                                <StarIcon />
                                                <StarIcon />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='ms-[30px]'>
                                    <div className='rounded-[10px] bg-white p-[16px] w-full  relative'>
                                        <p className='text-[14px] md:text-[16px] font-Rubik text-black font-normal'>Sit urna ornare sed quam molestie sit placerat convallis. Ac condimentum mollis malesuada placerat in placerat</p>
                                        <img className='absolute bottom-[-25px] left-[28px]' src={CommentBoximg} alt="" />
                                    </div>
                                    <div className='flex mt-[29px] ms-[20px]'>
                                        <img className='rounded-[50%] me-[10px]' src={DarrellImg} alt="" />
                                        <div>
                                            <h2 className='text-[20px] font-normal font-Rubik '>Darrell Steward</h2>
                                            <div className='flex'>
                                                <StarIcon />
                                                <StarIcon />
                                                <StarIcon />
                                                <StarIcon />
                                                <StarIcon />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex pt-[40px]'>
                                <div className='pt-[40px]'>
                                    <div className='rounded-[10px] bg-white p-[16px] w-full  relative'>
                                        <p className='text-[14px] md:text-[16px] font-Rubik text-black font-normal'>Nibh in commodo faucibus tincidunt. Adipiscing lobortis est elit neque sem scelerisque tellus magna urna.</p>
                                        <img className='absolute bottom-[-25px] left-[28px]' src={CommentBoximg} alt="" />
                                    </div>
                                    <div className='flex mt-[29px] ms-[20px]'>
                                        <img className='rounded-[50%] me-[10px]' src={WadeImg} alt="" />
                                        <div>
                                            <h2 className='text-[20px] font-normal font-Rubik '>Wade Warren</h2>
                                            <div className='flex'>
                                                <StarIcon />
                                                <StarIcon />
                                                <StarIcon />
                                                <StarIcon />
                                                <StarIcon />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='ms-[70px]'>
                                    <div className='rounded-[10px] bg-white p-[16px] w-full  relative'>
                                        <p className='text-[14px] md:text-[16px] font-Rubik text-black font-normal'>Urna ac eu cras pellentesque scelerisque et. Vestibulum sed felis leo leo massa elementum sit praesent</p>
                                        <img className='absolute bottom-[-25px] left-[28px]' src={CommentBoximg} alt="" />
                                    </div>
                                    <div className='flex mt-[29px] ms-[20px]'>
                                        <img className='rounded-[50%] me-[10px]' src={JennyImg} alt="" />
                                        <div>
                                            <h2 className='text-[20px] font-normal font-Rubik '>Jenny Wilson</h2>
                                            <div className='flex'>
                                                <StarIcon />
                                                <StarIcon />
                                                <StarIcon />
                                                <StarIcon />
                                                <StarIcon />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='px-[30px]'>
                            <div className='flex '>
                                <div className='me-[30px]'>
                                    <div className='rounded-[10px] bg-white p-[16px] w-full  relative'>
                                        <p className='text-[14px] md:text-[16px] font-Rubik text-black font-normal'>Sit urna ornare sed quam molestie sit placerat convallis. Ac condimentum mollis malesuada placerat in placerat</p>
                                        <img className='absolute bottom-[-25px] left-[28px]' src={CommentBoximg} alt="" />
                                    </div>
                                    <div className='flex mt-[29px] ms-[20px]'>
                                        <img className='rounded-[50%] me-[10px]' src={DarrellImg} alt="" />
                                        <div>
                                            <h2 className='text-[20px] font-normal font-Rubik '>Darrell Steward</h2>
                                            <div className='flex'>
                                                <StarIcon />
                                                <StarIcon />
                                                <StarIcon />
                                                <StarIcon />
                                                <StarIcon />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='pt-[40px]'>
                                    <div className='rounded-[10px] bg-white p-[16px] w-full relative'>
                                        <p className='text-[14px] md:text-[16px] font-Rubik text-black font-normal'>Magna ipsum erat magna nulla auctor. Phasellus consectetur aliquam vel at non faucibus viverra.</p>
                                        <img className='absolute bottom-[-25px] left-[28px]' src={CommentBoximg} alt="" />
                                    </div>
                                    <div className='flex mt-[29px] ms-[20px]'>
                                        <img className='rounded-[50%] me-[10px]' src={SavannahImg} alt="" />
                                        <div>
                                            <h2 className='text-[20px] font-normal font-Rubik '>Savannah Nguyen</h2>
                                            <div className='flex'>
                                                <StarIcon />
                                                <StarIcon />
                                                <StarIcon />
                                                <StarIcon />
                                                <StarIcon />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex pt-[40px]'>
                                <div className='me-[70px]'>
                                    <div className='rounded-[10px] bg-white p-[16px] w-full  relative'>
                                        <p className='text-[14px] md:text-[16px] font-Rubik text-black font-normal'>Urna ac eu cras pellentesque scelerisque et. Vestibulum sed felis leo leo massa elementum sit praesent</p>
                                        <img className='absolute bottom-[-25px] left-[28px]' src={CommentBoximg} alt="" />
                                    </div>
                                    <div className='flex mt-[29px] ms-[20px]'>
                                        <img className='rounded-[50%] me-[10px]' src={JennyImg} alt="" />
                                        <div>
                                            <h2 className='text-[20px] font-normal font-Rubik '>Jenny Wilson</h2>
                                            <div className='flex'>
                                                <StarIcon />
                                                <StarIcon />
                                                <StarIcon />
                                                <StarIcon />
                                                <StarIcon />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='pt-[40px]'>
                                    <div className='rounded-[10px] bg-white p-[16px] w-full  relative'>
                                        <p className='text-[14px] md:text-[16px] font-Rubik text-black font-normal'>Nibh in commodo faucibus tincidunt. Adipiscing lobortis est elit neque sem scelerisque tellus magna urna.</p>
                                        <img className='absolute bottom-[-25px] left-[28px]' src={CommentBoximg} alt="" />
                                    </div>
                                    <div className='flex mt-[29px] ms-[20px]'>
                                        <img className='rounded-[50%] me-[10px]' src={WadeImg} alt="" />
                                        <div>
                                            <h2 className='text-[20px] font-normal font-Rubik '>Wade Warren</h2>
                                            <div className='flex'>
                                                <StarIcon />
                                                <StarIcon />
                                                <StarIcon />
                                                <StarIcon />
                                                <StarIcon />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='px-[30px]'>
                            <div className='flex '>
                                <div className='pt-[40px]'>
                                    <div className='rounded-[10px] bg-white p-[16px] w-full relative'>
                                        <p className='text-[14px] md:text-[16px] font-Rubik text-black font-normal'>Magna ipsum erat magna nulla auctor. Phasellus consectetur aliquam vel at non faucibus viverra.</p>
                                        <img className='absolute bottom-[-25px] left-[28px]' src={CommentBoximg} alt="" />
                                    </div>
                                    <div className='flex mt-[29px] ms-[20px]'>
                                        <img className='rounded-[50%] me-[10px]' src={SavannahImg} alt="" />
                                        <div>
                                            <h2 className='text-[20px] font-normal font-Rubik '>Savannah Nguyen</h2>
                                            <div className='flex'>
                                                <StarIcon />
                                                <StarIcon />
                                                <StarIcon />
                                                <StarIcon />
                                                <StarIcon />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='ms-[30px]'>
                                    <div className='rounded-[10px] bg-white p-[16px] w-full  relative'>
                                        <p className='text-[14px] md:text-[16px] font-Rubik text-black font-normal'>Sit urna ornare sed quam molestie sit placerat convallis. Ac condimentum mollis malesuada placerat in placerat</p>
                                        <img className='absolute bottom-[-25px] left-[28px]' src={CommentBoximg} alt="" />
                                    </div>
                                    <div className='flex mt-[29px] ms-[20px]'>
                                        <img className='rounded-[50%] me-[10px]' src={DarrellImg} alt="" />
                                        <div>
                                            <h2 className='text-[20px] font-normal font-Rubik '>Darrell Steward</h2>
                                            <div className='flex'>
                                                <StarIcon />
                                                <StarIcon />
                                                <StarIcon />
                                                <StarIcon />
                                                <StarIcon />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex pt-[40px]'>
                                <div className='pt-[40px]'>
                                    <div className='rounded-[10px] bg-white p-[16px] w-full  relative'>
                                        <p className='text-[14px] md:text-[16px] font-Rubik text-black font-normal'>Nibh in commodo faucibus tincidunt. Adipiscing lobortis est elit neque sem scelerisque tellus magna urna.</p>
                                        <img className='absolute bottom-[-25px] left-[28px]' src={CommentBoximg} alt="" />
                                    </div>
                                    <div className='flex mt-[29px] ms-[20px]'>
                                        <img className='rounded-[50%] me-[10px]' src={WadeImg} alt="" />
                                        <div>
                                            <h2 className='text-[20px] font-normal font-Rubik '>Wade Warren</h2>
                                            <div className='flex'>
                                                <StarIcon />
                                                <StarIcon />
                                                <StarIcon />
                                                <StarIcon />
                                                <StarIcon />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='ms-[70px]'>
                                    <div className='rounded-[10px] bg-white p-[16px] w-full  relative'>
                                        <p className='text-[14px] md:text-[16px] font-Rubik text-black font-normal'>Urna ac eu cras pellentesque scelerisque et. Vestibulum sed felis leo leo massa elementum sit praesent</p>
                                        <img className='absolute bottom-[-25px] left-[28px]' src={CommentBoximg} alt="" />
                                    </div>
                                    <div className='flex mt-[29px] ms-[20px]'>
                                        <img className='rounded-[50%] me-[10px]' src={JennyImg} alt="" />
                                        <div>
                                            <h2 className='text-[20px] font-normal font-Rubik '>Jenny Wilson</h2>
                                            <div className='flex'>
                                                <StarIcon />
                                                <StarIcon />
                                                <StarIcon />
                                                <StarIcon />
                                                <StarIcon />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
                <div className='relative hidden lg:block 'data-aos="zoom-in" data-aos-duration="800" data-aos-delay="300" data-aos-easing="linear">
                    <div onClick={() => slider?.current?.slickPrev()}
                        className="absolute left-[-3%] top-[40%] hover:bg-[#F36A3E] transition-all duration-300  ease-in-out leftarrow z-40 cursor-pointer w-[25px] h-[25px] md:w-[42px] md:h-[42px] border-[2px] border-solid border-[#F36A3E] rounded-[50%] flex items-center justify-center" >
                        <svg className="w-[16px] h-[16px] md:w-[24px] md:h-[24px] transition-all duration-300  ease-in-out" width="12" height="22" viewBox="0 0 12 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.1998 0.779111L0.993402 10.2235C0.831706 10.3894 0.741211 10.6119 0.741211 10.8436C0.741211 11.0752 0.831706 11.2977 0.993402 11.4636L10.1998 20.9116C10.2751 20.9889 10.3651 21.0504 10.4646 21.0924C10.5641 21.1344 10.671 21.156 10.7789 21.156C10.8869 21.156 10.9938 21.1344 11.0932 21.0924C11.1927 21.0504 11.2828 20.9889 11.3581 20.9116C11.5131 20.7529 11.5998 20.5399 11.5998 20.3182C11.5998 20.0964 11.5131 19.8834 11.3581 19.7248L2.70072 10.8436L11.3581 1.9641C11.5125 1.80554 11.5989 1.59295 11.5989 1.37161C11.5989 1.15027 11.5125 0.937676 11.3581 0.779111C11.2828 0.701752 11.1927 0.640265 11.0932 0.598282C10.9938 0.556298 10.8869 0.534668 10.7789 0.534668C10.671 0.534668 10.5641 0.556298 10.4646 0.598282C10.3651 0.640265 10.2751 0.701752 10.1998 0.779111Z" fill="#F36A3E" />
                        </svg>
                    </div>
                    <div onClick={() => slider?.current?.slickNext()}
                        className="absolute right-[-3%] top-[40%] hover:bg-[#F36A3E] transition-all duration-300  ease-in-out  rightarrow z-40 cursor-pointer w-[25px] h-[25px] md:w-[42px] md:h-[42px] border-[2px] border-solid border-[#F36A3E] rounded-[50%] flex items-center justify-center">
                        <svg className="w-[16px] h-[16px] md:w-[24px] md:h-[24px] transition-all duration-300  ease-in-out" width="12" height="22" viewBox="0 0 12 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.14131 20.9116L11.3477 11.4671C11.5094 11.3013 11.5999 11.0788 11.5999 10.8471C11.5999 10.6155 11.5094 10.393 11.3477 10.2271L2.14131 0.779108C2.06599 0.701748 1.97593 0.640263 1.87646 0.598278C1.77699 0.556293 1.67011 0.534666 1.56214 0.534666C1.45417 0.534666 1.34729 0.556293 1.24782 0.598278C1.14834 0.640263 1.05829 0.701748 0.982965 0.779108C0.828007 0.937754 0.741254 1.15072 0.741254 1.37249C0.741254 1.59426 0.828007 1.80723 0.982965 1.96588L9.64035 10.8471L0.982965 19.7266C0.828538 19.8851 0.742121 20.0977 0.742121 20.3191C0.742121 20.5404 0.828538 20.753 0.982965 20.9116C1.05829 20.9889 1.14834 21.0504 1.24782 21.0924C1.34729 21.1344 1.45417 21.156 1.56214 21.156C1.67011 21.156 1.77699 21.1344 1.87646 21.0924C1.97593 21.0504 2.06599 20.9889 2.14131 20.9116Z" fill="#F36A3E" />
                        </svg>
                    </div>
                    <Slider ref={slider} {...settingsfour} className='pb-[80px]'>
                        <div className='px-[30px]'>
                            <div className='flex '>
                                <div className='me-[25px] pt-[40px] w-[4/12]'>
                                    <div className='rounded-[10px] bg-white p-[16px] w-full  relative'>
                                        <p className='text-[14px] md:text-[16px] font-Rubik text-black font-normal'>Sit urna ornare sed quam molestie sit placerat convallis. Ac condimentum mollis malesuada placerat in placerat</p>
                                        <img className='absolute bottom-[-25px] left-[28px]' src={CommentBoximg} alt="" />
                                    </div>
                                    <div className='flex mt-[29px] ms-[20px]'>
                                        <img className='rounded-[50%] me-[10px]' src={DarrellImg} alt="" />
                                        <div>
                                            <h2 className='text-[20px] font-normal font-Rubik '>Darrell Steward</h2>
                                            <div className='flex'>
                                                <StarIcon />
                                                <StarIcon />
                                                <StarIcon />
                                                <StarIcon />
                                                <StarIcon />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='w-[4/12]'>
                                    <div className='rounded-[10px] bg-white p-[16px] w-full relative'>
                                        <p className='text-[14px] md:text-[16px] font-Rubik text-black font-normal'>Magna ipsum erat magna nulla auctor. Phasellus consectetur aliquam vel at non faucibus viverra.</p>
                                        <img className='absolute bottom-[-25px] left-[28px]' src={CommentBoximg} alt="" />
                                    </div>
                                    <div className='flex mt-[29px] ms-[20px]'>
                                        <img className='rounded-[50%] me-[10px]' src={SavannahImg} alt="" />
                                        <div>
                                            <h2 className='text-[20px] font-normal font-Rubik '>Savannah Nguyen</h2>
                                            <div className='flex'>
                                                <StarIcon />
                                                <StarIcon />
                                                <StarIcon />
                                                <StarIcon />
                                                <StarIcon />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='ms-[25px] pt-[40px] w-[4/12]'>
                                    <div className='rounded-[10px] bg-white p-[16px] w-full  relative'>
                                        <p className='text-[14px] md:text-[16px] font-Rubik text-black font-normal'>Morbi leo ullamcorper in et viverra. Neque elit scelerisque purus praesent nulla ut a id.</p>
                                        <img className='absolute bottom-[-25px] left-[28px]' src={CommentBoximg} alt="" />
                                    </div>
                                    <div className='flex mt-[29px] ms-[20px]'>
                                        <img className='rounded-[50%] me-[10px]' src={EstherimgImg} alt="" />
                                        <div>
                                            <h2 className='text-[20px] font-normal font-Rubik '>Esther Howard</h2>
                                            <div className='flex'>
                                                <StarIcon />
                                                <StarIcon />
                                                <StarIcon />
                                                <StarIcon />
                                                <StarIcon />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex items-center justify-center pt-[40px]'>
                                <div className='me-[70px]'>
                                    <div className='rounded-[10px] bg-white p-[16px] w-[330px]  relative'>
                                        <p className='text-[14px] md:text-[16px] font-Rubik text-black font-normal'>Urna ac eu cras pellentesque scelerisque et. Vestibulum sed felis leo leo massa elementum sit praesent</p>
                                        <img className='absolute bottom-[-25px] left-[28px]' src={CommentBoximg} alt="" />
                                    </div>
                                    <div className='flex mt-[29px] ms-[20px]'>
                                        <img className='rounded-[50%] me-[10px]' src={JennyImg} alt="" />
                                        <div>
                                            <h2 className='text-[20px] font-normal font-Rubik '>Jenny Wilson</h2>
                                            <div className='flex'>
                                                <StarIcon />
                                                <StarIcon />
                                                <StarIcon />
                                                <StarIcon />
                                                <StarIcon />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='pt-[40px]'>
                                    <div className='rounded-[10px] bg-white p-[16px] w-[330px] relative'>
                                        <p className='text-[14px] md:text-[16px] font-Rubik text-black font-normal'>Nibh in commodo faucibus tincidunt. Adipiscing lobortis est elit neque sem scelerisque tellus magna urna.</p>
                                        <img className='absolute bottom-[-25px] left-[28px]' src={CommentBoximg} alt="" />
                                    </div>
                                    <div className='flex mt-[29px] ms-[20px]'>
                                        <img className='rounded-[50%] me-[10px]' src={WadeImg} alt="" />
                                        <div>
                                            <h2 className='text-[20px] font-normal font-Rubik '>Wade Warren</h2>
                                            <div className='flex'>
                                                <StarIcon />
                                                <StarIcon />
                                                <StarIcon />
                                                <StarIcon />
                                                <StarIcon />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='px-[30px]'>
                            <div className='flex '>
                                <div className='me-[25px]  w-[4/12]'>
                                    <div className='rounded-[10px] bg-white p-[16px] w-full  relative'>
                                        <p className='text-[14px] md:text-[16px] font-Rubik text-black font-normal'>Sit urna ornare sed quam molestie sit placerat convallis. Ac condimentum mollis malesuada placerat in placerat</p>
                                        <img className='absolute bottom-[-25px] left-[28px]' src={CommentBoximg} alt="" />
                                    </div>
                                    <div className='flex mt-[29px] ms-[20px]'>
                                        <img className='rounded-[50%] me-[10px]' src={DarrellImg} alt="" />
                                        <div>
                                            <h2 className='text-[20px] font-normal font-Rubik '>Darrell Steward</h2>
                                            <div className='flex'>
                                                <StarIcon />
                                                <StarIcon />
                                                <StarIcon />
                                                <StarIcon />
                                                <StarIcon />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='w-[4/12] pt-[40px]'>
                                    <div className='rounded-[10px] bg-white p-[16px] w-full relative'>
                                        <p className='text-[14px] md:text-[16px] font-Rubik text-black font-normal'>Magna ipsum erat magna nulla auctor. Phasellus consectetur aliquam vel at non faucibus viverra.</p>
                                        <img className='absolute bottom-[-25px] left-[28px]' src={CommentBoximg} alt="" />
                                    </div>
                                    <div className='flex mt-[29px] ms-[20px]'>
                                        <img className='rounded-[50%] me-[10px]' src={SavannahImg} alt="" />
                                        <div>
                                            <h2 className='text-[20px] font-normal font-Rubik '>Savannah Nguyen</h2>
                                            <div className='flex'>
                                                <StarIcon />
                                                <StarIcon />
                                                <StarIcon />
                                                <StarIcon />
                                                <StarIcon />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='ms-[25px] pt-[40px] w-[4/12]'>
                                    <div className='rounded-[10px] bg-white p-[16px] w-full  relative'>
                                        <p className='text-[14px] md:text-[16px] font-Rubik text-black font-normal'>Morbi leo ullamcorper in et viverra. Neque elit scelerisque purus praesent nulla ut a id.</p>
                                        <img className='absolute bottom-[-25px] left-[28px]' src={CommentBoximg} alt="" />
                                    </div>
                                    <div className='flex mt-[29px] ms-[20px]'>
                                        <img className='rounded-[50%] me-[10px]' src={EstherimgImg} alt="" />
                                        <div>
                                            <h2 className='text-[20px] font-normal font-Rubik '>Esther Howard</h2>
                                            <div className='flex'>
                                                <StarIcon />
                                                <StarIcon />
                                                <StarIcon />
                                                <StarIcon />
                                                <StarIcon />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex items-center justify-center pt-[40px]'>
                                <div className='me-[70px] pt-[40px]'>
                                    <div className='rounded-[10px] bg-white p-[16px] w-[330px]  relative'>
                                        <p className='text-[14px] md:text-[16px] font-Rubik text-black font-normal'>Urna ac eu cras pellentesque scelerisque et. Vestibulum sed felis leo leo massa elementum sit praesent</p>
                                        <img className='absolute bottom-[-25px] left-[28px]' src={CommentBoximg} alt="" />
                                    </div>
                                    <div className='flex mt-[29px] ms-[20px]'>
                                        <img className='rounded-[50%] me-[10px]' src={JennyImg} alt="" />
                                        <div>
                                            <h2 className='text-[20px] font-normal font-Rubik '>Jenny Wilson</h2>
                                            <div className='flex'>
                                                <StarIcon />
                                                <StarIcon />
                                                <StarIcon />
                                                <StarIcon />
                                                <StarIcon />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className=''>
                                    <div className='rounded-[10px] bg-white p-[16px] w-[330px] relative'>
                                        <p className='text-[14px] md:text-[16px] font-Rubik text-black font-normal'>Nibh in commodo faucibus tincidunt. Adipiscing lobortis est elit neque sem scelerisque tellus magna urna.</p>
                                        <img className='absolute bottom-[-25px] left-[28px]' src={CommentBoximg} alt="" />
                                    </div>
                                    <div className='flex mt-[29px] ms-[20px]'>
                                        <img className='rounded-[50%] me-[10px]' src={WadeImg} alt="" />
                                        <div>
                                            <h2 className='text-[20px] font-normal font-Rubik '>Wade Warren</h2>
                                            <div className='flex'>
                                                <StarIcon />
                                                <StarIcon />
                                                <StarIcon />
                                                <StarIcon />
                                                <StarIcon />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='px-[30px]'>
                            <div className='flex '>
                                <div className='me-[25px] pt-[40px] w-[4/12]'>
                                    <div className='rounded-[10px] bg-white p-[16px] w-full  relative'>
                                        <p className='text-[14px] md:text-[16px] font-Rubik text-black font-normal'>Sit urna ornare sed quam molestie sit placerat convallis. Ac condimentum mollis malesuada placerat in placerat</p>
                                        <img className='absolute bottom-[-25px] left-[28px]' src={CommentBoximg} alt="" />
                                    </div>
                                    <div className='flex mt-[29px] ms-[20px]'>
                                        <img className='rounded-[50%] me-[10px]' src={DarrellImg} alt="" />
                                        <div>
                                            <h2 className='text-[20px] font-normal font-Rubik '>Darrell Steward</h2>
                                            <div className='flex'>
                                                <StarIcon />
                                                <StarIcon />
                                                <StarIcon />
                                                <StarIcon />
                                                <StarIcon />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='w-[4/12]'>
                                    <div className='rounded-[10px] bg-white p-[16px] w-full relative'>
                                        <p className='text-[14px] md:text-[16px] font-Rubik text-black font-normal'>Magna ipsum erat magna nulla auctor. Phasellus consectetur aliquam vel at non faucibus viverra.</p>
                                        <img className='absolute bottom-[-25px] left-[28px]' src={CommentBoximg} alt="" />
                                    </div>
                                    <div className='flex mt-[29px] ms-[20px]'>
                                        <img className='rounded-[50%] me-[10px]' src={SavannahImg} alt="" />
                                        <div>
                                            <h2 className='text-[20px] font-normal font-Rubik '>Savannah Nguyen</h2>
                                            <div className='flex'>
                                                <StarIcon />
                                                <StarIcon />
                                                <StarIcon />
                                                <StarIcon />
                                                <StarIcon />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='ms-[25px] pt-[40px] w-[4/12]'>
                                    <div className='rounded-[10px] bg-white p-[16px] w-full  relative'>
                                        <p className='text-[14px] md:text-[16px] font-Rubik text-black font-normal'>Morbi leo ullamcorper in et viverra. Neque elit scelerisque purus praesent nulla ut a id.</p>
                                        <img className='absolute bottom-[-25px] left-[28px]' src={CommentBoximg} alt="" />
                                    </div>
                                    <div className='flex mt-[29px] ms-[20px]'>
                                        <img className='rounded-[50%] me-[10px]' src={EstherimgImg} alt="" />
                                        <div>
                                            <h2 className='text-[20px] font-normal font-Rubik '>Esther Howard</h2>
                                            <div className='flex'>
                                                <StarIcon />
                                                <StarIcon />
                                                <StarIcon />
                                                <StarIcon />
                                                <StarIcon />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex items-center justify-center pt-[40px]'>
                                <div className='me-[70px]'>
                                    <div className='rounded-[10px] bg-white p-[16px] w-[330px]  relative'>
                                        <p className='text-[14px] md:text-[16px] font-Rubik text-black font-normal'>Urna ac eu cras pellentesque scelerisque et. Vestibulum sed felis leo leo massa elementum sit praesent</p>
                                        <img className='absolute bottom-[-25px] left-[28px]' src={CommentBoximg} alt="" />
                                    </div>
                                    <div className='flex mt-[29px] ms-[20px]'>
                                        <img className='rounded-[50%] me-[10px]' src={JennyImg} alt="" />
                                        <div>
                                            <h2 className='text-[20px] font-normal font-Rubik '>Jenny Wilson</h2>
                                            <div className='flex'>
                                                <StarIcon />
                                                <StarIcon />
                                                <StarIcon />
                                                <StarIcon />
                                                <StarIcon />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='pt-[40px]'>
                                    <div className='rounded-[10px] bg-white p-[16px] w-[330px] relative'>
                                        <p className='text-[14px] md:text-[16px] font-Rubik text-black font-normal'>Nibh in commodo faucibus tincidunt. Adipiscing lobortis est elit neque sem scelerisque tellus magna urna.</p>
                                        <img className='absolute bottom-[-25px] left-[28px]' src={CommentBoximg} alt="" />
                                    </div>
                                    <div className='flex mt-[29px] ms-[20px]'>
                                        <img className='rounded-[50%] me-[10px]' src={WadeImg} alt="" />
                                        <div>
                                            <h2 className='text-[20px] font-normal font-Rubik '>Wade Warren</h2>
                                            <div className='flex'>
                                                <StarIcon />
                                                <StarIcon />
                                                <StarIcon />
                                                <StarIcon />
                                                <StarIcon />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='px-[30px]'>
                            <div className='flex '>
                                <div className='me-[25px]  w-[4/12]'>
                                    <div className='rounded-[10px] bg-white p-[16px] w-full  relative'>
                                        <p className='text-[14px] md:text-[16px] font-Rubik text-black font-normal'>Sit urna ornare sed quam molestie sit placerat convallis. Ac condimentum mollis malesuada placerat in placerat</p>
                                        <img className='absolute bottom-[-25px] left-[28px]' src={CommentBoximg} alt="" />
                                    </div>
                                    <div className='flex mt-[29px] ms-[20px]'>
                                        <img className='rounded-[50%] me-[10px]' src={DarrellImg} alt="" />
                                        <div>
                                            <h2 className='text-[20px] font-normal font-Rubik '>Darrell Steward</h2>
                                            <div className='flex'>
                                                <StarIcon />
                                                <StarIcon />
                                                <StarIcon />
                                                <StarIcon />
                                                <StarIcon />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='w-[4/12] pt-[40px]'>
                                    <div className='rounded-[10px] bg-white p-[16px] w-full relative'>
                                        <p className='text-[14px] md:text-[16px] font-Rubik text-black font-normal'>Magna ipsum erat magna nulla auctor. Phasellus consectetur aliquam vel at non faucibus viverra.</p>
                                        <img className='absolute bottom-[-25px] left-[28px]' src={CommentBoximg} alt="" />
                                    </div>
                                    <div className='flex mt-[29px] ms-[20px]'>
                                        <img className='rounded-[50%] me-[10px]' src={SavannahImg} alt="" />
                                        <div>
                                            <h2 className='text-[20px] font-normal font-Rubik '>Savannah Nguyen</h2>
                                            <div className='flex'>
                                                <StarIcon />
                                                <StarIcon />
                                                <StarIcon />
                                                <StarIcon />
                                                <StarIcon />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='ms-[25px] pt-[40px] w-[4/12]'>
                                    <div className='rounded-[10px] bg-white p-[16px] w-full  relative'>
                                        <p className='text-[14px] md:text-[16px] font-Rubik text-black font-normal'>Morbi leo ullamcorper in et viverra. Neque elit scelerisque purus praesent nulla ut a id.</p>
                                        <img className='absolute bottom-[-25px] left-[28px]' src={CommentBoximg} alt="" />
                                    </div>
                                    <div className='flex mt-[29px] ms-[20px]'>
                                        <img className='rounded-[50%] me-[10px]' src={EstherimgImg} alt="" />
                                        <div>
                                            <h2 className='text-[20px] font-normal font-Rubik '>Esther Howard</h2>
                                            <div className='flex'>
                                                <StarIcon />
                                                <StarIcon />
                                                <StarIcon />
                                                <StarIcon />
                                                <StarIcon />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex items-center justify-center pt-[40px]'>
                                <div className='me-[70px] pt-[40px]'>
                                    <div className='rounded-[10px] bg-white p-[16px] w-[330px]  relative'>
                                        <p className='text-[14px] md:text-[16px] font-Rubik text-black font-normal'>Urna ac eu cras pellentesque scelerisque et. Vestibulum sed felis leo leo massa elementum sit praesent</p>
                                        <img className='absolute bottom-[-25px] left-[28px]' src={CommentBoximg} alt="" />
                                    </div>
                                    <div className='flex mt-[29px] ms-[20px]'>
                                        <img className='rounded-[50%] me-[10px]' src={JennyImg} alt="" />
                                        <div>
                                            <h2 className='text-[20px] font-normal font-Rubik '>Jenny Wilson</h2>
                                            <div className='flex'>
                                                <StarIcon />
                                                <StarIcon />
                                                <StarIcon />
                                                <StarIcon />
                                                <StarIcon />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className=''>
                                    <div className='rounded-[10px] bg-white p-[16px] w-[330px] relative'>
                                        <p className='text-[14px] md:text-[16px] font-Rubik text-black font-normal'>Nibh in commodo faucibus tincidunt. Adipiscing lobortis est elit neque sem scelerisque tellus magna urna.</p>
                                        <img className='absolute bottom-[-25px] left-[28px]' src={CommentBoximg} alt="" />
                                    </div>
                                    <div className='flex mt-[29px] ms-[20px]'>
                                        <img className='rounded-[50%] me-[10px]' src={WadeImg} alt="" />
                                        <div>
                                            <h2 className='text-[20px] font-normal font-Rubik '>Wade Warren</h2>
                                            <div className='flex'>
                                                <StarIcon />
                                                <StarIcon />
                                                <StarIcon />
                                                <StarIcon />
                                                <StarIcon />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </section>
    )
}

export default ClientsSlider