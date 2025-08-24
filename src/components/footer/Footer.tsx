import { Link } from "react-router-dom";
import ContactBtn from "../../btns/ContactBtn";
import { MdEmail, MdPhone } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-800 py-12">
      <div className="container mx-auto px-4 md:px-10">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-around items-center border-b border-gray-700 pb-10 mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-snug text-center md:text-left">
            DELIVERED <span className="text-[#C5A15C]">ON TIME</span> <br />
            WITH NO HASSLE.
          </h2>

          <Link to="/contactus">
            <ContactBtn />
          </Link>
        </div>

        {/* Bottom Section */}
        <div className="grid md:grid-cols-4 gap-10">
          {/* Logo & Social */}
          <div>
            <h1 className="text-4xl font-bold mb-4">Well Global INC</h1>
            <p className="text-md font-semibold text-[#C5A15C]">
              Well Global Inc is a premier, diversified energy company
              strategically positioned to deliver superior and sustainable
              returns.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="hover:underline"><Link to="/">Home</Link></li>
              <li className="hover:underline"><Link to="/aboutus">About Us</Link></li>
              <li className="hover:underline"><Link to="/responsibility">Responsibility</Link></li>
              <li className="hover:underline"><Link to="/products">Products</Link></li>
              <li className="hover:underline"><Link to="/contactus">Contact Us</Link></li>
              <li className="hover:underline"><Link to="/career">Career</Link></li>
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-gray-700">
              <li>Oil and Gas</li>
              <li>Light Distillates Products</li>
              <li>Middle Distillates Products</li>
              <li>Frozen LPG</li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-4 text-gray-700">
              
              <li className="flex items-center gap-2">
                <MdEmail className="text-[#C5A15C] text-xl" />
                <span>Info@wellglobalinc.com</span>
              </li>
              <li className="flex items-center gap-2">
                <MdPhone className="text-[#C5A15C] text-xl" />
                <span>+1 (301)-755-8105 / +1 (301)-755-8202</span>
              </li>
              <li className="flex items-center gap-2">
                <MdPhone className="text-[#C5A15C] text-xl" />
                <span>+971 588-878-081 / +971 585-859-178</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        
        <div className="mt-10 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm border-t border-gray-700 pt-6">
          <p>©Well Global INC 2025. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <p className="hover:underline">
              <Link to='/termsofuse'>Terms of use</Link>
            </p>
            <p className="hover:underline">
            <Link to='/privacypolicy'>Privacy Policy</Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
