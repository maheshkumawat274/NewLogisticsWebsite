
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
          <h1 className="text-2xl md:text-5xl font-bold text-gray-100 leading-tight mb-4">Engineered for today, prepared for tomorrow.</h1>
          <p className="text-md md:text-2xl text-gray-200 mb-2">"Well Global Inc is a premier, diversified energy company strategically positioned to deliver superior and sustainable returns. As an industry leader, WellGlobal Inc is built to withstand market cycles with exceptional flexibility, leveraging both world-class oil assets and top-tier natural gas assets across the country.”</p>
          <div className="text-center sm:text-start sm:space-x-4 mt-5">
            <button><Link to='/contactus'><Homebtn1/></Link></button>
            
          </div>
        </div>
    </section>
  );
};

export default HomeTopSection;