import React from 'react';
import Introduction from '../../components/Introduction';
import SideComponent from '../../components/sideBar';
import style from "./style.module.css";
import ImageSlider from '../ImageSlider';
import { SliderData } from '../SliderData';
import AboutContainer from '../../components/AboutMe';
import Services from "../../components/ServicesBox";
import Opening from '../../components/OpenCard';
import ContactMe from '../../components/ContactMe';
const HomePage = () => {
  return (
    <div className={style.homeContainer}>
      <SideComponent />
      <Introduction />
      <Opening />
      <AboutContainer />
      <ImageSlider slides={SliderData} />
      <Services />
      <ContactMe />
    </div>
  )
}
export default HomePage;