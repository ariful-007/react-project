import './App.css'
import {Routes,Route} from "react-router-dom"
import Footer from './componets/Footer'
import About from './Pages/About'
import Blogo from './Pages/Blogo'
import Contacet from './Pages/Contacet'
import Home from './Pages/Home'
import Servis from './Pages/Servis'
import Registastion from './Pages/Registastion'
import Navbar from './componets/Navbar'
import Logins from './Pages/Logins'


function App() {
  
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/home" element={<Home></Home>} /> 
        <Route path="/about" element={<About></About>} /> 
        <Route path="/services" element={<Servis></Servis>} /> 
        <Route path="/blog" element={<Blogo></Blogo>} />
        <Route path="/contact" element={<Contacet></Contacet>}/> 
        <Route path="/registar" element={<Registastion></Registastion>}></Route>
        <Route path="/login" element={<Logins></Logins>}></Route>
      </Routes>
      <Footer></Footer>
    </>
  )
}

export default App
