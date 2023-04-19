import React, { useEffect, useState } from "react";
import Event from "../EventCard/Event";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import './EventSlider.css'

export default function EventSlider({ events }) {
  const LIMIT = 3
  const [eventSlide, setEventSlide] = useState([]);
  const [slideIndex, setSlideIndex] = useState(LIMIT);

  useEffect(() => {
    setEventSlide(events.slice(slideIndex - LIMIT , slideIndex));

    console.log("EventSlider");
  }, [events, slideIndex]);

  const nextSlide = function () {
    if (slideIndex !== events.length) {
      setSlideIndex(slideIndex + 1);
    } else {
      setSlideIndex(LIMIT);
    }
  };

  const prevSlide = function () {
    if (slideIndex !== LIMIT) {
      setSlideIndex(slideIndex - 1);
    }
  };

  return (
    <div className="eventSlider">

        {eventSlide.map((userEvent , index) => (
          <span key={index} className={`sliderEvent${index}`}>
            <Event key={userEvent._id}  userEvent={userEvent}/>
          </span>
        ))}
        
        <span className="sliderButtonPerv">
            <button onClick={prevSlide}> <ArrowBackIcon /> </button>
        </span>
        <span className="sliderButtonNext">
            <button onClick={nextSlide}> <ArrowForwardIcon /></button>
        </span>
    </div>
  );
}
