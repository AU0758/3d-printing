'use client'

import React, { useEffect, useState } from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { BsFillCircleFill } from "react-icons/bs";

const Printer = () => {
  const [filements, setFilements] = useState([]);
  const [Iindex, setIindex] = useState(0);

  useEffect(() => {
    const getPrinter = async () => {
      try {

        const res = await fetch('/api/filement', { cache: 'no-store' });
        console.log('Data fetching: %cOK', 'color: green');
        const data = await res.json();

        console.log(data);

        const path = 'app/tmp/'+data.image
        
        setFilements(data.filements);
      } catch (error) {
        console.error('Data fetching: %cFAILED', 'color:red', error);
      }
    };

    getPrinter();
  }, []); // Run the effect only once on component mount

  function showNextPrinter() {
    setIindex(index => {
      if (index === filements.length - 1) return 0
      return index + 1
    })
  }

  function showPrevPrinter() {
    setIindex(index => {
      if (index === 0) return filements.length - 1
      return index - 1
    })
  }

  return (
    <section
      aria-label="Image Slider"
      style={{ width: "50vw", height: "calc(100vh - 30px - 2.5rem)", position: "relative" }}
      
    >
      <a href="#after-image-slider-controls" className="skip-link">
        Skip Image Slider Controls
      </a>
      <div
        style={{
          width: "100%",
          height: "calc(100vh - 30px - 2.5rem)",
          display: "flex",
          overflow: "hidden",
          placeItems: "center",
          alignItems: "center"
        }}
      >
        {filements.map(({ name, bg, image, price, length }, index) => (
          <div 
          aria-hidden={Iindex !== index}
          className="img-slider-img"
          style={{ translate: `${-100 * Iindex}%`, backgroundColor: bg}}
          >
            <div className='flex items-center justify-center flex-col h-[100%]'>
              <p className='m-1 absolute top-0 left-0 flex items-center justify-center text-white opacity-80 bg-[#0002] rounded w-[30px] h-[30px]'>{price}<b className='text-[8px]'>/mm</b></p>
              <p className='m-1 absolute top-0 right-0 text-white opacity-80 bg-[#0002] rounded w-auto p-1 h-[30px]'>{length}cm</p>
              <p className='absolute text-[#fff9] text-8xl uppercase font-extrabold z-1'>{name}</p>
              <img  src={image}  alt={name} className='z-10 opacity-90 transition-all hover:scale-110 hover:rotate-6'/>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={showPrevPrinter}
        className="img-slider-btn"
        style={{ left: 0 }}
        aria-label="View Previous Image"
      >
        <AiOutlineArrowLeft aria-hidden className='opacity-50'/>
      </button>
      <button
        onClick={showNextPrinter}
        className="img-slider-btn"
        style={{ right: 0 }}
        aria-label="View Next Image"
      >
        <AiOutlineArrowRight aria-hidden className='opacity-50'/>
      </button>
      <div
        style={{
          position: "absolute",
          bottom: ".5rem",
          left: "50%",
          translate: "-50%",
          display: "flex",
          gap: ".25rem",
        }}
      >
        {filements.map((_, index) => (
          <button
            key={index}
            className="img-slider-dot-btn transition-all"
            aria-label={`View Image ${index + 1}`}
            onClick={() => setIindex(index)}
          >
            {index === Iindex ? (
              <BsFillCircleFill aria-hidden className='opacity-80 transition-all scale-105'/>
            ) : (
              <BsFillCircleFill aria-hidden className='opacity-50 transition-all'/>
            )}
          </button>
        ))}
      </div>
      <div id="after-image-slider-controls" />
    </section>
  );
};

export default Printer;
