import React, { useState } from "react";
import EmployeesTable from "./components/EmployeesTable";
import ApiSelection from "./components/ApiSelection";

export const ApiContext = React.createContext("");

export default function App() {
  // const [chosenEndpoint, setChosenEndpoint] = useState();
  const [apiURL, setApiURL] = useState("");

  // const handleChange = (e) => {
  //   console.log(e.target.value);
  //   setApiURL(e.target.value);
  // };

  // const handleClick = () => {
  //   setApiURL(chosenEndpoint);
  // };

  return (
    <ApiContext.Provider value={{ apiURL, setApiURL }}>
      <ApiSelection />
      <h1>Nutcache Employees</h1>
      <EmployeesTable />
    </ApiContext.Provider>
  );
}
