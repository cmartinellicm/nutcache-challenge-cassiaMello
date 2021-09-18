import React from "react";
import ActionButton from "./ActionButton";

export default function EmployeeRow({ employee, updateTable }) {
  return (
    <tr>
      <td>{employee.name}</td>
      <td>{employee.email}</td>
      <td>{employee.startDate}</td>
      <td>{employee.team}</td>
      <td>
        <ActionButton action="View" employee={employee} />
        <ActionButton action="Edit" employee={employee} updateTable={updateTable} />
        <ActionButton action="Delete" employee={employee} updateTable={updateTable} />
      </td>
    </tr>
  );
}
