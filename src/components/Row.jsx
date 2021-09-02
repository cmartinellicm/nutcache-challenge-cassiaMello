import React, { useState } from "react";
import ModalForm from "./ModalForm";
import DeleteButton from "./DeleteButton";

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
        <button onClick={() => handleShowModal()}>View</button>
        {showModal && <ModalForm visible={showModal} handleVisible={setShowModal} id={props.id} action="view" />}

        <button onClick={() => handleShowModal()}>Edit</button>
        {showModal && <ModalForm visible={showModal} handleVisible={setShowModal} id={props.id} action="edit" update={props.listEmployees} />}

        <DeleteButton id={props.id} name={props.name} action="delete" update={props.listEmployees} />
      </td>
    </tr>
  );
};

export default Row;
