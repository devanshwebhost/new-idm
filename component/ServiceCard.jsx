'use client';

import React from 'react';

const ServiceCard = ({ title, description, videoSrc, poster }) => {
  return (
    <div className="bg-white p-6 shadow rounded-xl hover:scale-[1.02] transition">
      <video
        src={videoSrc}
        className="w-full h-40 object-cover rounded mb-4"
        autoPlay
        loop
        muted
        playsInline
        poster={poster}
      />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
};

export default ServiceCard;
