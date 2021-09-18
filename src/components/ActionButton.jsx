import React, { useState } from "react";
import axios from "axios";
import { apiURL } from "../App";
import AddEditModal from "./AddEditModal";
import EmployeeModal from "./EmployeeModal";

const ActionButton = ({ action, employee, updateTable }) => {
  const [showAddEditModal, setShowAddEditModal] = useState(false);
  const [showEmployeeModal, setShowEmployeeModal] = useState(false);

  const handleAction = () => {
    switch (action) {
      case "View":
        setShowEmployeeModal(true);
        break;
      case "Edit":
        setShowAddEditModal(true);
        break;
      case "Delete":
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
        break;
      default:
        break;
    }
  };

  return (
    <>
      <button type="button" className="actionButton" onClick={handleAction}>
        {action}
      </button>
      {showEmployeeModal && <EmployeeModal visible={showEmployeeModal} handleVisible={setShowEmployeeModal} employee={employee} />}
      {showAddEditModal && <AddEditModal visible={showAddEditModal} handleVisible={setShowAddEditModal} employeeId={employee._id} action="edit" updateTable={updateTable} />}
    </>
  );
};

export default ActionButton;
