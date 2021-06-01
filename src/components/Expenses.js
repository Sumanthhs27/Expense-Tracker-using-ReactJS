import React, { useState } from "react";

import "./styles/Expenses.css";

import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import NoExpenses from "./NoExpenses";
import ExpensesChart from "./ExpensesChart";
import YearlyExpenses from "./YearlyExpenses";
import MonthlyExpenses from "./MonthlyExpenses";

function Expenses(props) {
  const [SelectedYear, setSelectedYear] = useState("2021");
  const [SelectedMonth, setSelectedMonth] = useState("Jan");

  const fromExpenseFilterHandler = (year) => {
    setSelectedYear(year);
  };

  const fromExpenseFilterHandler2 = (month) => {
    setSelectedMonth(month);
  };

  /// Filtering Data according to Selected Year ///
  const filteredData = props.items.filter(
    (yr) => yr.d.getFullYear().toString() === SelectedYear
  );

  /// Filtering Data according to Selected Month ///
  const filteredData2 = filteredData.filter(
    (mo) => mo.d.toLocaleString("default", { month: "short" }) === SelectedMonth
  );

  console.log(filteredData2);

  // const filteredDataMonth = props.items.filter( )

  // Ternary JSX expression and Map fn

  let filtData = <NoExpenses> </NoExpenses>;
  if (filteredData.length > 0) {
    filtData = filteredData.map((expense) => {
      // console.log(expense);
      return (
        <ExpenseItem
          key={expense.key}
          description={expense.des}
          time={expense.d}
          cost={expense.price}
        ></ExpenseItem>
      );
    });
  }

  let filtData2 = <NoExpenses> </NoExpenses>;

  if (filteredData2.length > 0) {
    filtData2 = filteredData2.map((expense2) => {
      //   // console.log(expense);
      return (
        <ExpenseItem
          key={expense2.key}
          description={expense2.des}
          time={expense2.d}
          cost={expense2.price}
        ></ExpenseItem>
      );
    });
  }

  return (
    <div>
      <div className="expenses">
        <div>
          <ExpenseFilter
            selectedYear={SelectedYear}
            selectedMonth={SelectedMonth}
            fromExpenseFilter={fromExpenseFilterHandler}
            fromExpenseFilter2={fromExpenseFilterHandler2}
          ></ExpenseFilter>
        </div>

        <div>
          <ExpensesChart expenses={filteredData}> </ExpensesChart>
        </div>

        {/* Instead of using ExpenseItem component multiple times, here we are
        mapping the data of JS Objects into 'expense' variable in map function, then we set different attributes 
        for ExpenseItem using 'expense' data ///  */}

        <YearlyExpenses> </YearlyExpenses>

        {/* /// Ternary Expression and Map Function /// */}
        {filtData}

        {/* Data for the Month Selected */}
        <MonthlyExpenses> </MonthlyExpenses>
        {filtData2}
      </div>
    </div>
  );
}
export default Expenses;

///
///
///
/* {
          function exp(inpdata) 
          {
          var i = 0;
          len = inpdata.length;
          for (i; i < len; i++) {
            <ExpenseItem
              description={inpdata[i].des}
              time={inpdata[i].d}
              cost={inpdata[i].price}
            ></ExpenseItem>;
          }
          return <ExpenseItem> </ExpenseItem>;
        }
        var inpdata = props.items;
        exp(inpdata);
        } */

// {
//   /* //// Below code will simply render the ExpenseFilter element ///// */
// }
// {
//   /* {<ExpenseFilter> </ExpenseFilter>} */
// }

// {
//   /* Replacing the below repetation using above code by making use of map fn */
// }
// {
//   /* <ExpenseItem
//           description={props.items[0].des}
//           time={props.items[0].d}
//           cost={props.items[0].price}
//         ></ExpenseItem>

//         <ExpenseItem
//           description={props.items[1].des}
//           time={props.items[1].d}
//           cost={props.items[1].price}
//         ></ExpenseItem>

//         <ExpenseItem
//           description={props.items[2].des}
//           time={props.items[2].d}
//           cost={props.items[2].price}
//         ></ExpenseItem> */
// }

/* or use Below ternary expression  */

/* {filteredData.length === 0 ? (
          <NoExpenses> </NoExpenses>
        ) : (
          filteredData.map((expense) => {
            // console.log(expense);
            return (
              <ExpenseItem
                key={expense.key}
                description={expense.des}
                time={expense.d}
                cost={expense.price}
              ></ExpenseItem>
            );
          })
        )} */
