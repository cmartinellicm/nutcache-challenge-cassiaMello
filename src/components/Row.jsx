import React, { useState } from "react";
import Modal from "./Modal";
import Button from "./Button";

const Row = (props) => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.email}</td>
      <td>{props.startDate}</td>
      <td>{props.team}</td>
      <td>
        <button id="myBtn" onClick={() => handleShowModal()}>
          Edit
        </button>
        {showModal && <Modal visible={showModal} handleVisible={setShowModal} />}
        {/* <Button id={props.id} text="Edit" action="edit" update={props.listEmployees} /> */}
        <Button id={props.id} text="Delete" action="delete" update={props.listEmployees} name={props.name} />
      </td>
    </tr>
  );
};

export default Row;
