import React from "react";
import EmployeesTable from "./components/EmployeesTable";

export const apiURL = "https://crudcrud.com/api/1a075c70353d4622b9ac976452f486a4";

export default function App() {
  return (
    <>
      <h1>Nutcache Employees</h1>
      <EmployeesTable />
    </>
  );
}
