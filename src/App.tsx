import "./App.css";
import "react-base-table/styles.css";
import TableComponent from "./components/TableComponent";
import GraphComponent from "./components/GraphComponent";

function App() {
  return (
    <div className="App">
      <h1>Table with Checkboxes and ApexCharts</h1>

      <TableComponent />
      <GraphComponent />
    </div>
  );
}

export default App;
