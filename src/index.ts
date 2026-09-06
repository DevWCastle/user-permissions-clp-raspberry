import express, { Request, Response} from "express";
import cors from "cors";

const PORT = Number(process.env.PORT) || 4040;
const HOSTNAME = process.env.HOSTNAME || 'localhost';

const app = express();

app.use(cors());
app.use(express.json());


app.get("/", (req: Request, res: Response) => {
    
    res.send("teset")

})

app.listen(PORT, HOSTNAME, () => {
    console.log(`Server running on http://${HOSTNAME}:${PORT}`);
});