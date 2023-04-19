import React, { useState } from "react";
import Event from "../EventCard/Event";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import './EventSlider.css'

export default function EventSlider({ events }) {
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = function () {
    if (slideIndex !== events.length) {
      setSlideIndex(slideIndex + 1);
    } else {
      setSlideIndex(1);
    }
  };

  const prevSlide = function () {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else {
      setSlideIndex(events.length);
    }
  };

  return (
    <div className="eventSlider">
        <span className="sliderEvent1">
            <Event event={events[slideIndex]}/>
        </span>
        <span className="sliderEvent2">
            <Event event={events[slideIndex + 1]} />
        </span>
        <span className="sliderEvent3">
            <Event event={events[slideIndex + 2]} />
        </span>

        
        <span className="sliderButtonPerv">
            <button onClick={prevSlide}> <ArrowBackIcon /> </button>
        </span>
        <span className="sliderButtonNext">
            <button onClick={nextSlide}> <ArrowForwardIcon /></button>
        </span>
    </div>
  );
}
