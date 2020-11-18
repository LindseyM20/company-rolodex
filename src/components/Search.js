import React, { Component } from "react";
import "./style.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faSearch } from '@fortawesome/free-solid-svg-icons'

// const element = <FontAwesomeIcon icon={faSearch} />

class Search extends Component {
  // Setting the component's initial state
  state = {
    search: ""
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const value = event.target.value;
    const name = event.target.name;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (!this.state.search) {
      alert("Please enter search criteria");
    }
    else {
      alert(`Displaying results for ${this.state.search}`);
      this.setState({
        search: ""
      });
    }
  };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div>

        <div class="input-group mb-3">
          <input
            value={this.state.search}
            onChange={this.handleInputChange}
            class="form-control"
            type="text"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="basic-addon2" />
          <div class="input-group-append">
            <button 
              class="btn btn-outline-secondary" 
              type="button" 
              onClick={this.handleFormSubmit}>
                Search
            </button>
          </div>
        </div>

        {/* <form className="form">
          <input
            value={this.state.search}
            name="search"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Search"
          />
          <button onClick={this.handleFormSubmit}>Search</button>
        </form> */}
      </div>
    );
  }

}

export default Search;
