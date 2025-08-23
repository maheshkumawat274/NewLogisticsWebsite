import React from "react";

interface CardProps {
  img: string;
  title: string;
  description: string;
}

const CardItem: React.FC<CardProps> = ({img, title, description }) => {
  return (
<div className="relative flex w-85 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-xl">
  <div className="relative mx-4 -mt-6 h-50 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
    <img src={img} alt={title}  className="w-full h-full object-cover" />
  </div>
  <div className="p-6">
    <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
    {title}
    </h5>
    <p className="block font-sans text-sm leading-relaxed text-inherit antialiased">
    {description} 
    </p>
  </div>
  
</div>
  );
};

export default CardItem;
