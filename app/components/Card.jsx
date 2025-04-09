// InfoBoxList.jsx
import React from 'react';

const Card = ({ icon, iconBg, title, description, className = '' }) => {
    return (
      <div className={`bg-white shadow-md p-6 rounded-2xl flex flex-col gap-4 ${className}`}>
        <div className={`w-12 h-12 flex items-center justify-center rounded ${iconBg}`}>
          {icon}
        </div>
        <h3 className="font-inter font-bold text-[14px] text-[#0F243D] max-w-[330px] leading-[25px] capitalize">
          {title}
        </h3>
        <p className=" max-w-[200px] text-[#0F243DCC] font-inter font-normal text-[12px] leading-[19px]">
          {description}
        </p>
      </div>
    );
  };
  
  export default Card;
  
