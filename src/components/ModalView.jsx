import React, { useState, useEffect } from "react";
import { apiURL } from "../App";
import axios from "axios";

const ModalView = (props) => {
  const [employee, setEmployee] = useState({
    name: "",
    birthDate: "",
    gender: "",
    email: "",
    cpf: "",
    startDate: "",
    team: "",
  });

  const modalClass = props.visible ? "modal show-modal" : "modal hide-modal";

  useEffect(() => {
    axios
      .get(apiURL + "/nutemployee/" + props.id)
      .then((res) => {
        setEmployee(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [props]);

  const handleClose = () => {
    props.handleVisible(false);
  };

  return (
    <>
      <div id="myModal" className={modalClass}>
        <div className="modal-content">
          <span className="close" onClick={() => handleClose()}>
            &times;
          </span>

          <h1>Employee Information</h1>

          <table>
            <tbody>
              <tr>
                <td className="modalViewLabel">Name</td>
                <td>{employee.name}</td>
              </tr>
              <tr>
                <td className="modalViewLabel">Birth Date</td>
                <td>{employee.birthDate}</td>
              </tr>
              <tr>
                <td className="modalViewLabel">Gender</td>
                <td>{employee.gender}</td>
              </tr>
              <tr>
                <td className="modalViewLabel">Email</td>
                <td>{employee.email}</td>
              </tr>
              <tr>
                <td className="modalViewLabel">CPF</td>
                <td>{employee.cpf}</td>
              </tr>
              <tr>
                <td className="modalViewLabel">Start Date</td>
                <td>{employee.startDate}</td>
              </tr>
              <tr>
                <td className="modalViewLabel">Team</td>
                <td>{employee.team}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ModalView;