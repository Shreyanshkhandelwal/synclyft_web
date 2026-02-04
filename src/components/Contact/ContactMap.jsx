import React, { useState } from "react";

const LocationsPage = () => {
  const [selectedLocation, setSelectedLocation] = useState("india");

  const locations = [
    {
      id: "india",
      name: "India (HQ)",
      address: "Synclyft Technologies",
      city: "Bengaluru, Karnataka, India",
    },
    {
      id: "usa",
      name: "United States",
      address: "Synclyft Global Operations",
      city: "San Francisco, California, USA",
    },
    {
      id: "uk",
      name: "United Kingdom",
      address: "Synclyft Europe Office",
      city: "London, United Kingdom",
    },
  ];

  const currentLocation = locations.find(
    (loc) => loc.id === selectedLocation
  );

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-[1400px] mx-auto px-8 md:px-12 lg:px-16 py-20">

        {/* HEADER */}
        <div className="mb-20">
          <h1 className="text-6xl font-bold mb-6">Locations</h1>
          <p className="text-white/70 text-lg max-w-3xl">
            Synclyft operates globally to support students, professionals,
            institutes, and companies with AI-powered interview preparation
            and hiring solutions.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-[520px_1fr] gap-14 items-start">

          {/* LEFT SIDE – LOCATION LIST */}
          <div>
            {locations.map((location) => (
              <div
                key={location.id}
                onClick={() => setSelectedLocation(location.id)}
                className={`border-l-4 pl-8 py-8 cursor-pointer transition-all duration-300 ${
                  selectedLocation === location.id
                    ? "border-[#9fd9e5] bg-zinc-800/40"
                    : "border-transparent hover:border-zinc-600"
                }`}
              >
                <h2 className="text-3xl font-semibold mb-4">
                  {location.name}
                </h2>

                <div className="text-white/70 font-medium space-y-1 mb-6 leading-relaxed">
                  <p>{location.address}</p>
                  <p>{location.city}</p>
                </div>

                <button className="text-[#9fd9e5] font-medium hover:text-white transition-colors">
                  View Map →
                </button>
              </div>
            ))}
          </div>

          {/* RIGHT SIDE – MAP */}
          <div className="relative h-[520px] lg:h-[720px] w-full overflow-hidden rounded-xl border border-white/10 bg-zinc-900">
            <iframe
              title={`Map of ${currentLocation.name}`}
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps?q=${encodeURIComponent(
                currentLocation.city
              )}&output=embed`}
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default LocationsPage;
