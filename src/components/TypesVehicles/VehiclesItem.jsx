import React from 'react';

export const VehiclesItem = ({ img, name, description, carct, icon }) => (
  <div className="bg-gradient-to-bl from-[#1BAA6E] to-[#0F3D2E] text-white flex flex-col p-4 sm:p-5 md:p-6 rounded-xl border border-[#CFB53B]">
    <div className="mb-3 sm:mb-4">
      <img
        src={img}
        alt={name}
        className="w-full h-auto object-contain rounded-lg max-h-64 sm:max-h-72 md:max-h-80"
      />
    </div>
    <div className="flex items-center gap-2 sm:gap-3 md:gap-4 mb-3 sm:mb-4">
      <div className="flex-shrink-0">
        {React.cloneElement(icon, { className: "w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" })}
      </div>
      <h5 className="text-xl sm:text-2xl md:text-3xl font-bold">{name}</h5>
    </div>

    <p className="font-normal mb-3 sm:mb-4 text-base sm:text-lg">{description}</p>

    <div className="mt-auto">
      <h6 className="font-semibold mb-1 sm:mb-2 text-lg sm:text-xl">Features:</h6>
      <ul className="list-disc list-inside space-y-1 grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-2">
        {carct.map((feature, idx) => (
          <li key={idx} className="text-base sm:text-lg text-white">
            {feature}
          </li>
        ))}
      </ul>
    </div>
  </div>
);
