import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const Host="0.0.0.0"
const server = express();
server.use(cors());

// Serve static files from the React build directory
server.use(express.static(path.join(__dirname, "build")));

// Fallback for React routes
server.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

server.listen(5000, Host, () => {
  console.log(`Server is listening on port 5000`);
});
