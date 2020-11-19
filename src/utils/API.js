import axios from "axios";

// Exports an object with a "search" method that searches the employee API for the passed query
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  search: function() {
    return axios.get("https://randomuser.me/api/?results=200&nat=us");
  }
};
