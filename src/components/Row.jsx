import React, { useState } from "react";
import ModalForm from "./ModalForm";
import DeleteButton from "./DeleteButton";
import { apiURL } from "../App";
import axios from "axios";

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
        {showModal && <ModalForm visible={showModal} handleVisible={setShowModal} type="edit" id={props.id} update={props.listEmployees} />}
        <DeleteButton id={props.id} text="Delete" action="delete" update={props.listEmployees} name={props.name} />
      </td>
    </tr>
  );
};

export default Row;
