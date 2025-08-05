'use client';
import React from 'react';

const QuickGallery = ({ items }) => {
  return (
    <div className="bg-black h-[100vh] overflow-y-scroll md:hidden">
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <div key={index} className=" p-4 rounded-lg shadow-lg text-white hover:scale-105 transition-all duration-300">
            {item.type === 'image' ? (
              <img
                src={item.content}
                alt={`Gallery item ${index + 1}`}
                className="w-full h-64 object-cover rounded-md"
              />
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuickGallery;
