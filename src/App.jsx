import Home from "./pages/Home";
import Features from "./pages/Features";
import Plans from "./pages/Plan&Price";
import Testimonials from "./pages/Testimonials";
import Faqs from "./pages/Faqs";
import "./App.css";
import Navbar from "./component/Navbar";
import { Routes, Route } from "react-router-dom";
import Footer from "./component/Footer";
import LoginPage from "./pages/LoginPage";
import Payment from "./pages/Payment";
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up"element={<LoginPage/>}/>
        <Route path="/features" element={<Features />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/faqs" element={<Faqs />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
