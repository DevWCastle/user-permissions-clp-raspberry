import express from "express";
import cors from "cors";
import { router } from "./Routes/Router";
import { connectDatabase } from "./database/connectDatabase";

const PORT = Number(process.env.PORT) || 4040;
const HOSTNAME = process.env.HOSTNAME || "localhost";

const app = express();

app.use(cors());
app.use(express.json());
app.use(router)

connectDatabase();

app.listen(PORT, HOSTNAME, () => {
    console.log(`✅ Server running on http://${HOSTNAME}:${PORT}`);
});