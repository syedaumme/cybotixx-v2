import React from "react";

const EventsPage = () => {
  return (
    <div className="w-full py-3 space-y-6 px-2 md:p-3">
      <div className="border border-red-500 rounded-lg overflow-hidden md:flex w-full">
        <div className="aspect-video border border-yellow-500 w-full md:w-1/2" />
        <div className="p-2">
          <div className="justify-between flex">
            <h2>Event Name</h2>
            <p>Upcoming</p>
          </div>
          <p>Event Slogan</p>
          <p>Event Date</p>
          <p>Participants</p>
        </div>
      </div>
      <div className="border border-red-500 rounded-lg overflow-hidden md:flex w-full">
        <div className="aspect-video border border-yellow-500 w-full md:w-1/2" />
        <div className="p-2">
          <div className="justify-between flex">
            <h2>Event Name</h2>
            <p>Upcoming</p>
          </div>
          <p>Event Slogan</p>
          <p>Event Date</p>
          <p>Participants</p>
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
