import React, { Component } from "react";
import Jumbotron from "./Jumbotron"
import Search from "./Search";
import Table from "./Table";
import API from "../utils/API";
import "./style.css";

class GetSearchCriteria extends Component {
  state = {
    search: "",
    results: [],
    resultsFiltered: []
  };

  // Api call:    axios.get("https://randomuser.me/api/?results=200&nat=us");
  componentDidMount() {
    API.search()
      .then(response => {
        console.log(response);
        console.log(response.data.results);
        this.setState({results: response.data.results})

      }).catch(err => console.log(err));
  }

  
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

    const filtered = this.state.allResults.filter(result => {
      return ((result.name.first.includes(this.state.search)) 
      || (result.phone.includes(this.state.search))
      || (result.name.last.includes(this.state.search))
      )
    });
    this.setState({filteredResults: filtered});

  }

  //Add code here for Sorting by name
  SortByName = event =>
    event.preventDefault();

  render() {
    return (
      <div className="App">
        <Jumbotron />
        <section>
          <Search 
            search={this.state.search}
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
          />
          <Table
            results={this.state.results}
          />
        </section>
      </div>
    );
  }

}

export default GetSearchCriteria;
