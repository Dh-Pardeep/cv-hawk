import React from 'react'
import ResumeImg from '../assets/img/png/resumeimg.png'
import BuilderDownImg from './../assets/img/png/builderDownline.png'
import { TrueIcon } from './common/Icon'
const Resume = () => {
    return (
        <section className='bg-[#F9F9F9] '>
            <div className="container mx-auto">
                <div className='md:flex items-center md:py-[80px] gap-[40px]'>
                    <div className=' lg:w-7/12'>
                        <h2 className='text-[#010101] font-Rubik text-[27px] md:text-[30px] font-medium pt-[40px] md:pt-0 pb-[15px] lg:max-w-[402px] relative'>Resume trailoring based on the<span className='text-[#F36A3E] relative'><img className='w-full hidden lg:block absolute left-0 -bottom-4' src={BuilderDownImg} alt="BuilderDownImg" />job you’re applying</span> for</h2>
                        <p className='text-black font-Rubik text-[13px] md:text-[16px] font-normal leading-[150%] pb-[30px] md:pb-0 lg:max-w-[455px] '>Quickly ensure that your resume covers key skills and experience by pasting the job ad you’re applying for</p>
                        <div className='flex mb-[22px] mt-[24px]'>
                            <div className='me-[12px] mt-[3px] '>
                                <TrueIcon />
                            </div>
                            <p className='font-normal text-black font-Rubik text-[13px] md:text-[16px] '>Skills and experience analysis</p>
                        </div>
                        <div className='flex mb-[22px]'>
                            <div className='me-[12px] mt-[3px]'>
                                <TrueIcon />
                            </div>
                            <p className='font-normal text-black font-Rubik text-[13px] md:text-[16px] '>Actionable Checklist of what else to add to your resume</p>
                        </div>
                        <div className='flex'>
                            <div className='me-[12px] mt-[3px]'>
                                <TrueIcon />
                            </div>
                            <p className='font-normal text-black font-Rubik text-[13px] md:text-[16px] '>Instant comparison between your resume and the job posting</p>
                        </div>
                    </div>
                    <div className='pb-[50px] md:pb-0  lg:w-5/12 md:order-first'>
                        <img className='w-full mt-[20px] md:mt-0' src={ResumeImg} alt="image" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Resume 