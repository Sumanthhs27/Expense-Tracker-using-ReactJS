import "./styles/ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
  // const [desc, setDesc] = useState(props.description);

  // const clickHandler = () => {
  //   setDesc("Updated!"); //special function in wich the new value of the state variable is passed on as an attribute to the function///

  //   // /This fn will not just change the value of state variable but also tells React to re-run the component fn in which it is defined///

  //   console.log("Clicked!!");
  // desc = "Mobile Rechargese" //////////here desc got updated to new value but the variable value is lost as soon as the fn is executed, react does not store it//////
  // };

  //////So we use a special variable called state variable defined using useState , which doent loose the new updated variable value//////
  return (
    <div className="expense-item">
      <ExpenseDate d={props.time}> </ExpenseDate>

      <div className="expense-item__description">
        <h2> {props.description} </h2>
      </div>
      <div className="expense-item__price"> {props.cost} </div>

      {/* <button onClick={clickHandler}> Button </button> */}
    </div>
  );
}

export default ExpenseItem;
