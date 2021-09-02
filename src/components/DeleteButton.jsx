import React from "react";
import { apiURL } from "../App";
import axios from "axios";

const DeleteButton = (props) => {
  const updateTable = () => {
    props.update();
  };

  const handleAction = () => {
    if (window.confirm("Are you sure you want to delete employee " + props.name + "?")) {
      axios
        .delete(apiURL + "/nutemployee/" + props.id)
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
    <button type="submit" onClick={handleAction}>
      Delete
    </button>
  );
};

export default DeleteButton;
