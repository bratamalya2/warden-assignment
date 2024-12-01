import Nav from "./components/nav";
import Tabs from "./components/tabs";
import Filters from "./components/filters";
import DataTable from "./components/dataTable";

import "./App.css";

function App() {
  return (
    <div className="App w-full px-[5%] py-[20px]">
      <Nav />
      <Tabs />
      <Filters />
      <DataTable />
      <div className="mt-[15px] font-medium text-xl">
        4/4 records
      </div>
    </div>
  );
}

export default App;
