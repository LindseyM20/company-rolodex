import React from "react";
import "./style.css";
const Search = props => {
  return (
    <div>
      <div className="input-group mb-3">
        <input
          value={props.search}
          onChange={props.handleInputChange}
          className="form-control"
          // the next line corresponds to const name in handleInputChange (in GetSearchCriteria.js), which corresponds to they key 'search' in state object.
          name="search"
          type="text"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="basic-addon2" />
      </div>
    </div>
  );
}

export default Search;
