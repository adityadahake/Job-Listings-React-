import bgHeaderImg from "./assets/images/bg-header-desktop.svg";

import JobListing from "./components/JobListing";

function App() {
  return (
    <div className="min-h-screen bg-desaturated-dark-cyan-primary bg-opacity-15">
      <div>
        <img
          src={bgHeaderImg}
          alt="background header image"
          className="w-full h-36 lg:h-44 object-cover bg-desaturated-dark-cyan-primary"
        />
      </div>
      <div className="container lg:max-w-[1200px] mx-auto pt-12">
        <div className="flex flex-col gap-10 p-6">
          <JobListing />
          <JobListing />
        </div>
      </div>
    </div>
  );
}

export default App;
