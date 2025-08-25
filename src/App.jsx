import Holidays from './pages/Holidays'
import Navbar from './components/Navbar';
import { BrowserRouter , Routes, Route } from "react-router-dom";
import './App.css'
import Footer from './components/Footer';
import { HashRouter } from 'react-router-dom';
import CategoryDetail from './pages/CategoryDetail';
import PackageDetails from './pages/PackageDetails';
import Blog from './pages/Blog';


function App() {

  return (
    
      <HashRouter>
        <Navbar  />
      <Routes>
        <Route path="/" element={<Holidays />} />
        <Route path="/holidays" element={<Holidays />} />
        <Route path="/category/:id" element={<CategoryDetail/>} />
        <Route path="/packages/:id" element={<PackageDetails/>} />
        <Route path="/destination/:id" element={<Blog/>} />
        <Route path="/blog/:id" element={<Blog/>} />
      </Routes>
        <Footer/>
    </HashRouter>
   
  )
}

export default App
