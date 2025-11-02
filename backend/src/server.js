import express from "express";
import { ENV } from "./lib/env.js";



const app = express();
const PORT = ENV.PORT || 3000;
//app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "success from api" });
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});



