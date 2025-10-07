import React from "react";

function TicketCard({ id, status, title, description }) {
  return (
    <div className="relative bg-gradient-to-br from-[#0b1725] to-[#102235] border border-cyan-400/40 rounded-xl p-5 shadow-lg text-gray-200 backdrop-blur-sm hover:scale-[1.02] transition-transform duration-200">
      {/* ID and Status */}
      <div className="flex items-center justify-between mb-3">
        <p className="text-sm text-gray-300 font-medium">
          ID Number: <span className="font-semibold text-white">#{id}</span>
        </p>
        <span className="flex items-center gap-2 bg-gray-700/50 text-green-400 text-xs font-medium px-3 py-1 rounded-full">
          <span className="w-2 h-2 bg-green-400 rounded-full"></span>
          {status}
        </span>
      </div>

      {/* Title */}
      <h3 className="inline-block text-blue-400 font-semibold text-base bg-blue-900/40 px-2 py-1 rounded mb-2">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
    </div>
  );
}

function TicketsSection() {
  const tickets = [
    {
      id: "4549273",
      status: "Approved",
      title: "Delayed Start of Classes by Lecturer",
      description:
        "Lecturer X has been consistently starting 20 minutes late for 8am sessions.",
    },
    {
      id: "4549274",
      status: "Approved",
      title: "Broken Projector in Lecture Hall",
      description:
        "The projector in Lecture Hall 3 has not been working for the past week.",
    },
    {
      id: "4549275",
      status: "Pending",
      title: "Air Conditioning Issue in Lab",
      description:
        "The air conditioning in the main computer lab is not cooling properly.",
    },
  ];

  return (
    <section className="w-full py-10">
      <h2 className="text-xl font-semibold text-gray-100 mb-6 px-4">
        Your Tickets
      </h2>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {tickets.map((ticket) => (
          <TicketCard key={ticket.id} {...ticket} />
        ))}
      </div>
    </section>
  );
}

export default TicketsSection;
