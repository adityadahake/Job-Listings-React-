import JobListing from "./components/JobListing";
import TagFilterBar from "./components/TagFilterBar";

function App() {
  return (
    <div className="min-h-screen bg-desaturated-dark-cyan-primary bg-opacity-15 relative">
      <div className="h-36 lg:h-44 bg-desaturated-dark-cyan-primary bg-mobile lg:bg-desktop bg-cover bg-center"></div>
      <div className="relative w-full -top-8">
        <div className="container lg:max-w-[1200px] mx-auto">
          <div className="px-6">
            <TagFilterBar />
          </div>
        </div>
      </div>
      <div className="container lg:max-w-[1200px] mx-auto">
        <div className="flex flex-col gap-12 lg:gap-10 p-6">
          <JobListing />
          <JobListing />
        </div>
      </div>
    </div>
  );
}

export default App;
