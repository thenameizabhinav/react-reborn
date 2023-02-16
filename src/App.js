import "./App.css";
import Expenses from "./components/Expenses";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Cricket kit",
      amount: "100",
      date: new Date(2023, 1, 10),
    },
    {
      id: "e2",
      title: "Fridge",
      amount: "100.233",
      date: new Date(2023, 10, 1),
    },
    {
      id: "e3",
      title: "Bike",
      amount: "2000",
      date: new Date(2022, 12, 10),
    },
    {
      id: "e4",
      title: "room rent",
      amount: "200",
      date: new Date(2023, 1, 1),
    },
  ];
  return (
    <>
      <Expenses expenses={expenses} />
    </>
  );
}

export default App;
