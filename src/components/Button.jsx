import React from "react";
import { apiURL } from "../App";
import axios from "axios";

const Button = (props) => {
  const updateTable = () => {
    props.update();
  };

  const handleAction = () => {
    switch (props.action) {
      case "add":
        console.log("Add employee");
        break;
      case "edit":
        // Edit employee
        axios
          .get(apiURL + "/nutemployee/" + props.id)
          .then((response) => {
            // Show form with employee
            console.log(response.data);
          })
          .catch((error) => {
            console.log(error);
          });

        break;

      case "delete":
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
      {props.text}
    </button>
  );
};

export default Button;
