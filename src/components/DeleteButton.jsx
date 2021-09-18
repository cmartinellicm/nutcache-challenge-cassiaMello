import React from "react";
import { apiURL } from "../App";
import axios from "axios";

const DeleteButton = ({ employee, updateTable }) => {
  const handleAction = () => {
    if (window.confirm("Are you sure you want to delete employee " + employee.name + "?")) {
      axios
        .delete(apiURL + "/nutemployee/" + employee._id)
        .then(() => {
          alert("Employee deleted");
          updateTable();
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <button type="button" className="actionButton" onClick={handleAction}>
      Delete
    </button>
  );
};

export default DeleteButton;
