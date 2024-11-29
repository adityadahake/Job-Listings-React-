import { useEffect, useState } from "react";
import axios from "axios";

import JobListing from "./components/JobListing";
import TagFilterBar from "./components/TagFilterBar";

function App() {
  const [activeTags, setActiveTags] = useState([]);
  const [jobListings, setJobListings] = useState([]);
  const [originalList, setOriginalList] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    // Fetch Data from database
    const apiUrl = import.meta.env.VITE_LISTING_API_BASE_URL + "/listing/all";
    axios
      .get(apiUrl)
      .then((res) => {
        // modify fetched data according to frontend schema
        const JobListingsData = res.data.map((listing) => ({
          ...listing,
          languages: listing.languages.map((language) => language.name),
          tools: listing.tools.map((tool) => tool.name),
        }));

        setOriginalList(JobListingsData);
        setJobListings(JobListingsData);
      })
      .catch((err) => {
        if (err.code === "ERR_NETWORK") {
          setErrorMessage("API Server Offline");
        } else {
          setErrorMessage(
            "Something Went Wrong! Please try again after some time."
          );
        }
      });
  }, []);

  useEffect(() => {
    let filteredList = originalList;
    if (activeTags.length !== 0)
      activeTags.forEach((tag) => {
        filteredList = filteredList.filter(
          (job) =>
            tag === job.role ||
            tag === job.level ||
            job.languages.includes(tag) ||
            job.tools.includes(tag)
        );
      });
    setJobListings(filteredList);
  }, [activeTags, originalList]);

  return (
    <div className="min-h-screen bg-desaturated-dark-cyan-primary bg-opacity-15 relative">
      {/* Header */}
      <div className="h-36 lg:h-44 bg-desaturated-dark-cyan-primary bg-mobile lg:bg-desktop bg-cover bg-center"></div>
      {/* Error Message */}
      <div
        hidden={!errorMessage}
        className="text-2xl font-bold px-9 py-6 text-very-dark-grayish-cyan"
      >
        {errorMessage}
      </div>
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
          {jobListings.map((listing) => (
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
