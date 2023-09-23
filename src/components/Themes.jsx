import React from 'react'
import Slider from "react-slick";
import ThemesSectionImg from '../assets/img/png/ThemesSectionimg.png'
import { CustomizeIcon, MakecopiesIcon, TemplatesIcon, ThemesIcon, VersionhistoryIcon } from './common/Icon';
const Themes = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3.1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '16px',
    };
    return (
        <section>
            <div className="container mx-auto mt-[400px]">
                <div className='flex  items-center justify-between gap-[36px]'>
                    <div className='w-6/12 py-4'>
                        <img className='shadow-[0px_2.01812px_23.5447px_0px] shadow-[#d3d0d0] rounded-[10px]' src={ThemesSectionImg} alt="Img" />
                    </div>
                    <div className='w-6/12'>
                        <Slider {...settings} className=''>
                            <div className='py-4'>
                                <div className='flex items-center  flex-col w-[156px] h-[141px] rounded-[8px] border-[2px] border-solid hover:border-[#F9C2B1] border-[#F7F7F7]  shadow-[0px_4px_30px_0px] shadow-[#0000000a]'>
                                    <div className='mt-[23px]'>
                                        <ThemesIcon />
                                    </div>
                                    <h2 className='mt-[15px] text-[#F36A3E] text-[22px] font-Rubik font-medium'>Themes</h2>
                                </div>
                            </div>
                            <div className='py-4'>
                                <div className='flex items-center  flex-col w-[156px] h-[141px] rounded-[8px] border-[2px] border-solid hover:border-[#F9C2B1] border-[#F7F7F7]  shadow-[0px_4px_30px_0px] shadow-[#0000000a]'>
                                    <div className='mt-[23px]'>
                                        <CustomizeIcon />
                                    </div>
                                    <h2 className='mt-[15px] text-black text-[22px] font-Rubik font-medium'>Customize</h2>
                                </div>
                            </div><div className='py-4'>
                                <div className='flex items-center  flex-col w-[156px] h-[141px] rounded-[8px] border-[2px] border-solid hover:border-[#F9C2B1] border-[#F7F7F7]  shadow-[0px_4px_30px_0px] shadow-[#0000000a]'>
                                    <div className='mt-[23px]'>
                                        <MakecopiesIcon />
                                    </div>
                                    <h2 className='mt-[15px] text-black text-[22px] font-Rubik font-medium'>Make copies</h2>
                                </div>

                            </div><div className='py-4'>
                                <div className='flex items-center  flex-col w-[156px] h-[141px] rounded-[8px] border-[2px] border-solid hover:border-[#F9C2B1] border-[#F7F7F7]  shadow-[0px_4px_30px_0px] shadow-[#0000000a]'>
                                    <div className='mt-[23px]'>
                                        <TemplatesIcon />
                                    </div>
                                    <h2 className='mt-[15px] text-black text-[22px] font-Rubik font-medium'>Templates</h2>
                                </div>
                            </div><div className='py-4'>
                                <div className='flex items-center  flex-col w-[156px] h-[141px] rounded-[8px] border-[2px] border-solid hover:border-[#F9C2B1] border-[#F7F7F7]  shadow-[0px_4px_30px_0px] shadow-[#0000000a]'>
                                    <div className='mt-[23px]'>
                                        <VersionhistoryIcon />
                                    </div>

                                    <h2 className='mt-[15px] text-black text-[22px] font-Rubik font-medium text-center'>Version history</h2>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Themes