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
        <Button id={props.id} text="Edit" action="edit" update={props.listEmployees} />
        <Button id={props.id} text="Delete" action="delete" update={props.listEmployees} name={props.name} />
      </td>
    </tr>
  );
};

export default Row;
