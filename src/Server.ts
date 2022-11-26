import "dotenv/config";
import express from "express";
import route from "./shared/http/routes";

const app = express();
const PORT = process.env.PORT;
app.use(express.json());
app.use(route);

app.listen(3000, () => console.log(`😁👌Running on ${PORT} 😁👌`));
