/* eslint-disable react/prop-types */
// import "./EventModal.css";

const EventModal = ({ event, onClose }) => {
  if (!event) return null;

  return (
    <div
      className="fixed flex flex-col items-center justify-center w-full h-screen p-4 bg-black/5 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex flex-col w-full max-w-screen-md overflow-hidden transition border shadow-sm bg-gray-950 group rounded-xl focus:outline-none focus:shadow-lg border-white/15"
      >
        <div className="relative pt-[50%] sm:pt-[60%] lg:pt-[80%] rounded-t-xl overflow-hidden">
          {/* <img
            className="absolute top-0 object-cover transition-transform duration-500 ease-in-out size-full start-0 group-hover:scale-105 group-focus:scale-105 rounded-t-xl"
            src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
            alt="Card Image"
          /> */}
          <button
            type="button"
            onClick={onClose}
            className="absolute z-10 inline-flex items-center justify-center p-2 text-gray-400 duration-200 rounded-md backdrop-blur-sm bg-white/60 top-5 right-5 w-fit hover:text-gray-500 hover:bg-white/90 hover:backdrop-blur-lg focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
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
            className="absolute top-0 object-cover transition-transform duration-500 ease-in-out size-full start-0 group-hover:scale-105 group-focus:scale-105 rounded-t-xl bg-gradient-to-tr from-gray-200 to-gray-300"
            src={event.image}
            alt={event.name}
          />
        </div>
        <div className="p-4 md:p-5">
          <h3 className="text-lg font-bold text-white">
            {event.name}{" "}
            <span className="text-xs font-bold text-neutral-400">
              {event.date}
            </span>
          </h3>
          <p className="mt-1 text-neutral-400">{event.description}</p>
        </div>
      </div>
    </div>
  );
};

export default EventModal;
