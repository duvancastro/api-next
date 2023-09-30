import {createStudent} from "./logicas/logicaStudent";
import {getStudents} from "./logicas/logicaStudent";
import { getStudentIDnumber } from "./logicas/logicaStudent";
export default async function handler(req, res) {
  switch(req.method){
    case'POST':
    const data = req.body;
    const result = await createStudent(data);
    postResponse(result,res);
    break;
    case'GET':
    const {IDnumber}=req.query
    console.log(IDnumber)
    if (IDnumber) {
      const result= await getStudentIDnumber(IDnumber)
      getResponse(result,res)
    } else {
      
      const result = await getStudents();
      getResponse(result,res);
    }
    break;
    case'PUT':
  
    break;
    default:
      res.status(500).json({ error: "Method not allowed" });
      break;


  }
  
}
function getResponse(result,res){
  switch(result.status){
    case 200:
      res.status(200).json({message:result.message,data:result.data});
      break;
      case 500:
        res.status(500).json({ error: `${result.message}` });
        break;
        default:
          res.status(500).json({ error: `${result.message}` });
          break;

  }
}
function postResponse(result,res) {
  switch (result.status) {
    case 200:
      res.status(200).json({ message: `${result.message}` });
      break;
    case 409:
      res.status(409).json({ message: `${result.message}` });
      break;
    case 500:
      res.status(500).json({ error: `${result.message}` });
      break;
    default:
      res.status(500).json({ error: `${result.message}` });
      break;
  }
}
