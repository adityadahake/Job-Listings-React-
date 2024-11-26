import photosnapLogo from "../assets/images/photosnap.svg";

function JobListing() {
  return (
    <div className="border-l-2 shadow">
      <img src={photosnapLogo} alt="photosnap" className="w-16" />
      <div>
        <div>
          <span>Photosnap</span>
          <span>NEW!</span>
          <span>FEATURED</span>
        </div>
        <div>Senior Frontend Developer</div>
        <div>
          <span>1d ago</span> (dot)
          <span>Full Time</span> (dot)
          <span>USA only</span>
        </div>
      </div>
      <div>
        <span>Frontend</span>
        <span>Senior</span>
        <span>HTML</span>
        <span>CSS</span>
        <span>Javascript</span>
      </div>
    </div>
  );
}

export default JobListing;
