import './App.css';
import Navbar from './components/Navbar';
import Gallery from './components/Gallery';
import Cards from './components/Cards';
import Services from './components/Services';
import Footer from './components/Footer';
import Aboutus from './components/Aboutus';
import Aboutteam from './components/Aboutteam';
import { Navigate, Route, Routes } from 'react-router-dom';

function App() {
  return (
   
    <>
     <Routes>

      <Route path="/" element={<Layout/>} />
      <Route path="/gallery" element={<Layout><Gallery/></Layout>} />
      <Route path="/products" element={<Layout><Cards/></Layout>} />
      <Route path="/services" element={<Layout><Services/></Layout>} />
      <Route path="/about" element={<Layout><Aboutus/></Layout>} />
      <Route path="*" element={<Navigate to="/" replace/>} />
     </Routes>
     
     
     
     
     
     
     
     
      {/* <Navbar/>  
      <Gallery/>
      <Cards/>
      <Services/>
      <Aboutus/>
      <Aboutteam/>
      <Footer/>       */}
    </>
  );
}

export default App;