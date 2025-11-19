import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Projects from './pages/Projects'

const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home></Home>}/>
      <Route path='/projects' element={<Projects/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App