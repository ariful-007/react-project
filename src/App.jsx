import './App.css'
import {Routes,Route} from "react-router-dom"
import Hedar from './componets/Hedar'
import Footer from './componets/Footer'
import Home from './Pages/Home'
import About from './Pages/About'
import Blogo from './Pages/Blogo'
import Contacet from './Pages/Contacet'
import Banner from './componets/Banner'
import Servis from './Pages/Servis'
import Testmonial from './componets/Testmonial'
import Users from './componets/Users'


function App() {
  
  return (
    <>
      <Hedar></Hedar>
      <Banner></Banner>
      <Routes>
        <Route path="/" element={<Home></Home>} /> 
        <Route path="/about" element={<About></About>} /> 
        <Route path="/services" element={<Servis></Servis>} /> 
        <Route path="/blog" element={<Blogo></Blogo>} />
        <Route path="/contact" element={<Contacet></Contacet>} /> 
      </Routes>
      <Users></Users>
      <Testmonial></Testmonial>
      <Footer></Footer>
    </>
  )
}

export default App
