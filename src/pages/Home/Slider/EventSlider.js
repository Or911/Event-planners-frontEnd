import React, { useEffect, useState } from "react";
import Event from "../EventCard/Event";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import './EventSlider.css'

export default function EventSlider({ events }) {
  const LIMIT = events.length / 2
  const [eventSlide, setEventSlide] = useState([]);

  const eventsArrLimit = function(indexStarting){
    return events.slice(indexStarting , indexStarting + LIMIT);
  }

  useEffect(() => {
    setEventSlide(eventsArrLimit(0));

    console.log("EventSlider");
  }, []);

  const nextSlide = function () {
    if (eventSlide.length + 1  < events.length) {
      setEventSlide(eventsArrLimit(eventSlide.length + 1))
    } else {
      setEventSlide(eventsArrLimit(0))
    }
  };

  const prevSlide = function () {
    if (eventSlide.length !== LIMIT) {
      setEventSlide(eventsArrLimit(eventSlide.length - 1))
    } else {
      setEventSlide(eventsArrLimit(LIMIT))
    }
  };

  return (
    <div className="eventSlider">
        <span className="sliderEvent">
          {eventSlide.map((userEvent) => (
            <Event key={userEvent._id}  userEvent={userEvent}/>
          ))}
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
