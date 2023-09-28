import createStudent from "./logicaStudent";
export default async function handler(req, res) {


    if(req.method === 'POST'){
        const data = req.body;
        const result = await createStudent(data)
        response(result)
    }

  
}

function response(result){
    if (result.status===500) {
    
        res.status(500).json({ error: `${result.message}` });
      } else {
        res.status(201).json({ message: `${result.message}`});
      }
}
