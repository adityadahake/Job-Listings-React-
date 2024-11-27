import { useState } from "react";

import JobListing from "./components/JobListing";
import TagFilterBar from "./components/TagFilterBar";

import { listingsArray } from "./assets/data/data";

function App() {
  const [activeTags, setActiveTags] = useState([]);

  const listings = listingsArray;

  return (
    <div className="min-h-screen bg-desaturated-dark-cyan-primary bg-opacity-15 relative">
      {/* Header */}
      <div className="h-36 lg:h-44 bg-desaturated-dark-cyan-primary bg-mobile lg:bg-desktop bg-cover bg-center"></div>
      {/* Filter */}
      {activeTags.length > 0 ? (
        <div className="relative w-full -top-8">
          <div className="container lg:max-w-[1200px] mx-auto">
            <div className="px-6">
              <TagFilterBar
                activeTags={activeTags}
                setActiveTags={setActiveTags}
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="h-12"></div>
      )}
      {/* Listings */}
      <div className="container lg:max-w-[1200px] mx-auto">
        <div className="flex flex-col gap-12 lg:gap-10 p-6">
          {listings.map((listing) => (
            <JobListing
              key={listing.id}
              listing={listing}
              activeTags={activeTags}
              setActiveTags={setActiveTags}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
