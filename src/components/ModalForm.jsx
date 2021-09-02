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

  // const updateTable = () => {
  //   props.update();
  // };

  useEffect(() => {
    switch (props.type) {
      case "add":
        setForm({ name: "", birthDate: "", gender: "", email: "", cpf: "", startDate: "", team: "" });
        break;
      case "edit":
        axios
          .get(apiURL + "/nutemployee/" + props.id)
          .then((response) => {
            // Show form with employee
            setForm(response.data);
            // console.log(employee);
          })
          .catch((error) => {
            console.log(error);
          });
        break;
      default:
        break;
    }
  }, []);

  function handlePut() {
    axios
      .put("https://crudcrud.com/api/d0908dbd110b402cb9e0140f09f1b506/unicorns/6130d20cdc46c203e8b3cd2b", { name: "piooo", age: 33, colour: "amarela" })
      .then((res) => {
        console.log("response: ", res.data);
      })
      .catch((err) => {});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    switch (props.type) {
      case "add":
        axios
          .post(apiURL + "/nutemployee", form)
          .then(() => {
            alert("Employee created successfully!");
            handleClose();
          })
          .catch((error) => {
            console.log(error);
          });
        break;
      case "edit":
        axios({
          method: "put",
          url: apiURL + "/nutemployee/" + props.id,
          data: { name: form.name, birthDate: form.birthDate, gender: form.gender, email: form.email, cpf: form.cpf, startDate: form.startDate, team: form.team },
        })
          .then(function (response) {
            alert("Employee updated successfully!");
            handleClose();
            // Close modal and update table
          })
          .catch(function (error) {
            console.log(error);
          });
        // axios
        //   .put(apiURL + "/nutemployee/" + props.id, form)
        //   .then(function (response) {
        //     alert("Employee updated successfully!");
        //     // Close modal and update table
        //   })
        //   .catch(function (error) {
        //     console.log(error);
        //   });
        break;
      default:
        break;
    }
  };

  const modalClass = props.visible ? "modal show-modal" : "modal hide-modal";

  const handleClose = () => {
    props.handleVisible(false);
    props.update();
  };

  return (
    <>
      <div id="myModal" className={modalClass}>
        <div className="modal-content">
          <span className="close" onClick={() => handleClose()}>
            &times;
          </span>

          <form id="registration" onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={(e) => {
                setForm({ ...form, name: e.target.value });
              }}
              value={form.name}
              required
            />
            <br />
            <label htmlFor="birthDate">Birth Date</label>
            <input
              type="date"
              name="birthDate"
              id="birthDate"
              onChange={(e) => {
                setForm({ ...form, birthDate: e.target.value });
              }}
              value={form.birthDate}
              required
            />
            <br />
            <label htmlFor="gender">Gender</label>
            <select
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
            <br />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={(e) => {
                setForm({ ...form, email: e.target.value });
              }}
              value={form.email}
              required
            />
            <br />
            <label htmlFor="cpf">CPF</label>
            <input
              type="text"
              name="cpf"
              id="cpf"
              onChange={(e) => {
                setForm({ ...form, cpf: e.target.value });
              }}
              value={form.cpf}
              required
            />
            <br />
            <label htmlFor="startDate">Start Date</label>
            <input
              type="text"
              name="startDate"
              id="startDate"
              onChange={(e) => {
                setForm({ ...form, startDate: e.target.value });
              }}
              value={form.startDate}
              required
            />
            <br />
            <label htmlFor="team">Team</label>
            <select
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
            <br />
            <button type="submit">Save</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ModalForm;
