
import './App.css'
import Home from './pages/Home'
import TattooStudio from './pages/TattooStudio'
import TattooAftercare from './pages/TattooAftercare'
import Jobs from './pages/Jobs'
import Contact from './pages/Contact'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nav from './component/Nav'

function App() {

  return (
    <BrowserRouter>
        <Nav/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/TattooStudio' element={<TattooStudio/>}/>
        <Route path='/TattooAftercare' element={<TattooAftercare/>}/>
        <Route path='/Jobs' element={<Jobs/>}/>
        <Route path='/Contact' element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
