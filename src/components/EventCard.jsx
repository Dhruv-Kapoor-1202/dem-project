/* eslint-disable react/prop-types */
// import "./EventCard.css";

const EventCard = ({ event, onClick }) => (
  <div
    className="grid grid-cols-4 p-3 px-6 duration-200 cursor-pointer hover:bg-gray-100"
    onClick={() => onClick(event)}
  >
    <h3 className="col-span-2 font-semibold text-gray-800">{event.name}</h3>
    <p className="col-span-1 text-gray-600">{event.location}</p>
    <p className="text-right text-gray-600">{event.date}</p>
  </div>
);

export default EventCard;
