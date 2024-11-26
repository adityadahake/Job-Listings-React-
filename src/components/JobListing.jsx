import photosnapLogo from "../assets/images/photosnap.svg";

function JobListing() {
  return (
    <div className="border-l-4 px-6 py-9 lg:px-10 relative rounded shadow-lg flex flex-col lg:flex-row lg:items-center gap-3 lg:gap-6 whitespace-nowrap bg-very-light-cyan border-desaturated-dark-cyan-primary shadow-desaturated-dark-cyan-primary/30">
      <div className="w-12 h-12 lg:w-fit lg:h-fit absolute lg:static -top-6">
        <img src={photosnapLogo} alt="photosnap" />
      </div>
      <div className="grid gap-1">
        <div className="flex gap-2 items-center font-bold">
          <span className="text-lg lg:text-xl me-6 lg:me-3 text-desaturated-dark-cyan-primary">
            Photosnap
          </span>
          <span className="text-sm px-2 pt-1 rounded-full bg-desaturated-dark-cyan-primary text-light-grayish-cyan-badge">
            NEW!
          </span>
          <span className="text-sm px-2 pt-1 rounded-full bg-very-dark-grayish-cyan text-light-grayish-cyan-badge">
            FEATURED
          </span>
        </div>
        <div className="text-lg lg:text-2xl font-bold">
          Senior Frontend Developer
        </div>
        <div className="flex gap-2 lg:gap-4 lg:text-xl font-medium text-dark-grayish-cyan">
          <span>1d ago</span>
          <span>&#x2022;</span>
          <span>Full Time</span>
          <span>&#x2022;</span>
          <span>USA only</span>
        </div>
      </div>
      <div className="border-t lg:border-0 lg:ms-auto border-dark-grayish-cyan/75 pt-4 flex flex-wrap gap-4 font-bold text-desaturated-dark-cyan-primary">
        <span className="px-3 py-1.5 rounded bg-desaturated-dark-cyan-primary/10">
          Frontend
        </span>
        <span className="px-3 py-1.5 rounded bg-desaturated-dark-cyan-primary/10">
          Senior
        </span>
        <span className="px-3 py-1.5 rounded bg-desaturated-dark-cyan-primary/10">
          HTML
        </span>
        <span className="px-3 py-1.5 rounded bg-desaturated-dark-cyan-primary/10">
          CSS
        </span>
        <span className="px-3 py-1.5 rounded bg-desaturated-dark-cyan-primary/10">
          Javascript
        </span>
      </div>
    </div>
  );
}

export default JobListing;
