import React from 'react';
import NavBar from './Components/NavBar/NavBar';
import HomePage from './Components/HomePage/HomePage';
import AboutMe from './Components/AboutMe/AboutMe';
import Services from './Components/Services/Services';
import Projects from './Components/Projects/Projects';
import Opinions from './Components/WhatMeSay/WhatMeSay';
import Skills from './Components/Skills/Skills';
import ContactMe from './Components/ContactMe/ContactMe'
import Footer from './Components/Footer/Footer'

const AppRouter = () => {
  return (
    <div>
      <NavBar />
      <HomePage />
      <AboutMe />
      <Services />
      <Projects />
      <Opinions />
      <Skills />
      <ContactMe />
      <Footer/>
    </div>
  );
};

export default AppRouter;
