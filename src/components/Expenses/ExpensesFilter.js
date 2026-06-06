import React from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const filterHandler = (event) => {
    props.onFilter(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={filterHandler}>
          {Array.from({ length: 2050 - 2019 + 1 }, (_, i) => 2050 - i).map((year) => (
            <option key={year} value={year.toString()}>
              {year}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
