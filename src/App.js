import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import expenses from "./components/Expenses/dummyData";

const App = () => {
  return (
    <div>
      <NewExpense />
      <Expenses items={expenses} />;
    </div>
  );
};

export default App;
