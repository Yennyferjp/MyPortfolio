import React from 'react';
import NavBar from './Components/NavBar/NavBar';
import HomePage from './Components/HomePage/HomePage';
import AboutMe from './Components/AboutMe/AboutMe';
import Services from './Components/Services/Services';
import Projects from './Components/Projects/Projects';

const AppRouter = () => {
  return (
    <div>
      <NavBar />
      <HomePage />
      <AboutMe />
      <Services />
      <Projects />
      {/* Agrega otros componentes según sea necesario */}
    </div>
  );
};

export default AppRouter;
