import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
// import expenses from "./components/Expenses/dummyData";
import { useEffect, useState } from "react";

const App = () => {
  const [allExpense, setExpenseHandler] = useState([]);


  useEffect(() => {
     const fetchExpenses = async () => {
       const response = await fetch(
         `${process.env.REACT_APP_FIREBASE_DATABASE_API}/expenses.json`
       );
       if (!response.ok) {
         throw new Error("Something went wrong!");
       }
       const responseData = await response.json();
       let data = [];
       for (const property in responseData) {
             data.push(responseData[property]);
       }
      // console.log(data);
       setExpenseHandler(data); 
     };
     //console.log("Hi")
     fetchExpenses()
       .then()
       .catch((error) => {
         console.log(error)
        throw new Error("Unable to fetch expenses");
       });
   },[])


  const addExpenseHandler = async (expense) => {

     await fetch(
       `${process.env.REACT_APP_FIREBASE_DATABASE_API}/expenses.json`,
       {
         method: "POST",
         body: JSON.stringify(expense),
       }
     );
    setExpenseHandler((prev) => {
      // console.log("check");
      // console.log(prev);
      return [expense, ...prev];
    });
  };
  //console.log(allExpense)
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={allExpense} />;
    </div>
  );
};

export default App;
