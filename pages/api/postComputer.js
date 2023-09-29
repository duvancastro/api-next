import registerComputer from "./logicas/logicaComputer";
export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    const result = await registerComputer(data);
    response(result, res);
  }
}
const response = (result, res) => {
  switch (result.status) {
    case 200:
      res.status(200).json({ message: `${result.message}` });
      break;
    case 400:
      res.status(400).json({ message: `${result.message}` });
      break;
    case 500:
      res.status(500).json({ message: `${result.message}` });
      break;
    default:
      res.status(500).json({ message: `${result.message}` });
      break;
  }
};
