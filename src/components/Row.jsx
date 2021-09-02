import React, { useState } from "react";
import ModalForm from "./ModalForm";
import DeleteButton from "./DeleteButton";
import { apiURL } from "../App";
import axios from "axios";

const Row = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [employee, setEmployee] = useState({});

  const handleShowModal = () => {
    setShowModal(true);
    // axios
    //   .get(apiURL + "/nutemployee/" + props.id)
    //   .then((response) => {
    //     // Show form with employee
    //     setEmployee(response.data);
    //     // console.log(employee);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
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
        {showModal && <ModalForm visible={showModal} handleVisible={setShowModal} employee={employee} type="edit" id={props.id} />}
        {/* <Button id={props.id} text="Edit" action="edit" update={props.listEmployees} /> */}
        <DeleteButton id={props.id} text="Delete" action="delete" update={props.listEmployees} name={props.name} />
      </td>
    </tr>
  );
};

export default Row;
