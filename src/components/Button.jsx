import React from "react";
import Form from "./Form";
import { apiURL } from "../App";
import axios from "axios";

const Button = (props) => {
  const updateTable = () => {
    props.update();
  };

  const handleAction = () => {
    switch (props.action) {
      case "Edit":
        // Edit employee
        axios
          .get(apiURL + "/nutemployee/" + props.id)
          .then((response) => {
            <Form />;
            console.log(response.data);
          })
          .catch((error) => {
            console.log(error);
          });

        break;

      case "Delete":
        if (window.confirm("Are you sure you want to delete employee " + props.name + "?")) {
          // Delete employee
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
        break;
      default:
        console.log("Invalid option");
    }
  };

  return (
    <button type="submit" onClick={handleAction}>
      {props.action}
    </button>
  );
};

export default Button;
