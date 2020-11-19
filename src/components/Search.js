import React from "react";
import "./style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faSearch} />

function Search(props) {
  // Notice how each input has a `value`, `name`, and `onChange` prop
  return (
    <div>
      <div className="input-group mb-3">
        <input
          value={props.search}
          onChange={props.handleInputChange}
          className="form-control"
          type="text"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="basic-addon2" />
        <div className="input-group-append">
          <button
            className="btn btn-outline-secondary"
            type="button"
            onClick={props.handleFormSubmit}>
            {element}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Search;
