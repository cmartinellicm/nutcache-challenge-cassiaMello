import React, { useState } from "react";
import { apiURL } from "../App";
import axios from "axios";

const Form = () => {
  const [form, setForm] = useState({
    name: "",
    birthDate: "",
    gender: "",
    email: "",
    cpf: "",
    startDate: "",
    team: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(apiURL + "/nutemployee", form)
      .then(function (response) {
        alert("Employee created successfully!");
        setForm({ name: "", birthDate: "", gender: "", email: "", cpf: "", estadoCivil: "", startDate: "", team: "" });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
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
  );
};

export default Form;
