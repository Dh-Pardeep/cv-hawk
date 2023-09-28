import React from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
function Icon({ id, open }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
    );
}

export function MyAccordion() {
    const [open, setOpen] = React.useState(1);

    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    return (
        <section className="relative">
            {/* <div className='blur-[132px]  bg-[#FDDA60] w-[132px] h-[132px]  absolute top-[45%]  start-[50%]'></div> */}
            <div className="container mx-auto mb-[455px] md:mb-[290px]">
                <h2 className="text-black pt-[100px]  font-medium text-[28px] md:text-[30px] lg:text-[40px]  font-Rubik leading-none text-center md:pt-[120px] lg:pt-[150px] pb-[20px] md:pb-[60px] "data-aos="fade-up" data-aos-duration="700" data-aos-delay="300" data-aos-easing="linear">Frequently Asked Questions</h2>
                <div className=" flex justify-center pb-[60px] sm:pb-0 md:pb-[120px] relative z-20 " data-aos="zoom-in" data-aos-duration="700" data-aos-delay="300" data-aos-easing="linear">
                    <div className="w-full lg:w-10/12 text-[#010101] ">
                        <Accordion open={open === 1} icon={<Icon id={1} open={open} />} className="">
                            <AccordionHeader className="font-Rubik md:text-[20px] text-[16px]  lg:text-[24px]  font-normal text-start  xs:max-w-none  " onClick={() => handleOpen(1)}>Q1. How does the CVhawk work??</AccordionHeader>
                            <AccordionBody className=" font-normal text-[14px] md:text-base   font-Rubik">
                                Absolutely! We understand that your CV is a dynamic document that may require updates and modifications over time. Once you've saved your CV using our CVhawk, you can easily edit and make changes whenever needed.
                            </AccordionBody>
                        </Accordion>
                        <div className='border-[1px] border-solid border-black opacity-[0.1] ' ></div>
                        <Accordion open={open === 2} icon={<Icon id={2} open={open} />} className=" ">
                            <AccordionHeader className="font-Rubik md:text-[20px] text-[16px] lg:text-[24px]  font-normal text-start  xs:max-w-none  " onClick={() => handleOpen(2)}>
                                Q2. Is the CVhawk completely free to use?
                            </AccordionHeader>
                            <AccordionBody className=" font-normal text-[14px] md:text-base   font-Rubik">
                                Absolutely! We understand that your CV is a dynamic document that may require updates and modifications over time. Once you've saved your CV using our CVhawk, you can easily edit and make changes whenever needed.
                            </AccordionBody>
                        </Accordion>
                        <div className='border-[1px] border-solid border-black opacity-[0.1] ' ></div>
                        <Accordion open={open === 3} icon={<Icon id={3} open={open} />} className=" ">
                            <AccordionHeader className="font-Rubik md:text-[20px] text-[16px] lg:text-[24px]  font-normal text-start  xs:max-w-none  " onClick={() => handleOpen(3)}>
                                Q3. Can I edit my CV after I've saved it?
                            </AccordionHeader>
                            <AccordionBody className=" font-normal text-[14px] md:text-base   font-Rubik">
                                Absolutely! We understand that your CV is a dynamic document that may require updates and modifications over time. Once you've saved your CV using our CVhawk, you can easily edit and make changes whenever needed.
                            </AccordionBody>
                        </Accordion>
                        <div className='border-[1px] border-solid border-black opacity-[0.1] ' ></div>
                        <Accordion open={open === 4} icon={<Icon id={4} open={open} />} className=" ">
                            <AccordionHeader className="font-Rubik md:text-[20px] text-[16px] lg:text-[24px]  font-normal text-start  xs:max-w-none  " onClick={() => handleOpen(4)}>Q4. Can I import my existing CV into the builder?</AccordionHeader>
                            <AccordionBody className=" font-normal text-[14px] md:text-base   font-Rubik">
                                Absolutely! We understand that your CV is a dynamic document that may require updates and modifications over time. Once you've saved your CV using our CVhawk, you can easily edit and make changes whenever needed.
                            </AccordionBody>
                        </Accordion>
                        <div className='border-[1px] border-solid border-black opacity-[0.1] ' ></div>
                        <Accordion open={open === 5} icon={<Icon id={5} open={open} />} className=" ">
                            <AccordionHeader className="font-Rubik md:text-[20px] text-[16px] lg:text-[24px]  font-normal text-start  xs:max-w-none  " onClick={() => handleOpen(5)}>
                                Q5. Is my personal information safe and secure?
                            </AccordionHeader>
                            <AccordionBody className=" font-normal text-[14px] md:text-base   font-Rubik">
                                Absolutely! We understand that your CV is a dynamic document that may require updates and modifications over time. Once you've saved your CV using our CVhawk, you can easily edit and make changes whenever needed.
                            </AccordionBody>
                        </Accordion>
                        <div className='border-[1px] border-solid border-black opacity-[0.1] ' ></div>
                        <Accordion open={open === 6} icon={<Icon id={6} open={open} />} className=" ">
                            <AccordionHeader className="font-Rubik md:text-[20px] text-[16px] lg:text-[24px]  font-normal text-start  xs:max-w-none  " onClick={() => handleOpen(6)}>
                                Q6. What kind of templates are available in the CV builder?
                            </AccordionHeader>
                            <AccordionBody className=" font-normal text-[14px] md:text-base   font-Rubik">
                                Absolutely! We understand that your CV is a dynamic document that may require updates and modifications over time. Once you've saved your CV using our CVhawk, you can easily edit and make changes whenever needed.
                            </AccordionBody>
                        </Accordion>
                        <div className='border-[1px] border-solid border-black opacity-[0.1] ' ></div>
                    </div>
                </div>
                <div className="container relative" data-aos="zoom-in" data-aos-duration="700" data-aos-delay="300" data-aos-easing="linear">
                    <div className="rounded-[21px] bg-[#F36A3E] w-full px-[21px] py-[60px] md:py-[36px] lg:py-[64px] absolute left-0 top-[90px] sm:top-[145px] md:top-[50px]">
                        <h2 className="text-center font-Rubik text-[28px] md:text-[30px] lg:text-[40px] font-medium text-white md:max-w-[669px] mx-auto">Your Path to Success Starts Here: Build Your CV Today</h2>
                        <p className="text-center text-white text-[14px] md:text-base mt-[16px] mb-[40px]  max-w-[615px] mx-auto"> Our CV builder not only provides a user-friendly interface but also offers valuable guidance along the way.</p>
                        <div className="flex justify-center">
                            <Link onClick={() => setShowNavbar(true)} className='px-[22px] py-[14px] xs:px-[38px] xs:py-[17px] text-black bg-white text-center xs:ms-0 common_btntwo  rounded-[41px] font-semibold font-Rubik inline-block ' to="/Touch">Get Started</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default MyAccordion