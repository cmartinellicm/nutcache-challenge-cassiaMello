import React, { useState, useEffect } from "react";
import axios from "axios";
import InputMask from "react-input-mask";
import { apiURL } from "../App";

export default function AddEditModal({ visible, handleVisible, employeeId, action, updateTable }) {
  const [newEmployee, setNewEmployee] = useState({
    name: "",
    birthDate: "",
    gender: "",
    email: "",
    cpf: "",
    startDate: "",
    team: "",
  });

  const modalClass = visible ? "modal show-modal" : "modal hide-modal";

  useEffect(() => {
    if (action === "edit") {
      axios
        .get(`${apiURL}/nutemployee/${employeeId}`)
        .then((response) => {
          setNewEmployee(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [action, employeeId]);

  const handleClose = () => {
    handleVisible(false);
  };

  const validateCpf = () => {
    let cpf = newEmployee.cpf.replace(/\D/g, "");
    let cpfNumbers = cpf.substring(0, 9);
    let cpfDigits = cpf.substring(9);

    // First Validation
    let firstSum = 0;

    for (let i = 10; i > 1; i--) {
      firstSum += cpfNumbers.charAt(10 - i) * i;
    }
    let firstValidation = firstSum % 11 < 2 ? 0 : 11 - (firstSum % 11);

    if (firstValidation != cpfDigits.charAt(0)) {
      return false; // CPF not valid
    }

    // Second Validation
    let secondSum = 0;
    cpfNumbers = cpf.substring(0, 10);

    for (let k = 11; k > 1; k--) {
      secondSum += cpfNumbers.charAt(11 - k) * k;
    }

    let secondValidation = secondSum % 11 < 2 ? 0 : 11 - (secondSum % 11);

    if (secondValidation != cpfDigits.charAt(1)) {
      return false; // CPF not valid
    }

    return true; // CPF valid
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateCpf()) {
      alert("CPF not valid!");
    } else {
      switch (action) {
        case "add":
          axios
            .post(`${apiURL}/nutemployee`, newEmployee)
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
            .put(`${apiURL}/nutemployee/${newEmployee._id}`, {
              name: newEmployee.name,
              birthDate: newEmployee.birthDate,
              gender: newEmployee.gender,
              email: newEmployee.email,
              cpf: newEmployee.cpf,
              startDate: newEmployee.startDate,
              team: newEmployee.team,
            })
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
    }
  };

  return (
    <>
      <div className={modalClass}>
        <div className="modal-content">
          <span className="close" onClick={() => handleClose()}>
            &times;
          </span>

          <h1>{action === "add" ? "Add Employee" : "Edit Employee"}</h1>

          <form id="registration">
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
                      onChange={(e) => {
                        setNewEmployee({ ...newEmployee, name: e.target.value });
                      }}
                      value={newEmployee.name}
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
                      onChange={(e) => {
                        setNewEmployee({ ...newEmployee, birthDate: e.target.value });
                      }}
                      value={newEmployee.birthDate}
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
                      onChange={(e) => {
                        setNewEmployee({ ...newEmployee, gender: e.target.value });
                      }}
                      value={newEmployee.gender}
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
                      onChange={(e) => {
                        setNewEmployee({ ...newEmployee, email: e.target.value });
                      }}
                      value={newEmployee.email}
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
                      onChange={(e) => {
                        setNewEmployee({ ...newEmployee, cpf: e.target.value });
                      }}
                      value={newEmployee.cpf}
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td className="modalTable">
                    <label htmlFor="startDate">Start Date</label>
                  </td>
                  <td className="modalTable">
                    <input
                      className="modalInput"
                      type="month"
                      name="startDate"
                      onChange={(e) => {
                        setNewEmployee({ ...newEmployee, startDate: e.target.value });
                      }}
                      value={newEmployee.startDate}
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
                      onChange={(e) => {
                        setNewEmployee({ ...newEmployee, team: e.target.value });
                      }}
                      value={newEmployee.team}
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
            <button type="submit" className="actionButton" onClick={handleSubmit}>
              Save
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
