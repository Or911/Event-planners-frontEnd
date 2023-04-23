import React, { useEffect, useState } from "react";
import Event from "../EventCard/Event";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import './EventSlider.css'

export default function EventSlider({ events }) {
  const LIMIT = 1
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

        {eventSlide.map((event , index) => (
          <div></div>
            <Event key={event._id}  userEvent={event}/>

        ))}
        
        <span className="sliderButtonPerv">
            <div onClick={prevSlide}> <KeyboardArrowLeftIcon fontSize='large' className="arrowBT"/> </div>
        </span>
        <span className="sliderButtonNext">
            <div onClick={nextSlide}> <KeyboardArrowRightIcon fontSize="large" className="arrowBT"/></div>
        </span>
    </div>
  );
}
