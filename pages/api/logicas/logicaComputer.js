import pool from "../../../conexion/bd";

const registerComputer = async (data) => {
  try {
    const inf = JSON.parse(data);
    const checkComputerSQL = "SELECT * FROM `computer` WHERE `macComputer` = ?";
    const checkComputer = [inf.computerMac];
    const connection = await pool.getConnection();
    const existingComputer = await connection.query(
      checkComputerSQL,
      checkComputer
    );
    if (existingComputer[0].length > 0) {
      console.log("Ya existe un computador con este mac")
      return {
        status: 400,
        message: "Ya existe un computador con este mac",
      };
    } else {
      const sql =
        "INSERT INTO `computer` (`NumeroComputador`, `Sala`, `macComputer`) VALUES (?,?,?)";
      const values = [inf.computerNumber, inf.roomNumber, inf.computerMac];
      const result = await connection.query(sql, values);
      connection.release();
      console.log(
        `registo del computador con éxito, ID: ${result[0].insertId}`
      );

      return {
        status: 200,
        message: `Computador registradocon exito,ID: ${result[0].insertId}`,
      };
    }
  } catch (err) {
    console.log(`error al regsitar el computador ${err}`);
    throw { status: 500, message: `Error al registar el computador: ${err}` };
  }
};

export default registerComputer;
