import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Navbar from './components/ui/Navbar'
import Footer from './components/ui/Footer'

function App() {
  return (
  <div className='font-interTight'>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
    <Footer/>
  </div>
  )
}

export default App
