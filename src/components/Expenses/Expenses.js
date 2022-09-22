import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2022");

  const filterItems = (year) => {
    setFilteredYear(year);
  };

  //console.log("hi")
 // console.log(props.items)
  // let itmes;

  const filteredExpenses = props.items.filter((expense) => {
    return new Date(expense.date).getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onFilter={filterItems} />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
