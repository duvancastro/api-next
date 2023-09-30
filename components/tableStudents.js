import { useEffect, useState } from 'react';

const TablaEstudiantes = () => {
  const [estudiantes, setEstudiantes] = useState([]);

  useEffect(() => {
    // Realiza una solicitud a tu API para obtener los datos de estudiantes
    fetch('/api/students')
      .then((response) => response.json())
      .then((data) => {
        // Verifica si la respuesta contiene datos válidos
        if (data && data.data && Array.isArray(data.data)) {
          setEstudiantes(data.data); // Almacena los datos en el estado local
        }
      })
      .catch((error) => {
        console.error('Error al obtener la lista de estudiantes:', error);
      });
  }, []); // Ejecuta la solicitud GET al montar el componente

  return (
    <div>
      <h2>Lista de Estudiantes</h2>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Numero de Doc</th>
            {/* Agrega más encabezados de columna según tus datos */}
          </tr>
        </thead>
        <tbody>
          {estudiantes.map((student) => (
            <tr key={student.ID}>
              <td>{student.name}</td>
              <td>{student.lastName}</td>
              <td>{student.IDnumber}</td>
              {/* Agrega más celdas según tus datos */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TablaEstudiantes;
