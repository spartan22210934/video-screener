import express from "express";
import { ENV } from "./lib/env.js";
import path from "path";
import { connectDB } from "./lib/db.js";

const app = express();
const PORT = ENV.PORT || 3000;


const __dirname = path.resolve();



app.get("/", (req, res) => {
  res.status(200).json({ message: "success from api" });
});
app.get("/books", (req, res) => {
  res.status(200).json({ status: "api is up and running " });
}
);


//make ready for deployment
if(ENV.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, "../frontend/dist")));     
    app.get("/{*any}", (req, res) => {
        res.sendFile(path.join(__dirname, "../frontend","dist","index.html"));
    });
} 


// app.listen(PORT, () => {
//   connectDB();
//     console.log(`Server is running on http://localhost:${PORT}`);
// });

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    } 
    );
  } catch (error) {
    console.error("Failed to start server:", error);
  }

};

startServer();



