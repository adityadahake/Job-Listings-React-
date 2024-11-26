import removeIcon from "../assets/images/icon-remove.svg";

function TagFilterBar() {
  return (
    <div className="px-6 py-3 lg:px-10 rounded shadow-lg flex items-center whitespace-nowrap bg-very-light-cyan shadow-desaturated-dark-cyan-primary/30 font-bold text-desaturated-dark-cyan-primary">
      <div className="flex flex-wrap items-center gap-4">
        <span className="flex items-center">
          <span className="px-3 py-1.5 rounded-s bg-desaturated-dark-cyan-primary/10">
            Frontend
          </span>
          <span className="px-3 py-1.5 rounded-e cursor-pointer bg-desaturated-dark-cyan-primary hover:bg-very-dark-grayish-cyan">
            <img src={removeIcon} alt="remove" className="inline-block w-3" />
          </span>
        </span>
        {/* Extras */}
        <span className="flex items-center">
          <span className="px-3 py-1.5 rounded-s bg-desaturated-dark-cyan-primary/10">
            Frontend
          </span>
          <span className="px-3 py-1.5 rounded-e cursor-pointer bg-desaturated-dark-cyan-primary hover:bg-very-dark-grayish-cyan">
            <img src={removeIcon} alt="remove" className="inline-block w-3" />
          </span>
        </span>
        <span className="flex items-center">
          <span className="px-3 py-1.5 rounded-s bg-desaturated-dark-cyan-primary/10">
            Frontend
          </span>
          <span className="px-3 py-1.5 rounded-e cursor-pointer bg-desaturated-dark-cyan-primary hover:bg-very-dark-grayish-cyan">
            <img src={removeIcon} alt="remove" className="inline-block w-3" />
          </span>
        </span>
        <span className="flex items-center">
          <span className="px-3 py-1.5 rounded-s bg-desaturated-dark-cyan-primary/10">
            Frontend
          </span>
          <span className="px-3 py-1.5 rounded-e cursor-pointer bg-desaturated-dark-cyan-primary hover:bg-very-dark-grayish-cyan">
            <img src={removeIcon} alt="remove" className="inline-block w-3" />
          </span>
        </span>
      </div>
      <div className="ms-auto cursor-pointer hover:underline text-dark-grayish-cyan hover:text-desaturated-dark-cyan-primary">
        Clear
      </div>
    </div>
  );
}

export default TagFilterBar;
