import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Mainnavbar from './Mainnavbar';
import MenuCarousel from './MenuCarousel';
import CustomCard from './CustomCard';
import Footer from './footer';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Mainnavbar/>
    <MenuCarousel/>
    <CustomCard/>
    <Footer/>
  </StrictMode>,
)
