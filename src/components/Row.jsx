import React from "react";
import Button from "./Button";

const Row = (props) => {
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.email}</td>
      <td>{props.startDate}</td>
      <td>{props.team}</td>
      <td>
        <Button id={props.id} action="Edit" update={props.listEmployees} />
        <Button id={props.id} name={props.name} action="Delete" update={props.listEmployees} />
      </td>
    </tr>
  );
};

export default Row;
