import React, { useState } from "react";
import ModalForm from "./ModalForm";
import ModalView from "./ModalView";
import DeleteButton from "./DeleteButton";

const Row = (props) => {
  const [showModalForm, setShowModalForm] = useState(false);
  const [showModalView, setShowModalView] = useState(false);

  const handleShowModalForm = () => {
    setShowModalForm(true);
  };

  const handleShowModalView = () => {
    setShowModalView(true);
  };

  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.email}</td>
      <td>{props.startDate}</td>
      <td>{props.team}</td>
      <td>
        <button className="actionButton" onClick={() => handleShowModalView()}>
          View
        </button>
        {showModalView && <ModalView visible={showModalView} handleVisible={setShowModalView} id={props.id} action="view" />}
        <button className="actionButton" onClick={() => handleShowModalForm()}>
          Edit
        </button>
        {showModalForm && <ModalForm visible={showModalForm} handleVisible={setShowModalForm} id={props.id} action="edit" update={props.listEmployees} />}
        <DeleteButton id={props.id} name={props.name} action="delete" update={props.listEmployees} />
      </td>
    </tr>
  );
};

export default Row;
