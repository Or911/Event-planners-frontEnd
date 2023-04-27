import Event from "./EventCard/Event";
import { getEvents } from "../../ServerAPI/EventAPI";
import "./Home.css";
import { useEffect, useState } from "react";
import EventsFilters from "../../components/EventsFilters/EventsFilters";

export default function Home() {
  const [eventsData, setEventsData] = useState([]);
  const [eventsCategory, setEventsCategory] = useState(null);
  const [filterData, setFilterData] = useState({
    categoryFilter: "",
    dateFilter: null,
  });

  useEffect(() => {
    getEvents(filterData.categoryFilter, filterData.dateFilter).then((events) => {
      setEventsData(events.data);
      if(eventsCategory === null){
        setEventsCategory(events.data.map(({ _id }) => ({ _id })))
      } 
    });
    console.log("Home");
  }, [filterData]);


  return (
    <div className="home page">

      <EventsFilters
        eventsData={eventsCategory}
        setFilterData={setFilterData}
        filterData={filterData}
      />

      {eventsData.map(({ _id, events }) => (
        <div key={_id}>
          <h1> {_id} </h1>
          <div className="eventsCategory" key={_id}>
            {events.map((e) => (
              <Event key={e._id} userEvent={e} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
