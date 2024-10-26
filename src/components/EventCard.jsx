/* eslint-disable react/prop-types */
// import "./EventCard.css";

const EventCard = ({ event, onClick }) => (
  <div
    className="grid grid-cols-4 px-4 pt-4 pb-4 cursor-pointer hover:bg-gray-900/40"
    onClick={() => onClick(event)}
  >
    <h3 className="col-span-2">{event.name}</h3>
    <p className="col-span-1">{event.location}</p>
    <p className="text-right">{event.date}</p>
  </div>
);

export default EventCard;
