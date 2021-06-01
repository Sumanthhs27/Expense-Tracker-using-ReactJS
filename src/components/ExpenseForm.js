import "./styles/ExpenseForm.css";
import React, { useState } from "react";

const ExpenseForm = (props) => {
  // using 3 state variables to store entered data //
  const [EnteredDes, setEnteredDes] = useState(" ");
  const [EnteredAmount, setEnteredAmount] = useState(" ");
  const [EnteredDate, setEnteredDate] = useState(" ");

  // Defining 3  state fn which updates event.target.value at State Varibles //

  const DesHandler = (event) => {
    setEnteredDes(event.target.value);
    // console.log(EnteredDes);
  };

  const DateHandler = (event) => {
    setEnteredDate(event.target.value);
    // console.log(EnteredDate);
  };

  const AmountHandler = (event) => {
    setEnteredAmount(event.target.value);
    // console.log(EnteredAmount);
  };

  const SubmitHandler = (event) => {
    event.preventDefault();

    // if (EnteredDes === " " || EnteredAmount === " " || EnteredDate === " ") {
    //   alert("One or Multiple Fields are empty");
    // }

    /// Saving User Input into NewData  ///
    const NewData = {
      des: EnteredDes,
      price: +EnteredAmount,
      d: new Date(EnteredDate),
    };

    ///   call the callback fn using the props associated with child component   ///
    {
      NewData.des === " " || NewData.price === 0
        ? alert(" One or Multiple Fields Empty ")
        : props.fromExpenseForm(NewData);
    }

    // props.onCancel();
    /// 2 way Binding ///
    setEnteredDate(" ");
    setEnteredAmount(" ");
    setEnteredDes(" ");
  };

  const clickHandler = () => {
    props.onCancel();
  };
  return (
    <form onSubmit={SubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label> Description </label>
          <input type="text" onChange={DesHandler} value={EnteredDes} />
        </div>
        <div className="new-expense__control">
          <label> Amount </label>
          <input type="number" onChange={AmountHandler} value={EnteredAmount} />
        </div>

        <div className="new-expense__control">
          <label> Date </label>
          <input type="date" onChange={DateHandler} value={EnteredDate} />
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="button" onClick={clickHandler}>
          Cancel
        </button>
        <button type="submit">Add</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
