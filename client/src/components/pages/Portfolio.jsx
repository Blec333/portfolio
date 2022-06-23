import React from 'react';
import CarouselAutodesk from '../CarouselAutodesk';
import CarouselMERNStack from '../CarouselMERNStack';
import CarouselWorkbooks from '../CarouselWorkbooks';

export default function Portfolio() {
  return (
    <>
      <div className="flex flex-col items-center">
        <h1 className="text-center text-3xl text-neutral-content fontsize-bold">MERN Stack</h1>
        <CarouselMERNStack />
        <h1 className="text-center text-3xl text-neutral-content fontsize-bold">Autodesk</h1>
        <CarouselAutodesk />
        <h1 className="text-center text-3xl text-neutral-content fontsize-bold">Workbooks</h1>
        <CarouselWorkbooks />
      </div>
    </>
  );
}