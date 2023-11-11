'use client'

import React, { useEffect, useState } from 'react';
import { ArrowBigLeft, ArrowBigRight, Circle, CircleDot } from "lucide-react"

const Printer = () => {
  const [printers, setPrinters] = useState([]);
  const [Iindex, setIindex] = useState(0);

  useEffect(() => {
    const getPrinter = async () => {
      try {
        const res = await fetch('http://localhost:3000/api/printer', { cache: 'no-store' });
        console.log('Data fetching: %cOK', 'color: green');
        const data = await res.json();
        setPrinters(data.printers);
      } catch (error) {
        console.error('Data fetching: %cFAILED', 'color:red', error);
      }
    };

    getPrinter();
  }, []); // Run the effect only once on component mount

  function showNextPrinter() {
    setIindex(index => {
      if (index === images.length - 1) return 0
      return index + 1
    })
  }

  function showPrevPrinter() {
    setIindex(index => {
      if (index === 0) return images.length - 1
      return index - 1
    })
  }

  return (
    <section
      aria-label="Image Slider"
      style={{ width: "100%", height: "100%", position: "relative" }}
    >
      <a href="#after-image-slider-controls" className="skip-link">
        Skip Image Slider Controls
      </a>
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          overflow: "hidden",
        }}
      >
        {printers.map(({ name, bg, image, price, availability }, index) => (
          <p>p</p>
        ))}
      </div>
      <button
        onClick={showPrevPrinter}
        className="img-slider-btn"
        style={{ left: 0 }}
        aria-label="View Previous Image"
      >
        <ArrowBigLeft aria-hidden />
      </button>
      <button
        onClick={showNextPrinter}
        className="img-slider-btn"
        style={{ right: 0 }}
        aria-label="View Next Image"
      >
        <ArrowBigRight aria-hidden />
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
        {printers.map((_, index) => (
          <button
            key={index}
            className="img-slider-dot-btn"
            aria-label={`View Image ${index + 1}`}
            onClick={() => setImageIndex(index)}
          >
            {index === imageIndex ? (
              <CircleDot aria-hidden />
            ) : (
              <Circle aria-hidden />
            )}
          </button>
        ))}
      </div>
      <div id="after-image-slider-controls" />
    </section>
  );
};

export default Printer;
