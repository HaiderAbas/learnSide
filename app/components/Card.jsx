// InfoBoxList.jsx
import React from 'react';

const Card = ({ icon, iconBg, title, description, className = '' }) => {
    return (
      <div className={`shadow-md p-4 rounded-2xl flex flex-col gap-4 ${className}`}>
        <div className={`w-12 h-12 flex items-center justify-center rounded ${iconBg}`}>
          {icon}
        </div>
        <h3 className="font-inter  font-bold text-[14px] max-w-[330px] leading-[25px] capitalize">
          {title}
        </h3>
        <p className=" max-w-[200px]  font-inter font-normal text-[12px] leading-[19px]">
          {description}
        </p>
      </div>
    );
  };
  
  export default Card;
  
