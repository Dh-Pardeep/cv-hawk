import React from 'react'
import BuilderDownImg from './../assets/img/png/builderDownline.png'
import { Link } from 'react-router-dom'
import MyNavBar from './common/MyNavBar'
import UnlockUpper from '../assets/img/svg/UnlockCircel.svg'
import HalfCircel from '../assets/img/png/HalfCircel.png'
import CubeHero from '../assets/img/png/Cube-hero-bg.png'
import HeroCenterLogo from '../assets/img/png/HeroCenterBd.png'
import LeftImg from '../assets/img/png/LeftImg1.png'
import LeftImgtwo from '../assets/img/png/LeftImg2.png'
import RightImg from '../assets/img/png/rightImg1.png'
import RightImgtwo from '../assets/img/png/rightImg2.png'
const HeroSection = () => {
    return (
        <section className='relative'>
            <img className='absolute hidden md:block left-[20px] lg:top-[28%] top-[38%] w-[122px] lg:w-[186px] h-[134px] lg:h-[200px] rotate-[-19deg] shadow-[0px_2.01812px_23.5447px_0px] shadow-[#d3d0d0] rounded-[10px]' src={LeftImg} alt="" />
            <img className='absolute hidden md:block bottom-[-160px] xl:bottom-[-210px]  rotate-[-33deg]  w-[185px] left-[40px]  lg:w-[207px] h-[200px] lg:h-[227px] z-[10] shadow-[0px_2.01812px_23.5447px_0px] xl:left-[145px] shadow-[#d3d0d0] rounded-[10px]' src={LeftImgtwo} alt="" />
            <img className='absolute hidden md:block right-[35px] lg:top-[28%] top-[38%] w-[122px] lg:w-[186px] h-[134px] lg:h-[200px] rotate-[21deg] shadow-[0px_2.01812px_23.5447px_0px] shadow-[#d3d0d0] rounded-[10px]' src={RightImg} alt="" />
            <img className='absolute hidden md:block bottom-[-160px] xl:bottom-[-210px]  rotate-[28deg]  w-[185px] right-[40px]  lg:w-[207px] h-[200px] lg:h-[227px]  shadow-[0px_2.01812px_23.5447px_0px] xl:right-[145px] shadow-[#d3d0d0] rounded-[10px]' src={RightImgtwo} alt="" />
            <img className='absolute -bottom-[25%] hidden md:block left-[50%] translate-x-[-50%]' src={HeroCenterLogo} alt="" />
            <img className='absolute bottom-[13%] sm:rotate-[20deg] lg:rotate-[40deg] lg:right-[50px] right-0 sm:right-[20px] h-[50px] sm:h-[55px] md:w-[65px] md:h-[65px]' src={HalfCircel} alt="HalfCircel" />
            <img className='absolute bottom-[-8%] md:bottom-[20%] md:left-[7%] rotate-[300deg] xl:left-0 xl:-bottom-[110px] md:rotate-[6deg]  left-0 w-28px h-[43px]  md:w-[27px] md:h-[41px] xl:w-[61px] xl:h-[92px]' src={CubeHero} alt="HalfCircel" />
            <div className='absolute rounded-[278px] md:rounded-[518] lg:rounded-[626px] opacity-[0.6] bg-[#F36A3E] blur-[75px] md:blur-[120px] w-[278px] md:w-[518px] lg:w-[626px] md:h-[95px] lg:h-[115px] h-[66px] top-[28%] sm:top-[35%] md:top-[50%] start-[50%] translate-x-[-50%] translate-y-[-50%]' ></div>
            <div className='blur-[120px] opacity-[0.5] hidden md:block  bg-[#F36A3E] w-[184px] h-[160px]  absolute bottom-[-60%] lg:bottom-[-82%] left-0'></div>
            <MyNavBar />
            <div className="container mx-auto" data-aos="zoom-in" data-aos-duration="700" data-aos-delay="3000" data-aos-easing="linear">
                <h1 className='font-Rubik text-black text-center text-[32px] sm:text-[40px]  lg:text-[45px] xl:text-[52px] max-w-[766px] mx-auto pt-[32px] sm:pt-[60px] md:pt-[102px] lg:pt-[150px] font-semibold relative'><img className='absolute top-[4%] sm:top-[8%] sm:left-[18%] md:top-[22%] md:left-[23%] left-[22%] lg:top-[30%] w-[30px] h-[30px] sm:w-[42px] sm:h-[42px] md:w-[52px] md:h-[52px]  lg:w-[64px] lg:h-[64px]' src={UnlockUpper} alt="UnlockUpper" />Unlock Your Potential with a Professional <span className='whitespace-nowrap relative '><img className='w-full absolute left-0 -bottom-1' src={BuilderDownImg} alt="BuilderDownImg" /> CV Builder</span></h1>
                <p className='font-Rubik text-black text-center max-w-[565px] mx-auto mt-2 xs:mt-[16px] text-base font-normal'>Our user-friendly platform guides you through the process, allowing you to customize every section to align with your unique career goals.</p>
                <div className='flex  items-center  justify-center mt-[30px] md:mt-[40px]'>
                    <Link data-aos="fade-right" data-aos-duration="700" data-aos-delay="3000" data-aos-easing="linear" onClick={() => setShowNavbar(true)} className='px-[22px] py-[14px]  xs:px-[38px] xs:py-[17px] bg-[#F36A3E] text-white common_btn rounded-[41px]  font-semibold font-Rubik hover:text-white inline-block xs:me-[17px] ' to="/Touch">Get Started</Link>
                    <Link data-aos="fade-left" data-aos-duration="700" data-aos-delay="3000" data-aos-easing="linear" onClick={() => setShowNavbar(true)} className='px-[22px] py-[14px] xs:px-[38px] xs:py-[17px] bg-transparent text-[#F36A3E] ms-[11px] xs:ms-0 common_btn hover:bg-transparent rounded-[41px] font-semibold font-Rubik inline-block ' to="/Touch">Watch Demo</Link>
                </div>
            </div>
        </section>
    )
}

export default HeroSection  