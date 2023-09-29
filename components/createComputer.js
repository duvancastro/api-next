import React, { useState } from "react";

const createComputer = () => {
  const [roomNumber, setRoomNumber] = useState("");
  const [computerNumber, setComputerNumber] = useState("");
  const [computerMac, setComputerMac] = useState("");
  async function onSubmit(event) {
    event.preventDefault();
    const data = {
      roomNumber: roomNumber,
      computerNumber: computerNumber,
      computerMac: computerMac,
    };
    console.log(data);

    const response = await fetch("/api/postComputer", {
      method: "POST",
      body: JSON.stringify(data),
    });
    setComputerMac("");
    setComputerNumber("");
    setRoomNumber("");
    console.log(response.status);
  }
  return (
    <div>
      <form onSubmit={onSubmit} method="post">
        <h2>Datos del Computador</h2>
        <label>Numero de sala:</label>
        <br></br>
        <input
          type="text"
          name="roomNumber"
          required
          value={roomNumber}
          onChange={(e) => {
            setRoomNumber(e.target.value);
          }}
        />
        <br></br>

        <label>Numero de Computador:</label>
        <br></br>
        <input
          type="text"
          name="computerNumber"
          required
          value={computerNumber}
          onChange={(e) => {
            setComputerNumber(e.target.value);
          }}
        />
        <br></br>
        <br></br>
        <label>Numero de la MAC del Computador:</label>
        <br></br>
        <input
          type="text"
          name="computerMac"
          required
          value={computerMac}
          onChange={(e) => {
            setComputerMac(e.target.value);
          }}
        />
        <br></br>
        <br></br>
        <button type="submit">registar Computador</button>
      </form>
    </div>
  );
};

export default createComputer;
