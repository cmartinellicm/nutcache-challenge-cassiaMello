import React, { useState } from "react";
import AddEditModal from "./AddEditModal";
import EmployeeModal from "./EmployeeModal";
import DeleteButton from "./DeleteButton";

export default function EmployeeRow({ employee, updateTable }) {
  const [showAddEditModal, setShowAddEditModal] = useState(false);
  const [showEmployeeModal, setShowEmployeeModal] = useState(false);

  const handleShowAddEditModal = () => {
    setShowAddEditModal(true);
  };

  const handleShowEmployeeModal = () => {
    setShowEmployeeModal(true);
  };

  return (
    <tr>
      <td>{employee.name}</td>
      <td>{employee.email}</td>
      <td>{employee.startDate}</td>
      <td>{employee.team}</td>
      <td>
        <button type="button" className="actionButton" onClick={() => handleShowEmployeeModal()}>
          View
        </button>
        {showEmployeeModal && <EmployeeModal visible={showEmployeeModal} handleVisible={setShowEmployeeModal} employee={employee} />}

        <button type="button" className="actionButton" onClick={() => handleShowAddEditModal()}>
          Edit
        </button>
        {showAddEditModal && <AddEditModal visible={showAddEditModal} handleVisible={setShowAddEditModal} employeeId={employee._id} action="edit" updateTable={updateTable} />}

        <DeleteButton employee={employee} updateTable={updateTable} />
      </td>
    </tr>
  );
}
