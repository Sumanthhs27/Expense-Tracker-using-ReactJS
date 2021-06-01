import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense";
import React, { useState } from "react";

/// Pre defined data for New Expense  ////
const expensedata = [
  {
    key: "1",
    des: "Car Insurance",
    price: 1550,
    d: new Date(2021, 5, 12),
  },
  {
    key: "2",
    des: "Car Loan",
    price: 1000,
    d: new Date(2020, 8, 22),
  },
  {
    key: "3",
    des: "E-Bill",
    price: 2000,
    d: new Date(2021, 4, 24),
  },
];

function App() {
  const [arvData, setarvData] = useState(expensedata);
  // console.log(arvData);
  // console.log(expensedata);

  const fromNewExpenseHandler = (newData) => {
    // console.log(newData);

    /// Concatenating Old Data with New Data ///
    // setArvData is depending on the previous data so to get the updated data we have to use the function update method as below

    setarvData((preExpense) => {
      return [newData, ...preExpense];
    });
  };

  return (
    <div>
      <div>
        <NewExpense fromNewExpense={fromNewExpenseHandler}> </NewExpense>
      </div>
      <Expenses items={arvData}> </Expenses>
    </div>
  );
}

export default App;

// setarvData([newData, ...expensedata]);
