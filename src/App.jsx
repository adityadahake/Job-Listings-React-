import bgHeaderImg from "./assets/images/bg-header-desktop.svg";

import JobListing from "./components/JobListing";
import TagFilterBar from "./components/TagFilterBar";

function App() {
  return (
    <div className="min-h-screen bg-desaturated-dark-cyan-primary bg-opacity-15 relative">
      <div>
        <img
          src={bgHeaderImg}
          alt="background header image"
          className="w-full h-36 lg:h-44 object-cover bg-desaturated-dark-cyan-primary"
        />
      </div>
      <div className="relative w-full -top-8">
        <div className="container lg:max-w-[1200px] mx-auto">
          <div className="px-6">
            <TagFilterBar />
          </div>
        </div>
      </div>
      <div className="container lg:max-w-[1200px] mx-auto">
        <div className="flex flex-col gap-10 p-6">
          <JobListing />
          <JobListing />
        </div>
      </div>
    </div>
  );
}

export default App;
