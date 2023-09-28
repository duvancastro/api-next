import createStudent from "./logica";
export default async function handler(req, res) {
  const data = req.body;
  const result = await createStudent(data)
  console.log(result)
  if (result.status===500) {
    
    res.status(500).json({ error: `${result.message}` });
  } else {
    res.status(201).json({ message: `${result.message}`});
  }
}
