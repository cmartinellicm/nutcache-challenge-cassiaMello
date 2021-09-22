import React, { createContext } from "react";
import EmployeesTable from "./components/EmployeesTable";

// export const apiURL = "https://crudcrud.com/api/d06ae6a21a5640b99a09e1f8935bc6db";
export const ApiContext = createContext();

export default function App() {
  const apiURL = "https://crudcrud.com/api/d06ae6a21a5640b99a09e1f8935bc6db";
  return (
    <ApiContext.Provider value={apiURL}>
      <h1>Nutcache Employees</h1>
      <EmployeesTable />
    </ApiContext.Provider>
  );
}
