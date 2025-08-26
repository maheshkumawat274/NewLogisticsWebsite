
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import './App.css'
import "./index.css";
import SupplychainPage from "./pages/about";
import ResponsibilityPage from "./pages/services";
import ContactPage from "./pages/contact";
import ScrollTop from "./components/ScrollTop";
import PrivacyPolicy from "./components/privacypolicy/PrivacyPolicy";
import TermsOfUse from "./components/privacypolicy/TermsofUse";
function App() {
  return (
    <Router>
      <ScrollTop/>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutus" element={<SupplychainPage/>}/>
        <Route path="/services" element={<ResponsibilityPage/>}/>
        <Route path="/contactus" element={<ContactPage/>}/>
        <Route path="/privacypolicy" element={<PrivacyPolicy/>}/>
        <Route path="/termsofuse" element={<TermsOfUse/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
