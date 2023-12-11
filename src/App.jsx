/* eslint-disable react-hooks/exhaustive-deps */

import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { HomePage } from "./pages/Home/HomePage";
import { AboutMe } from "./pages/AboutMe";
import { Skills } from "./pages/Skills";
import { Projects } from "./pages/Projects";
import { ContactMe } from "./pages/ContactMe";
import { NavBar } from "./components/NavBar/NavBar";
import { Footer } from "./components/Footer/Footer";
import { useEffect } from 'react';

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/');
  }, []);

  return (
      <div>
        <nav>
          <NavBar />
        </nav>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about-me' element={<AboutMe />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact-me' element={<ContactMe />} />
        </Routes>
        <footer>
          <Footer />
        </footer>
      </div>
  );
}

export default App;