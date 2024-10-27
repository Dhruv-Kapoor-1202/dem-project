import { useState } from "react";
import eventsData from "./data/eventsData";
import EventCard from "./components/EventCard";
import EventModal from "./components/EventModal";
import Navbar from "./components/Navbar";

function App() {
  const [filteredEvents, setFilteredEvents] = useState(eventsData);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleSearch = async (query) => {
    // await new Promise((r) => setTimeout(r, 3000));
    const filtered = eventsData.filter(
      (event) =>
        event.name.toLowerCase().includes(query.toLowerCase()) ||
        event.location.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredEvents(filtered);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-start gap-4 mb-10 animate-fade-in">
        <Navbar onSearch={handleSearch} />
        <div className="w-full max-w-screen-md border divide-y-2 animate-fade-in sm:rounded-xl divide-white/5 bg-gray-950/90 backdrop-blur-sm border-white/15">
          <div className="grid grid-cols-4 p-4 text-gray-400 duration-200 ">
            <h3 className="col-span-2">Name</h3>
            <p className="col-span-1">Location</p>
            <p className="text-right">Date</p>
          </div>
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event) => (
              <EventCard
                key={event.id}
                event={event}
                onClick={setSelectedEvent}
              />
            ))
          ) : (
            <div className="grid w-full grid-cols-4 gap-2 px-4 py-6 duration-200 border cursor-pointer hover:bg-gray-900/20 sm:rounded-xl border-white/15 animate-pulse">
              <div className="h-2 col-span-2 rounded bg-slate-700"></div>
              <div className="h-2 col-span-1 rounded bg-slate-700"></div>
              <div className="h-2 col-span-1 rounded bg-slate-700"></div>
            </div>
          )}
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
