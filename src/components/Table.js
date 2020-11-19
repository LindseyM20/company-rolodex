import React from "react";

function Table(props) {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Image</th>
          <th scope="col" onClick={props.SortByName}>Name</th>
          <th scope="col">Phone</th>
          <th scope="col">Email</th>
          <th scope="col">DOB</th>
        </tr>
      </thead>
      <tbody>
        {props.results.map((result, index) => {
          return (
            <tr key={index}>
              <td><img alt="Employee" src={result.picture.thumbnail} /></td>
              <td>{result.name.first} {result.name.last}</td>
              <td>{result.phone}</td>
              <td>{result.email}</td>
              <td>{result.dob.date.substring(0,10)}</td>
            </tr>)})}
      </tbody>
    </table>
  );
}

export default Table;
