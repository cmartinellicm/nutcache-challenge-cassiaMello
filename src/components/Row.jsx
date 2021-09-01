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
        <Button id={props.id} action="Edit" />
        <Button id={props.id} name={props.name} action="Delete" />
        {props.id}
      </td>
    </tr>
  );
};

export default Row;
