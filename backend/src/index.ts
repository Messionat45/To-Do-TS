import express, { Request, response } from "express";
import cors from "cors";
import todoRoutes from "./routes/todoRoutes";

const app = express();
const port = 3000;

// app.use(cors());
// Enable CORS with preflight support
app.use(
  cors({
    origin: "*", // allow your frontend origin
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
  })
);

app.use(express.json());

app.use("/api", todoRoutes);

app.listen(port, () => console.log(`servers running at ${port}`));
