import Holidays from './pages/Holidays'
import Navbar from './components/Navbar';
import { BrowserRouter , Routes, Route } from "react-router-dom";
import './App.css'
import Footer from './components/Footer';
import { HashRouter } from 'react-router-dom';


function App() {

  return (
    
      <HashRouter>
        <Navbar  />
      <Routes>
        <Route path="/" element={<Holidays />} />
        <Route path="/holidays" element={<Holidays />} />
      </Routes>
        <Footer/>
    </HashRouter>
   
  )
}

export default App
