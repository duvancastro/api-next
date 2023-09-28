import React from "react";

const createStudenForm = () => {
    async function onSubmit(event) {
        event.preventDefault()
     
        const formData = {
            name: event.target.name.value,
            lastname: event.target.Apellido.value,
            IDnumber: event.target.NumeroID.value
        }
        console.log(formData)
        const response = await fetch('/api/postStudent', {
          method: 'POST',
          body: JSON.stringify(formData)
        })
     
        // Handle response if necessary
        
        console.log(response.status)

      }
  return (
    <div>
      <form onSubmit={onSubmit} method="post">
        <h2 >Datos del estudiante</h2>
        <label >Nombre:</label>
        <br></br>
        <input type="text" id="nombre" name="name" required />
        <br></br>
        <label >Apellido:</label>
        <br></br>
        <input type="text" id="Apellido" name="lastname" required />
        <br></br>
        <label >Numero de documento:</label>
        <br></br>
        <input type="text" id="NumeroID" name="IDnumber" required />
        <br></br>
        <button type="submit">Crear estudiante</button>
      </form>
    </div>
  );
};

export default createStudenForm;
