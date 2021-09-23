import React, { useState } from "react";
import EmployeesTable from "./components/EmployeesTable";
import ApiSelection from "./components/ApiSelection";

export const ApiContext = React.createContext("");

export default function App() {
  const [apiURL, setApiURL] = useState("");

  return (
    <ApiContext.Provider value={{ apiURL, setApiURL }}>
      <ApiSelection />
      <h1>Nutcache Employees</h1>
      <EmployeesTable />
    </ApiContext.Provider>
  );
}
