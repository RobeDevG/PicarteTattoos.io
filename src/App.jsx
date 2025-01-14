import 'leaflet/dist/leaflet.css';
import './App.css'
import Home from './pages/Home'
import TattooStudio from './pages/TattooStudio'
import TattooAftercare from './pages/TattooAftercare'
import Jobs from './pages/Jobs'
import Contact from './pages/Contact'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nav from './component/Nav'
import { useEffect, useState } from 'react'

function App() {

  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    document.addEventListener('DOMContentLoaded', () => { setIsLoaded(true); }); window.onload = () => { setIsLoaded(true); };
    return () => { document.removeEventListener('DOMContentLoaded', () => { setIsLoaded(true); }); window.onload = null; };
  }, []);
  const hiddenStyle = { display: isLoaded ? 'block' : 'none', };



  return (
    <BrowserRouter style={hiddenStyle}>
      <Nav />
      <Routes>
      <Route path='/*' element={<Home />} />
        <Route path='/' element={<Home />} />
        <Route path='/TattooStudio' element={<TattooStudio />} />
        <Route path='/TattooAftercare' element={<TattooAftercare />} />
        <Route path='/Jobs' element={<Jobs />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
