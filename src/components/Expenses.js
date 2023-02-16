import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const Expenses = (props) => {
  const { expenses } = props;
  return expenses.map((item) => {
    return (
      <div className="expenses">
        <ExpenseItem
          key={item.id}
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
      </div>
    );
  });
};
export default Expenses;
