import express from "express";
const server = express();

server.use(express.json());

import setUserRoutes from "../src/routes/userRoutes";
import setAuthRoutes from "../src/routes/authRoutes";

setUserRoutes(server);
setAuthRoutes(server);

export default server;