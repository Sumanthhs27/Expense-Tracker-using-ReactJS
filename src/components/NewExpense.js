import React, { useState } from "react";
import "./styles/NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  //////     1st Step of fetching data from child to parent     ////////
  //////     Create a call back function (userExpenseData) which will eventually fetch data from child      /////

  const userExpenseData = (rawData) => {
    const data = { ...rawData, key: Math.random().toString() };
    console.log(data);
    props.fromNewExpense(data);
    setState(0);
    // console.log(data);
    // Data from ExpenseForm has arrived //
  };

  const [state, setState] = useState(0);

  const clickHandler = () => {
    setState(1);
  };

  const updateHandler = () => {
    setState(0);
  };

  return (
    <div className="new-expense">
      {/*/////   use it to set an attribute/prop for the child element i.e fromExpenseForm ={userExpenseData}  ////////*/}

      <div>
        {state === 0 ? (
          <button onClick={clickHandler}> Add New Expense </button>
        ) : (
          <ExpenseForm
            fromExpenseForm={userExpenseData}
            onCancel={updateHandler}
          ></ExpenseForm>
        )}
      </div>
    </div>
  );
};

export default NewExpense;
