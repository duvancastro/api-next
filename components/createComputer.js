import React from 'react'

const createComputer = () => {
  return (
    <div>
        <form>
        <h2 for="Nombre">Datos del Computador</h2>
        <label for="numeroSala">Numero de sala:</label><br></ br>
        <input type="text" id="numeroSala" name="numeroSala" required/><br></br>
        
        <label for="numeroComputador">Numero de Computador:</label><br></ br>
        <input type="text" id="numeroComputador" name="numeroComputador" required/><br></br>

        </form>
    </div>
  )
}

export default createComputer