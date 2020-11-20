import React, { Component } from "react";
import Jumbotron from "./Jumbotron";
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
        console.log(response.data.results);
        this.setState({ results: response.data.results, resultsFiltered: response.data.results })
      }).catch(err => console.log(err));
  }

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const value = event.target.value;
    const name = event.target.name;

    // Updating the input's 'search' state (grabbed from 'name' attribute of input in Search.js)
    this.setState({
      [name]: value
    });

    const filtered = this.state.results.filter(result => {
      return (
        (result.name.first.includes(this.state.search))
        || (result.name.last.includes(this.state.search))
        || (result.phone.includes(this.state.search))
      )
    });

    this.setState({ 
      resultsFiltered: filtered 
    });
  };

  SortByName = event => {
    event.preventDefault();
    console.log("sorting it out...")
    const sorted = this.state.results.sort((a, b) => a.name.last < b.name.last ? -1 : 1)
   
    this.setState({ 
      ...this.state, 
      resultsFiltered: sorted 
    }) 
  }

  render() {
    return (
      <div className="App">
        <Jumbotron />
        <section>
          <Search
            search={this.state.search}
            handleInputChange={this.handleInputChange}
          />
          <Table
            SortByName={this.SortByName}
            search={this.state.search}
            results={this.state.resultsFiltered}
          />
        </section>
      </div>
    );
  }
}

export default GetSearchCriteria;
