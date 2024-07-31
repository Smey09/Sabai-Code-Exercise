import React from "react";
import "./App.css";
import DataFetchingComponent from "./components/Day07-Effect-and-ref/FetchData";
// import NoEffictDataFetchingComponent from "./components/Day07-Effect-and-ref/NoEffect";

const App: React.FC = () => {
  return (
    <>
      <div className="flex justify-start items-start text-start">
        <DataFetchingComponent />
        {/* <NoEffictDataFetchingComponent /> */}
      </div>
    </>
  );
};

export default App;
