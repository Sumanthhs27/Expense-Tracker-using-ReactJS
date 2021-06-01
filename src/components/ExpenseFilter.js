import "./styles/ExpenseFilter.css";

function ExpenseFilter(props) {
  function YearSelectHandler(event) {
    props.fromExpenseFilter(event.target.value);
  }

  const MonthSelectHandler = (event) => {
    props.fromExpenseFilter2(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label> Filter by Year: </label>
        <select value={props.selectedYear} onChange={YearSelectHandler}>
          <option value="2018">2018</option>
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
        </select>
      </div>

      <div className="expenses-filter__control">
        <label> Filter by Month: </label>
        <select value={props.selectedMonth} onChange={MonthSelectHandler}>
          <option value="Jan">Jan</option>
          <option value="Feb">Feb</option>
          <option value="Mar">Mar</option>
          <option value="Apr">Apr</option>
          <option value="May">May</option>
          <option value="Jun">Jun</option>
          <option value="Jul">Jul</option>
          <option value="Aug">Aug</option>
          <option value="Sep">Sep</option>
          <option value="Oct">Oct</option>
          <option value="Nov">Nov</option>
          <option value="Dec">Dec</option>
        </select>
      </div>
    </div>
  );
}

export default ExpenseFilter;
