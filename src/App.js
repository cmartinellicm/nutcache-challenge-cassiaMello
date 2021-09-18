import React from "react";
import EmployeesTable from "./components/EmployeesTable";

export const apiURL = "https://crudcrud.com/api/06c87a4f29504a8f98103a72ba31ede3";

export default function App() {
  return (
    <>
      <h1>Nutcache Employees</h1>
      <EmployeesTable />
    </>
  );
}
