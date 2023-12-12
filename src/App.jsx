/* eslint-disable react-hooks/exhaustive-deps */

import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { HomePage } from "./pages/Home/HomePage";
import { AboutMe } from "./pages/AboutMe/AboutMe";
import { Skills } from "./pages/Skills/Skills";
import { Projects } from "./pages/proyects/Projects";
import { ContactMe } from "./pages/ContactMe/ContactMe";
/* import { NavBar } from "./components/NavBar/NavBar";
import { Footer } from "./components/Footer/Footer"; */
import { useEffect } from 'react';

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/');
  }, []);

  return (
    <div className='app'>
      <section className='app__pages'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about-me' element={<AboutMe />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact-me' element={<ContactMe />} />
        </Routes>
      </section>
    </div>
  );
}

export default App;