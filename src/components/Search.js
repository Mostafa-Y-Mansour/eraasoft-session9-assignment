import React from "react";

export default function Search(props) {
  function Search() {
    console.log("me");
  }
  return (
    <div>
      <form onSubmit={() => Search()} className="d-flex mt-2" role="search">
        <input
          className="form-control me-2 "
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}
