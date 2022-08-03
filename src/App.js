import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import expenses from "./components/Expenses/dummyData";
import { useState } from "react";

const App = () => {
  const [allExpense, setExpenseHandler] = useState(expenses);

  const addExpenseHandler = (expense) => {
    setExpenseHandler((prev) => {
      // console.log("check");
      // console.log(prev);
      return [expense, ...prev];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={allExpense} />;
    </div>
  );
};

export default App;
