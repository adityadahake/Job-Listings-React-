import bgHeaderDesktopImg from "./assets/images/bg-header-desktop.svg";
import JobListing from "./components/JobListing";
// import bgHeaderMobileImg from "./assets/images/bg-header-mobile.svg";

function App() {
  return (
    <>
      <div>
        <img
          src={bgHeaderDesktopImg}
          alt="background header image"
          className="w-full bg-desaturated-dark-cyan-primary"
        />
      </div>
      <div className="mx-24 my-12">
        <JobListing />
      </div>
    </>
  );
}

export default App;
