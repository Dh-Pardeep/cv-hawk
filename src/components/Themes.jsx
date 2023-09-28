import React from 'react'
import Slider from "react-slick";
import { useEffect, useState, useRef } from "react";
import HeroSliderImg from '../assets/img/webp/hero_slider_img.webp'
import ThemesSectionImg from '../assets/img/gif/themesectionimg.gif'
import ThemesSectionImgtwo from '../assets/img/gif/themesectionimg.gif'
import { CustomizeIcon, MakecopiesIcon, TemplatesIcon, ThemesIcon, VersionhistoryIcon } from './common/Icon';
const Themes = () => {
    const [nav1, setNav1] = useState();
    const [nav2, setNav2] = useState();
    const slider1 = useRef(null);
    const slider2 = useRef(null);

    //i dont seem to need this
    useEffect(() => {
        setNav1(slider1.current);
        setNav2(slider2.current);
    }, []);
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    }
    var settingstwo = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
        ]
    };
    return (
        <section className='relative'>
            <div className='blur-[120px] opacity-[0.5] hidden md:block  bg-[#F36A3E] w-[160px] h-[140px]  absolute top-[45%] lg:top-[82%] right-0'></div>
            <div className="container mx-auto  md:pt-[175px] lg:pt-[330px]">
                <div className='md:hidden py-[35px]' data-aos="zoom-in" data-aos-duration="700" data-aos-delay="300" data-aos-easing="linear">
                    <Slider {...settings} >
                        <div>
                            <img className='w-full' src={HeroSliderImg} alt="HeroSliderImg" />
                        </div>
                        <div>
                            <img className='w-full' src={HeroSliderImg} alt="HeroSliderImg" />
                        </div>
                        <div>
                            <img className='w-full' src={HeroSliderImg} alt="HeroSliderImg" />
                        </div>
                        <div>
                            <img className='w-full' src={HeroSliderImg} alt="HeroSliderImg" />
                        </div>
                    </Slider>
                </div>
                <div className='lg:flex justify-center mt-[100px] mb-[100px] md:mb-[120px] lg:mb-[150px]'>
                    <div className='w-full lg:w-6/12 py-4 lg:pe-[18px]' data-aos="fade-right" data-aos-duration="700" data-aos-delay="300" data-aos-easing="linear">
                        <img className='shadow-[0px_2.01812px_23.5447px_0px] hidden lg:block shadow-[#d3d0d0] rounded-[10px] lg:h-[340px] w-full' src={ThemesSectionImg} alt="Img" />
                        <img className='lg:hidden w-full shadow-[#d3d0d0] shadow-[0px_2.01812px_23.5447px_0px] rounded-[10px]' src={ThemesSectionImgtwo} alt="" />
                    </div>
                    <div className=' lg:w-6/12 xl:ps-[18px] mt-[25px] md:mt-[40px] lg:mt-0' data-aos="fade-left" data-aos-duration="700" data-aos-delay="300" data-aos-easing="linear">
                        <div data-aos="zoom-in" data-aos-duration="700" data-aos-delay="300" data-aos-easing="linear" >
                            <Slider {...settingstwo}
                                asNavFor={nav1}
                                ref={slider2}
                                slidesToShow={3}
                                swipeToSlide={true}
                                focusOnSelect={true}
                            >
                                <div>
                                    <div className='py-4 '>
                                        <div className='flex items-center group transition-all duration-300 ease-in-out cursor-pointer flex-col w-[150px] h-[130px] rounded-[8px] border-[2px] border-solid hover:border-[#F9C2B1] border-[#F7F7F7]  shadow-[0px_4px_30px_0px] shadow-[#0000000a]'>
                                            <div className='mt-[23px]'>
                                                <ThemesIcon />
                                            </div>
                                            <h2 className='mt-[15px] group-hover:text-[#F36A3E] transition-all duration-300 ease-in-out  text-black text-[18px] md:text-[20px] lg:text-[22px] themes font-Rubik font-semibold'>Themes</h2>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className='py-4 '>
                                        <div className='flex items-center group transition-all duration-300 ease-in-out cursor-pointer flex-col w-[150px] h-[130px] rounded-[8px] border-[2px] border-solid hover:border-[#F9C2B1] border-[#F7F7F7]  shadow-[0px_4px_30px_0px] shadow-[#0000000a]'>
                                            <div className='mt-[23px]'>
                                                <MakecopiesIcon />
                                            </div>
                                            <h2 className='mt-[15px] group-hover:text-[#F36A3E] transition-all duration-300 ease-in-out   text-black text-[18px] md:text-[20px] lg:text-[22px] font-Rubik font-semibold'>Make copies</h2>
                                        </div>

                                    </div>
                                </div>
                                <div>
                                    <div className='py-4  '>
                                        <div className='flex items-center group transition-all duration-300 ease-in-out cursor-pointer flex-col w-[150px] h-[130px] rounded-[8px] border-[2px] border-solid hover:border-[#F9C2B1] border-[#F7F7F7]  shadow-[0px_4px_30px_0px] shadow-[#0000000a]'>
                                            <div className='mt-[23px]'>
                                                <MakecopiesIcon />
                                            </div>
                                            <h2 className='mt-[15px] group-hover:text-[#F36A3E] transition-all duration-300 ease-in-out   text-black text-[18px] md:text-[20px] lg:text-[22px] font-Rubik font-semibold'>Make copies</h2>
                                        </div>

                                    </div>
                                </div>
                                <div>
                                    <div className='py-4 '>
                                        <div className='flex items-center group transition-all duration-300 ease-in-out cursor-pointer flex-col w-[150px] h-[130px] rounded-[8px] border-[2px] border-solid hover:border-[#F9C2B1] border-[#F7F7F7]  shadow-[0px_4px_30px_0px] shadow-[#0000000a]'>
                                            <div className='mt-[23px]'>
                                                <TemplatesIcon />
                                            </div>
                                            <h2 className='mt-[15px] group-hover:text-[#F36A3E] transition-all duration-300 ease-in-out   text-black text-[18px] md:text-[20px] lg:text-[22px] font-Rubik font-semibold'>Templates</h2>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className='py-4 '>
                                        <div className='flex items-center group transition-all duration-300 ease-in-out cursor-pointer flex-col w-[150px] h-[130px] rounded-[8px] border-[2px] border-solid hover:border-[#F9C2B1] border-[#F7F7F7]  shadow-[0px_4px_30px_0px] shadow-[#0000000a]'>
                                            <div className='mt-[23px]'>
                                                <VersionhistoryIcon />
                                            </div>

                                            <h2 className='mt-[15px] group-hover:text-[#F36A3E] transition-all duration-300 ease-in-out   text-black text-[18px] md:text-[20px] lg:text-[22px] font-Rubik font-semibold text-center Version'>Version history</h2>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                            <Slider className="mainSlider" asNavFor={nav2} ref={slider1}>
                                <div>
                                    <p className='font-Rubik font-normal  text-base text-black lg:max-w-[500px] leading-[153%] opacity-[0.8] mt-[65px]'>Theme's robust features allow you to showcase your skills, accomplishments, and experiences in a captivating way. From customizing the layout to selecting the perfect color scheme, every detail can be tailored to match your style and industry. </p>
                                </div>
                                <div>
                                    <p className='font-Rubik font-normal  text-base text-black lg:max-w-[500px] leading-[153%] opacity-[0.8] mt-[65px]'>Theme's robust features allow you to showcase your skills, accomplishments, and experiences in a captivating way. From customizing the layout to selecting the perfect color scheme, every detail can be tailored to match your style and industry. </p>
                                </div>
                                <div>
                                    <p className='font-Rubik font-normal  text-base text-black lg:max-w-[500px] leading-[153%] opacity-[0.8] mt-[65px]'>Theme's robust features allow you to showcase your skills, accomplishments, and experiences in a captivating way. From customizing the layout to selecting the perfect color scheme, every detail can be tailored to match your style and industry. </p>
                                </div>
                                <div>
                                    <p className='font-Rubik font-normal  text-base text-black lg:max-w-[500px] leading-[153%] opacity-[0.8] mt-[65px]'>Theme's robust features allow you to showcase your skills, accomplishments, and experiences in a captivating way. From customizing the layout to selecting the perfect color scheme, every detail can be tailored to match your style and industry. </p>
                                </div>
                                <div>
                                    <p className='font-Rubik font-normal  text-base text-black lg:max-w-[500px] leading-[153%] opacity-[0.8] mt-[65px]'>Theme's robust features allow you to showcase your skills, accomplishments, and experiences in a captivating way. From customizing the layout to selecting the perfect color scheme, every detail can be tailored to match your style and industry. </p>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Themes