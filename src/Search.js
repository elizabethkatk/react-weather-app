import React from "react";

export default function Search() {
  return (
    <div className="Search">
      <div className="row">
        <div className="col-8">
          <form>
            <input
              type="search"
              className="location"
              placeholder="Type a location"
            />
            <input
              type="submit"
              value="Search"
              className="search-button ms-1"
            />
          </form>
        </div>
        <div className="col-4">
          <button type="button" className="btn btn-warning btn-sm current">
            Current Location
          </button>
        </div>
      </div>
    </div>
  );
}
