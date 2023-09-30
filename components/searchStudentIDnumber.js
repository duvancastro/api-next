import { useState } from 'react';

const BuscarEstudiantePorNumeroDoc = () => {
  const [numeroDoc, setNumeroDoc] = useState('');
  const [estudianteEncontrado, setEstudianteEncontrado] = useState(null);
  const [error, setError] = useState(null);

  const buscarEstudiante = async () => {
    try {
      const response = await fetch(`/api/students?IDnumber=${numeroDoc}`);
      console.log(`response:${response}`)
      if (response.ok) {
        const data = await response.json();
        console.log(`data=${data}`);
        if (data.data) {

          setEstudianteEncontrado(data.data[0]);
          setError(null); // Limpiar cualquier error anterior
        } else {
          setError('Estudiante no encontrado');
          setEstudianteEncontrado(null); // Limpiar datos anteriores
        }
      } else {
        setError('Error al buscar estudiante');
        setEstudianteEncontrado(null); // Limpiar datos anteriores
      }
    } catch (error) {
      console.error('Error al buscar el estudiante:', error);
      setError('Error interno del servidor 123');
      setEstudianteEncontrado(null); // Limpiar datos anteriores
    }
  };

  return (
    <div>
      <h2>Buscar Estudiante por Número de Documento</h2>
      <input
        type="text"
        placeholder="Número de Documento"
        value={numeroDoc}
        onChange={(e) => setNumeroDoc(e.target.value)}
      />
      <button onClick={buscarEstudiante}>Buscar</button>

      {error && <p>{error}</p>}

      {estudianteEncontrado && (
        <div>
          <h3>Estudiante Encontrado:</h3>
          <p>ID: {estudianteEncontrado.ID}</p>
          <p>Nombre: {estudianteEncontrado.name}</p>
          <p>Apellido: {estudianteEncontrado.lastName}</p>
          <p>Número de Documento: {estudianteEncontrado.IDnumber}</p>
        </div>
      )}
    </div>
  );
};

export default BuscarEstudiantePorNumeroDoc;
