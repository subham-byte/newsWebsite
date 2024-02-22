/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const Cards = ({ card, className }) => {
  return (
    <div className={`flex w-full lg:w-1/3 ${className}`} style={{ height: '12rem' }}>
      <img src={card.image} alt="image1" className="w-1/3 lg:w-full h-auto" />
      <div className="flex flex-col justify-center pl-5">
        <h1 className="text-4xl lg:text-5xl font-semibold text-gray-400 mb-2 lg:mb-3">{card.srNum}</h1>
        <h3 className="text-2xl lg:text-3xl font-extrabold my-3">{card.title}</h3>
        <p className="text-gray-500 text-lg lg:text-xl font-semibold">{card.description}</p>
      </div>
    </div>
  );
};

export default Cards;
