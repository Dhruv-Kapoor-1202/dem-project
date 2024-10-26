import { useState } from "react";
import eventsData from "./data/eventsData";
import EventCard from "./components/EventCard";
import EventModal from "./components/EventModal";
import Navbar from "./components/Navbar";

function App() {
  const [filteredEvents, setFilteredEvents] = useState(eventsData);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleSearch = (query) => {
    const filtered = eventsData.filter(
      (event) =>
        event.name.toLowerCase().includes(query.toLowerCase()) ||
        event.location.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredEvents(filtered);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-start gap-4 mb-10">
        {/* <div className="absolute top-0 z-[-2]  w-full h-screen max-h-full  bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00000d_1px)] bg-[size:20px_20px]"></div> */}
        <Navbar onSearch={handleSearch} />
        <div className="border divide-y-2 sm:rounded-xl divide-white/5 bg-gray-950/90 backdrop-blur-sm border-white/15">
          {filteredEvents.map((event) => (
            <EventCard
              key={event.id}
              event={event}
              onClick={setSelectedEvent}
            />
          ))}
        </div>
        <EventModal
          event={selectedEvent}
          onClose={() => setSelectedEvent(null)}
        />
      </div>
    </>
  );
}

export default App;
