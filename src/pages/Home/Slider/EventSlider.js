import React, { useEffect, useState } from "react";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import './EventSlider.css'
import { useNavigate} from 'react-router-dom';

export default function EventSlider({ events }) {
  const navigate = useNavigate();
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
              <span className="sliderButtonPerv">
            <div onClick={prevSlide}> <KeyboardArrowLeftIcon fontSize='large' className="arrowBT"/> </div>
        </span>

        {eventSlide.map((event , index) => (
          <div>
            <img src={event?.img} alt={event?.name} className='imgEvent' onClick={()=>navigate(`/events/${event._id}`)}/>

          </div>
           

        ))}
        

        <span className="sliderButtonNext">
            <div onClick={nextSlide}> <KeyboardArrowRightIcon fontSize="large" className="arrowBT"/></div>
        </span>
    </div>
  );
}
