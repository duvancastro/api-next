import pool from '../../conexion/bd';

const createStudent = async (data) => {
  try {
    const inf = JSON.parse(data);
    const sql = "INSERT INTO `estudiantes` (`Nombre`, `Apellido`, `NumeroDoc`) VALUES (?,?,?)";
    const values = [inf.name, inf.lastname, inf.IDnumber];
    
    // Obten una conexión del pool
    const connection = await pool.getConnection();
    
    // Ejecuta la consulta dentro de la conexión
    const result = await connection.query(sql, values);
    
    // Libera la conexión de vuelta al pool
    connection.release();
    console.log(result[0].insertId)
    console.log(`Estudiante creado con éxito, ID: ${result[0].insertId}`);
    return { status: 201, message: `Estudiante creado con éxito, ID: ${result[0].insertId}` };
  } catch (err) {
    console.error(`Error al crear el estudiante: ${err}`);
    throw { status: 500, message: `Error al crear el estudiante: ${err}` };
  }
};

export default createStudent;
