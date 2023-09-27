import React from 'react'
import HeroSection from '../HeroSection'
import Themes from '../Themes'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Powerful from '../Powerful';
import WeHelpYou from '../WeHelpYou';
import Professionally from '../Professionally';
import Resume from '../Resume';
import MyAccordion from '../MyAccordion';
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import ClientsSlider from '../ClientsSlider';
import MyFooter from '../common/MyFooter';
import BackToTop from '../common/BackToTop';
import LoaderHome from '../common/LoaderHome';
const HomePage = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className='overflow-hidden'>
      <BackToTop/>
      <LoaderHome/>
      <HeroSection />
      <Themes />
      <Powerful />
      <WeHelpYou />
      <Professionally />
      <Resume />
      <ClientsSlider/>
      <MyAccordion />
      <MyFooter />
    </div>
  )
}

export default HomePage