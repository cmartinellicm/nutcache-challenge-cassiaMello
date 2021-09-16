import React from "react";
import EmployeesTable from "./components/EmployeesTable";

export const apiURL = "https://crudcrud.com/api/6e48435e6eda4f98b11e629877f03cdf";

export default function App() {
  return (
    <>
      <h1>Nutcache Employees</h1>
      <EmployeesTable />
    </>
  );
}
