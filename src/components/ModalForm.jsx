import React, { useState, useEffect } from "react";
import { apiURL } from "../App";
import axios from "axios";

const ModalForm = (props) => {
  const [form, setForm] = useState({
    name: "",
    birthDate: "",
    gender: "",
    email: "",
    cpf: "",
    startDate: "",
    team: "",
  });

  console.log(props.action);

  const modalClass = props.visible ? "modal show-modal" : "modal hide-modal";

  const updateTable = () => {
    props.update();
  };

  useEffect(() => {
    switch (props.action) {
      case "add":
        setForm({ name: "", birthDate: "", gender: "", email: "", cpf: "", startDate: "", team: "" });
        break;
      case "edit":
        axios
          .get(apiURL + "/nutemployee/" + props.id)
          .then((res) => {
            setForm(res.data);
          })
          .catch((error) => {
            console.log(error);
          });
        break;
      default:
        break;
    }
  }, [props]);

  const handleSubmit = (e) => {
    e.preventDefault();
    switch (props.action) {
      case "add":
        axios
          .post(apiURL + "/nutemployee", { name: form.name, birthDate: form.birthDate, gender: form.gender, email: form.email, cpf: form.cpf, startDate: form.startDate, team: form.team })
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
          .put(apiURL + "/nutemployee/" + props.id, { name: form.name, birthDate: form.birthDate, gender: form.gender, email: form.email, cpf: form.cpf, startDate: form.startDate, team: form.team })
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
      <div id="myModal" className={modalClass}>
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
                        setForm({ ...form, name: e.target.value });
                      }}
                      value={form.name}
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
                        setForm({ ...form, birthDate: e.target.value });
                      }}
                      value={form.birthDate}
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
                        setForm({ ...form, gender: e.target.value });
                      }}
                      value={form.gender}
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
                        setForm({ ...form, email: e.target.value });
                      }}
                      value={form.email}
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
                    <input
                      className="modalInput"
                      type="text"
                      name="cpf"
                      id="cpf"
                      onChange={(e) => {
                        setForm({ ...form, cpf: e.target.value });
                      }}
                      value={form.cpf}
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
                      type="text"
                      name="startDate"
                      id="startDate"
                      onChange={(e) => {
                        setForm({ ...form, startDate: e.target.value });
                      }}
                      value={form.startDate}
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
                        setForm({ ...form, team: e.target.value });
                      }}
                      value={form.team}
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
};

export default ModalForm;