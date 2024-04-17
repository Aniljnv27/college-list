// App.js
import React, { useState } from "react";
import "./App.css";
import { colleges } from "./colleges";

function App() {
  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");

  const handleSort = (key) => {
    if (sortBy === key) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(key);
      setSortOrder("asc");
    }
  };

  const sortedColleges = () => {
    if (sortBy) {
      return colleges.slice().sort((a, b) => {
        if (a[sortBy] < b[sortBy]) return sortOrder === "asc" ? -1 : 1;
        if (a[sortBy] > b[sortBy]) return sortOrder === "asc" ? 1 : -1;
        return 0;
      });
    }
    return colleges;
  };

  return (
    <div className="App">
      <div className="header">Colleges in North India</div>
      <div className="college-list">
        <table>
          <thead>
            <tr>
              <th>S.No.</th>
              <th>College Name</th>
              <th>
                Original Fees{" "}
                <button onClick={() => handleSort("original_fees")}>
                  {sortBy === "original_fees" && sortOrder === "asc"
                    ? "▲"
                    : "▼"}
                </button>
              </th>
              <th>Discounted Fees</th>
              <th>
                Rating{" "}
                <button onClick={() => handleSort("rating")}>
                  {sortBy === "rating" && sortOrder === "asc" ? "▲" : "▼"}
                </button>
              </th>
              <th>
                Ranking{" "}
                <button onClick={() => handleSort("ranking")}>
                  {sortBy === "ranking" && sortOrder === "asc" ? "▲" : "▼"}
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
          
            {sortedColleges().map((college, index) => (
              <tr key={index}>
                <td>{index+1}</td>
               <td >
               <div >
                    <img src="/college.jpg"/>
                  </div>
        <div>{college.college_name}</div>
      </td>
                <td>{college.original_fees}</td>
                <td>{college.discounted_fees}</td>
                <td>{college.rating}</td>
                <td>{college.ranking}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
