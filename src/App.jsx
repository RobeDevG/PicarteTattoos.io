
import './App.css'
import Home from './pages/Home'
import TattooStudio from './pages/TattooStudio'
import TattooAftercare from './pages/TattooAftercare'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/TattooStudio' element={<TattooStudio/>}/>
        <Route path='/TattooAftercare' element={<TattooAftercare/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
