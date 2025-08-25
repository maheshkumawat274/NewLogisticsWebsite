
// Section1.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import Homebtn1 from '../../btns/HomeBtns';

const HomeTopSection: React.FC = () => {
  return (
    
    <section
      className="w-full  h-[70vh] md:h-[90vh] flex items-center bg-cover bg-[70%_center] lg:bg-center"
      style={{ backgroundImage: "url('/imgs/hometop.png')",
        backgroundPosition: 'top center'
       }} 
    >
     
      <div className="relative max-w-6xl flex-1 px-4 sm:px-12">
          <h1 className="text-2xl md:text-5xl font-bold text-gray-100 leading-tight mb-4">WELL GLOBAL INC (WGI) </h1>
          <p className="text-md md:text-2xl text-gray-200 mb-2">"WELL GLOBAL INC (WGI) is a diversified commodities company, headquartered in Wyoming, USA, with a strong international presence in Houston, Rotterdam, Dubai, and East Africa.”</p>
          <div className="text-center sm:text-start sm:space-x-4 mt-5">
            <button><Link to='/contactus'><Homebtn1/></Link></button>
            
          </div>
        </div>
    </section>
  );
};

export default HomeTopSection;