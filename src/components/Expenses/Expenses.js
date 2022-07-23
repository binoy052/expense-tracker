import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";

const Expensses = (props) => {
  return (
    <Card className="expenses">
      <ExpenseItem
        id={props.expense[0].id}
        title={props.expense[0].title}
        price={props.expense[0].price}
        date={props.expense[0].date}
      />
      <ExpenseItem
        id={props.expense[1].id}
        title={props.expense[1].title}
        price={props.expense[1].price}
        date={props.expense[1].date}
      />
      <ExpenseItem
        id={props.expense[2].id}
        title={props.expense[2].title}
        price={props.expense[2].price}
        date={props.expense[2].date}
      />
      <ExpenseItem
        id={props.expense[3].id}
        title={props.expense[3].title}
        price={props.expense[3].price}
        date={props.expense[3].date}
      />
    </Card>
  );
};

export default Expensses;
