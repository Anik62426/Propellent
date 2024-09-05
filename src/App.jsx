import Home from './pages/Home'
import Benefits from "./pages/Benefits"
import Product from "./pages/Product"
import Testimonials from "./pages/Testimonials"
import Faqs from "./pages/Faqs"
import './App.css'
import Navbar from './component/Navbar'
import {Routes,Route} from "react-router-dom"
function App() {
 

  return (
    <div>
      
      <Navbar/>
    


      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/benefits" element={<Benefits/> }/>
      <Route path="/product" element={<Product/>}/>
      <Route path="/testimonials" element={<Testimonials/>}/>
      <Route path='/faqs' element={<Faqs/>}/>
    </Routes>

    </div>
  )
}

export default App
