/* eslint-disable react/prop-types */
// import "./EventModal.css";

const EventModal = ({ event, onClose }) => {
  if (!event) return null;

  return (
    <div
      className="fixed flex flex-col items-center justify-center w-full h-screen p-4 bg-white/5 backdrop-blur-sm "
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex flex-col w-full max-w-screen-md border shadow-lg bg-gray-50 overflow-clip animate-scale-up group rounded-xl focus:outline-none focus:shadow-lg border-black/15 "
      >
        <div className="relative pt-[50%] sm:pt-[60%] lg:pt-[80%] rounded-t-xl overflow-hidden">
          <button
            type="button"
            onClick={onClose}
            className="absolute z-10 inline-flex items-center justify-center p-2 text-gray-700 duration-200 rounded-md backdrop-blur-sm bg-white/60 top-5 right-5 w-fit hover:text-gray-500 hover:bg-white/90 hover:backdrop-blur-lg focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          >
            <span className="sr-only">Close menu</span>
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <img
            className="absolute top-0 left-0 object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-105 group-focus:scale-105 rounded-t-xl bg-gradient-to-tr from-gray-200 to-gray-300"
            loading="lazy"
            src={event.image}
            alt={event.name}
          />
        </div>
        <div className="p-4 md:p-5">
          <h3 className="text-lg font-bold text-gray-800">
            {event.id}. {event.name}{" "}
            <span className="text-xs font-semibold text-neutral-600">
              {event.date}
            </span>
          </h3>
          <p className="mt-1 text-neutral-700">{event.description}</p>
        </div>
      </div>
    </div>
  );
};

export default EventModal;
