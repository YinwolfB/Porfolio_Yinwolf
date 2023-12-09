
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { HomePage } from "./pages/HomePage"
import { AboutMe } from "./pages/AboutMe"
import { Skills } from "./pages/Skills"
import { Projects } from "./pages/Projects"
import { ContactMe } from "./pages/./ContactMe";
import { NavBar } from "./components/NavBar";
import { Foother } from "./components/Foother";


function App() {
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
        <Foother/>
      </footer>
    </div>
  )
}

export default App