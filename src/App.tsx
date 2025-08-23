
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import './App.css'
import "./index.css";
import SupplychainPage from "./pages/supplychain";
import ResponsibilityPage from "./pages/responsibility";
import ProductsPage from "./pages/products";
import ContactPage from "./pages/contact";
import CareerPage from "./pages/career";
import ScrollTop from "./components/ScrollTop";
function App() {
  return (
    <Router>
      <ScrollTop/>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutus" element={<SupplychainPage/>}/>
        <Route path="/responsibility" element={<ResponsibilityPage/>}/>
        <Route path="/products" element={<ProductsPage/>}/>
        <Route path="/contactus" element={<ContactPage/>}/>
        <Route path="/career" element={<CareerPage/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
