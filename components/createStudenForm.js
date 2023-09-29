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
  const numero=(e)=>{
    if(!isNaN(e.target.value)){
      setIDnumber(e.target.value);
    }else{
      alert('Por favor, ingrese solo números.');
    }
  }
  return (
    <div>
      <form onSubmit={onSubmit} method="post">
        <h2>Datos del estudiante</h2>
        <label>Nombre:</label>
        <br></br>
        <input
          type="text"
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
          onChange={numero}
        />
        <br></br>
        <button type="submit">Crear estudiante</button>
      </form>
    </div>
  );
};

export default createStudenForm;
