import React from 'react'
import PowerfullIMg from '../assets/img/png/Powerfullimg.png'
import UnlockUpper from '../assets/img/svg/UnlockCircel.svg'
import CubeHero from '../assets/img/png/Cube-hero-bg.png'
import HalfCircel from '../assets/img/png/powerfullhalfcircel.png'
import BuilderDownImg from './../assets/img/png/builderDownline.png'
const Powerful = () => {
    return (
        <section className='bg-[#F9F9F9] relative'>
            <img  className='absolute hidden lg:block top-[15%]  left-[5%] w-[64px] h-[64px]  ' src={UnlockUpper} alt="UnlockUpper" />
            <img className='absolute hidden md:block top-[8%]  rotate-[5deg] right-[20px]  w-[44px] h-[44px]  lg:w-[61px] lg:h-[87px] ' src={CubeHero} alt="HalfCircel" />
            <img  className='absolute hidden md:block bottom-[13%] right-[42%] lg:right-[50%]  lg:rotate-[45deg]   w-[78px] h-[54px] ' src={HalfCircel} alt="HalfCircel" />
            <div className="container mx-auto">
                <div className='md:flex items-center md:py-[80px]'>
                    <div className='md:w-7/12' data-aos="fade-right" data-aos-duration="700" data-aos-delay="300" data-aos-easing="linear">
                        <h2 className='text-[#010101] font-Rubik text-[27px] md:text-[30px] font-medium pt-[40px] md:pt-0 pb-[15px] lg:max-w-[402px] relative'><img className=' absolute hidden md:block lg:hidden top-[-38px]  left-[28px]   md:w-[40px] md:h-[40px]  ' src={UnlockUpper} alt="UnlockUpper" />Powerful Tools to Create <span className='text-[#F36A3E]'><img className='w-[270px]  absolute hidden left-0 lg:block bottom-3' src={BuilderDownImg} alt="BuilderDownImg" />Your <span className='md:whitespace-nowrap relative'><img className='w-full lg:w-[120%] absolute hidden md:block left-0 lg:hidden -bottom-1' src={BuilderDownImg} alt="BuilderDownImg" />Standout CV</span></span></h2>

                        <p className='text-black font-Rubik text-[14px] font-normal leading-[150%] pb-[40px] md:pb-0 lg:max-w-[455px]'>Customize your CV to reflect your <span className=' opacity-[0.8] font-semibold'>unique personality</span> and professional brand. Choose from a wide range of <span className=' opacity-[0.8] font-semibold'> professionally designed</span> templates and layouts, allowing you to find the <span className=' opacity-[0.8] font-semibold'>perfect style</span> that aligns with your industry and career goals.</p>
                    </div>
                    <div className='pb-[40px] md:pb-0 md:w-5/12 flex items-center justify-center'  data-aos="fade-left" data-aos-duration="700" data-aos-delay="300" data-aos-easing="linear">
                        <img className='w-[370px] md:w-[280px] lg:w-[500px]' src={PowerfullIMg} alt="image" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Powerful