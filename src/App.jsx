import './App.css'
import {Routes,Route} from "react-router-dom"
import Hedar from './componets/Hedar'
import Footer from './componets/Footer'
import About from './Pages/About'
import Blogo from './Pages/Blogo'
import Contacet from './Pages/Contacet'
import Home from './Pages/Home'
import Servis from './Pages/Servis'


function App() {
  
  return (
    <>
      <Hedar></Hedar>
      <Routes>
        <Route path="/home" element={<Home></Home>} /> 
        <Route path="/about" element={<About></About>} /> 
        <Route path="/services" element={<Servis></Servis>} /> 
        <Route path="/blog" element={<Blogo></Blogo>} />
        <Route path="/contact" element={<Contacet></Contacet>} /> 
      </Routes>
      <Footer></Footer>
    </>
  )
}

export default App
