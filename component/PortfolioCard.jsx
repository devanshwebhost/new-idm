'use client';

const PortfolioCard = ({ title, video, type }) => (
  <div className="group bg-[#111] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300">
    <div className="relative w-full h-60">
      <video
        src={video}
        autoPlay
        muted
        loop
        playsInline
        loading="lazy"
        poster="/assets/logo.webp"
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
    </div>
    <div className="p-4">
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="text-sm text-gray-400">{type}</p>
    </div>
  </div>
);

export default PortfolioCard;
