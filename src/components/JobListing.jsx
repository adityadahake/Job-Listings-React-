function JobListing({
  listing = {
    id: 0,
    company: "Company Name",
    logo: "./images/logo.svg",
    new: true,
    featured: true,
    position: "Position Name",
    role: "Role",
    level: "Level",
    postedAt: "0d ago",
    contract: "Part/Full Time",
    location: "Location",
    languages: ["Language0", "Language1"],
    tools: ["Tool0", "Tool1"],
  },
  activeTags = [],
  setActiveTags = () => {},
}) {
  const handleTagClick = (tag) => {
    for (let index = 0; index < activeTags.length; index++) {
      if (tag == activeTags[index]) return;
    }
    setActiveTags([...activeTags, tag]);
  };

  return (
    <div className="border-l-4 px-6 py-9 lg:px-10 relative rounded shadow-lg flex flex-col lg:flex-row lg:items-center gap-3 lg:gap-6 whitespace-nowrap bg-very-light-cyan border-desaturated-dark-cyan-primary shadow-desaturated-dark-cyan-primary/30">
      {/* Logo */}
      <div className="w-16 h-16 lg:w-fit lg:h-fit absolute lg:static -top-8">
        <img src={listing.logo} alt={listing.company} />
      </div>
      <div className="grid gap-1 mt-1.5 lg:mt-0">
        <div className="flex gap-2 items-center font-bold">
          {/* Company Name */}
          <span className="text-lg lg:text-xl me-6 lg:me-3 text-desaturated-dark-cyan-primary">
            {listing.company}
          </span>
          {/* is New ? */}
          {listing.new && (
            <span className="text-sm px-2 pt-1 rounded-full bg-desaturated-dark-cyan-primary text-light-grayish-cyan-badge">
              NEW!
            </span>
          )}
          {/* is Featured ? */}
          {listing.featured && (
            <span className="text-sm px-2 pt-1 rounded-full bg-very-dark-grayish-cyan text-light-grayish-cyan-badge">
              FEATURED
            </span>
          )}
        </div>
        {/* Job Title */}
        <div className="text-lg lg:text-2xl font-bold">
          <span className="cursor-pointer hover:text-desaturated-dark-cyan-primary">
            {listing.position}
          </span>
        </div>
        {/* Listing Date, contract, location */}
        <div className="flex gap-2 lg:gap-4 lg:text-xl font-medium text-dark-grayish-cyan">
          <span>{listing.postedAt}</span>
          <span>&#x2022;</span>
          <span>{listing.contract}</span>
          <span>&#x2022;</span>
          <span>{listing.location}</span>
        </div>
      </div>
      {/* Tags */}
      <div className="border-t lg:border-0 lg:ms-auto border-dark-grayish-cyan/75 pt-4 flex flex-wrap gap-4 font-bold text-desaturated-dark-cyan-primary">
        <span
          onClick={() => handleTagClick(listing.role)}
          className="px-3 py-1.5 rounded cursor-pointer bg-desaturated-dark-cyan-primary/10 hover:bg-desaturated-dark-cyan-primary hover:text-light-grayish-cyan-badge"
        >
          {listing.role}
        </span>
        <span
          onClick={() => handleTagClick(listing.level)}
          className="px-3 py-1.5 rounded cursor-pointer bg-desaturated-dark-cyan-primary/10 hover:bg-desaturated-dark-cyan-primary hover:text-light-grayish-cyan-badge"
        >
          {listing.level}
        </span>
        {listing.languages.map((language, idx) => (
          <span
            key={idx}
            onClick={() => handleTagClick(language)}
            className="px-3 py-1.5 rounded cursor-pointer bg-desaturated-dark-cyan-primary/10 hover:bg-desaturated-dark-cyan-primary hover:text-light-grayish-cyan-badge"
          >
            {language}
          </span>
        ))}
        {listing.tools.map((tool, idx) => (
          <span
            key={idx}
            onClick={() => handleTagClick(tool)}
            className="px-3 py-1.5 rounded cursor-pointer bg-desaturated-dark-cyan-primary/10 hover:bg-desaturated-dark-cyan-primary hover:text-light-grayish-cyan-badge"
          >
            {tool}
          </span>
        ))}
      </div>
    </div>
  );
}

export default JobListing;
