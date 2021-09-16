import React, { useState } from "react";
import AddEditModal from "./AddEditModal";
import EmployeeModal from "./EmployeeModal";
import DeleteButton from "./DeleteButton";

export default function EmployeeRow(props) {
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
      <td>{props.name}</td>
      <td>{props.email}</td>
      <td>{props.startDate}</td>
      <td>{props.team}</td>
      <td>
        <button type="button" className="actionButton" onClick={() => handleShowEmployeeModal()}>
          View
        </button>
        {showEmployeeModal && <EmployeeModal visible={showEmployeeModal} handleVisible={setShowEmployeeModal} id={props.id} action="view" />}

        <button type="button" className="actionButton" onClick={() => handleShowAddEditModal()}>
          Edit
        </button>
        {showAddEditModal && <AddEditModal visible={showAddEditModal} handleVisible={setShowAddEditModal} id={props.id} action="edit" update={props.listEmployees} />}

        <DeleteButton id={props.id} name={props.name} action="delete" update={props.listEmployees} />
      </td>
    </tr>
  );
}
