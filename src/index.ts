import express, { Request, Response } from "express";
import cors from "cors";
import sequelize from "./db";

const PORT = Number(process.env.PORT) || 4040;
const HOSTNAME = process.env.HOSTNAME || "localhost";

const app = express();

app.use(cors());
app.use(express.json());

sequelize
  .sync()
  .then(() => {
    console.log("Banco de dados sincronizado com o Sequelize.");

    app.listen(PORT, HOSTNAME, () => {
      console.log(`Server running on http://${HOSTNAME}:${PORT}`);
    });
    
  })
  .catch((err) => {
    console.error("Erro ao sincronizar com o banco:", err);
  });

app.get("/", (req: Request, res: Response) => {
  res.send("teset");
});
