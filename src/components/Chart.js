import "./styles/Chart.css";
import ChartBar from "./ChartBar";

function Chart(props) {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => {
        return (
          <ChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            max={totalMaximum}
            label={dataPoint.label}
          ></ChartBar>
        );
      })}
    </div>
  );
}

export default Chart;
