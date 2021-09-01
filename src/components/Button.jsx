import React from "react";
import { apiURL } from "../App";
import axios from "axios";

const Button = (props) => {
  const handleAction = (e) => {
    switch (props.action) {
      case "Edit":
        // Edit employee
        console.log("Edit selected");
        break;
      case "Delete":
        if (window.confirm("Are you sure you want to delete employee " + props.name + "?")) {
          // Delete employee
          axios
            .delete(apiURL + "/nutemployee/" + props.id)
            .then(() => {
              alert("Employee deleted");
            })
            .catch((error) => {
              console.log(error);
            });
        }
        break;
      default:
        console.log("Invalid option");
    }
    // if (props.action === "Edit") {
    //   // Handle edit
    //   console.log("edit " + props.id);
    // } else if (props.action === "Delete") {
    //   // Delete employee
    //   axios
    //     .get(apiURL + "/nutemployee/" + props.id)
    //     .then(function (response) {
    //       alert("Are you sure you want to delete employee " + props.name + "?");
    //     })
    //     .catch(function (error) {
    //       console.log(error);
    //     });
    // }
  };

  return (
    <button type="submit" onClick={handleAction}>
      {props.action}
    </button>
  );
};

export default Button;
