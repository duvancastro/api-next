import pool from "../../../conexion/bd";

const createStudent = async (data) => {
  try {
    const inf = JSON.parse(data);
    const checkStudentSQL = "SELECT * FROM `estudiantes` WHERE `NumeroDoc` = ?";
    const checkStudentValues = [inf.IDnumber];

    // Obten una conexión del pool
    const connection = await pool.getConnection();
    const existingStudent = await connection.query(
      checkStudentSQL,
      checkStudentValues
    );
    if (existingStudent[0].length > 0) {
      console.log(`Estudiante ya existe, ID: ${existingStudent[0][0].ID}`);
      connection.release();
      return { status: 409, message: "El estudiante ya existe" };
    } else {
      // Ejecuta la consulta dentro de la conexión
      const sql =
        "INSERT INTO `estudiantes` (`Nombre`, `Apellido`, `NumeroDoc`) VALUES (?,?,?)";
      const values = [inf.name, inf.lastname, inf.IDnumber];
      const result = await connection.query(sql, values);

      // Libera la conexión de vuelta al pool
      connection.release();
      console.log(result[0].insertId);
      console.log(`Estudiante creado con éxito, ID: ${result[0].insertId}`);
      return {
        status: 201,
        message: `Estudiante creado con éxito, ID: ${result[0].insertId}`,
      };
    }
  } catch (err) {
    console.error(`Error al crear el estudiante: ${err}`);
    throw { status: 500, message: `ERROR interno en el server: ${err}` };
  }
};
// const getStudentNumeroDoc= async(data)=>{
//   try {
//     const inf = JSON.parse(data);
//     const checkStudentSQL = "SELECT * FROM `estudiantes` WHERE `NumeroDoc` =?";
//     const checkStudentValues = [inf.IDnumber];
//     // Obten una conexión del pool
//     const connection = await pool.getConnection();
//     const existingStudent = await connection.query(
//       checkStudentSQL,
//       checkStudentValues
//     );
//     if (existingStudent[0].length > 0) {
//       console.log(`Estudiante ya existe, ID: ${existingStudent[0][0].ID}`);
//       connection.release();
//       return { status: 409, message: "El estudiante ya existe" };
//     }} 
//   catch (err) {
//     console.error(`Error al crear el estudiante: ${err}`);
//     throw { status: 500, message: `ERROR interno en el server: ${err}` };
//   }
// }
const getStudents=async()=>{
  try {
    console.log(`entro`)
    // Obten una conexión del pool
    const connection = await pool.getConnection();
    // Ejecuta la consulta dentro de la conexión
    const sql = "SELECT * FROM `estudiantes`";
    const result = await connection.query(sql);
    // Libera la conexión de vuelta al pool
    connection.release();
    console.log(result[0]);
    return {
      status: 200,
      message: `Lista de estudiantes obtenida con éxito`,
      data: result[0],
    };
  } catch (err) {
    console.error(`Error al crear el estudiante: ${err}`);
    throw { status: 500, message: `ERROR interno en el server: ${err}` };
  }

}

export  {createStudent,getStudents}