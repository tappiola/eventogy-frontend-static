import { getEvents } from "../lib/actions";
import EventCard from "./EventCard";
import "./Events.css";

const Events = async () => {
  const { data } = await getEvents();

  return (
    <>
      {data.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </>
  );
};

export default Events;
