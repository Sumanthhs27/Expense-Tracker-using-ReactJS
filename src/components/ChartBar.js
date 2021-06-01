import "./styles/ChartBar.css";

function ChartBar(props) {
  let barHeight = "0%";

  if (props.max > 0) {
    barHeight = Math.round((props.value / props.max) * 100) + "%";
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{ height: barHeight }}></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>

      {/* {props.value === 0 ? (
        <div className="chart-bar__label"> 0 </div>
      ) : (
        <div className="chart-bar__label">{props.value}</div>
      )} */}
    </div>
  );
}

export default ChartBar;
