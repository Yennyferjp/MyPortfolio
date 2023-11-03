import React from 'react';
import NavBar from './Components/NavBar/NavBar';
import HomePage from './Components/HomePage/HomePage';
import AboutMe from './Components/AboutMe/AboutMe';
import Services from './Components/Services/Services';

const AppRouter = () => {
  return (
    <div>
      <NavBar />
      <HomePage />
      <AboutMe />
      <Services />
      {/* Agrega otros componentes según sea necesario */}
    </div>
  );
};

export default AppRouter;
