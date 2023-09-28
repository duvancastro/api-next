import React, { useState } from "react";

const createStudenForm = () => {
  const [name, setname] = useState("");
  const [lastname, setlastname] = useState("");
  const [IDnumber, setIDnumber] = useState("");
  async function onSubmit(event) {
    event.preventDefault();
    const formData = {
      name: name,
      lastname: lastname,
      IDnumber: IDnumber,
    };
    console.log(formData);
    const response = await fetch("/api/postStudent", {
      method: "POST",
      body: JSON.stringify(formData),
    });
    setname('')
    setlastname('')
    setIDnumber('')
  console.log(response.status);
  }
  return (
    <div>
      <form onSubmit={onSubmit} method="post">
        <h2>Datos del estudiante</h2>
        <label>Nombre:</label>
        <br></br>
        <input
          type="text"
          id="nombre"
          name="name"
          required
          value={name}
          onChange={(e) => {
            setname(e.target.value);
          }}
        />
        <br></br>
        <label>Apellido:</label>
        <br></br>
        <input
          type="text"
          id="Apellido"
          name="lastname"
          required
          value={lastname}
          onChange={(e) => {
            setlastname(e.target.value);
          }}
        />
        <br></br>
        <label>Numero de documento:</label>
        <br></br>
        <input
          type="text"
          id="NumeroID"
          name="IDnumber"
          required
          value={IDnumber}
          onChange={(e) => {
            setIDnumber(e.target.value);
          }}
        />
        <br></br>
        <button type="submit">Crear estudiante</button>
      </form>
    </div>
  );
};

export default createStudenForm;
