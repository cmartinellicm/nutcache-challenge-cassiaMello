import React, { useState, useEffect } from "react";
import axios from "axios";
import InputMask from "react-input-mask";
import { apiURL } from "../App";

export default function AddEditModal(props) {
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
    switch (props.action) {
      case "add":
        setEmployee({ name: "", birthDate: "", gender: "", email: "", cpf: "", startDate: "", team: "" });
        break;
      case "edit":
        axios
          .get(apiURL + "/nutemployee/" + props.id)
          .then((response) => {
            setEmployee(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
        break;
      default:
        break;
    }
  }, [props.action, props.id]);

  const updateTable = () => {
    props.update();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    switch (props.action) {
      case "add":
        axios
          .post(apiURL + "/nutemployee", { name: employee.name, birthDate: employee.birthDate, gender: employee.gender, email: employee.email, cpf: employee.cpf, startDate: employee.startDate, team: employee.team })
          .then(() => {
            alert("Employee created successfully!");
            handleClose();
            updateTable();
          })
          .catch((error) => {
            console.log(error);
          });
        break;
      case "edit":
        axios
          .put(apiURL + "/nutemployee/" + props.id, { name: employee.name, birthDate: employee.birthDate, gender: employee.gender, email: employee.email, cpf: employee.cpf, startDate: employee.startDate, team: employee.team })
          .then(() => {
            alert("Employee updated successfully!");
            handleClose();
            updateTable();
          })
          .catch((error) => {
            console.log(error);
          });
        break;
      default:
        break;
    }
  };

  const handleClose = () => {
    props.handleVisible(false);
  };

  return (
    <>
      <div className={modalClass}>
        <div className="modal-content">
          <span className="close" onClick={() => handleClose()}>
            &times;
          </span>

          <h1>{props.action === "add" ? "Add Employee" : "Edit Employee"}</h1>

          <form id="registration" onSubmit={handleSubmit}>
            <table>
              <tbody>
                <tr>
                  <td className="modalTable">
                    <label htmlFor="name">Name</label>
                  </td>
                  <td className="modalTable">
                    <input
                      className="modalInput"
                      type="text"
                      name="name"
                      id="name"
                      onChange={(e) => {
                        setEmployee({ ...employee, name: e.target.value });
                      }}
                      value={employee.name}
                      size="50"
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td className="modalTable">
                    <label htmlFor="birthDate">Birth Date</label>
                  </td>
                  <td className="modalTable">
                    <input
                      className="modalInput"
                      type="date"
                      name="birthDate"
                      id="birthDate"
                      onChange={(e) => {
                        setEmployee({ ...employee, birthDate: e.target.value });
                      }}
                      value={employee.birthDate}
                      size="30"
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td className="modalTable">
                    <label htmlFor="gender">Gender</label>
                  </td>
                  <td className="modalTable">
                    <select
                      className="modalInput"
                      name="gender"
                      id="gender"
                      onChange={(e) => {
                        setEmployee({ ...employee, gender: e.target.value });
                      }}
                      value={employee.gender}
                      required
                    >
                      <option value=""></option>
                      <option value="female">Female</option>
                      <option value="male">Male</option>
                      <option value="genderDiverse">Gender Diverse</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td className="modalTable">
                    <label htmlFor="email">Email</label>
                  </td>
                  <td className="modalTable">
                    <input
                      className="modalInput"
                      type="email"
                      name="email"
                      id="email"
                      onChange={(e) => {
                        setEmployee({ ...employee, email: e.target.value });
                      }}
                      value={employee.email}
                      size="40"
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td className="modalTable">
                    <label htmlFor="cpf">CPF</label>
                  </td>
                  <td className="modalTable">
                    <InputMask
                      mask="999.999.999-99"
                      className="modalInput"
                      type="text"
                      name="cpf"
                      id="cpf"
                      onChange={(e) => {
                        setEmployee({ ...employee, cpf: e.target.value });
                      }}
                      value={employee.cpf}
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td className="modalTable">
                    <label htmlFor="startDate">Start Date</label>
                  </td>
                  <td className="modalTable">
                    <InputMask
                      mask="99/9999"
                      className="modalInput"
                      type="text"
                      name="startDate"
                      id="startDate"
                      onChange={(e) => {
                        setEmployee({ ...employee, startDate: e.target.value });
                      }}
                      value={employee.startDate}
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td className="modalTable">
                    <label htmlFor="team">Team</label>
                  </td>
                  <td className="modalTable">
                    <select
                      className="modalInput"
                      name="team"
                      id="team"
                      onChange={(e) => {
                        setEmployee({ ...employee, team: e.target.value });
                      }}
                      value={employee.team}
                    >
                      <option value=""></option>
                      <option value="mobile">Mobile</option>
                      <option value="frontend">Frontend</option>
                      <option value="backend">Backend</option>
                    </select>
                  </td>
                </tr>
              </tbody>
            </table>

            <button className="actionButton" type="submit">
              {props.action === "view" ? "Ok" : "Save"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
