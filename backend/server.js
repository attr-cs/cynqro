const dotenv = require("dotenv");
const express = require("express");
const compression = require("compression");
const cors = require("cors");
const helmet = require("helmet");
const { createServer } = require("http");
const { serverInitialization } = require("./socket/socket");
const { connectDB } = require("./config/db");
dotenv.config();

const app = express();
const server = createServer(app);
serverInitialization(server);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(compression());
app.use(helmet({ crossOriginEmbedderPolicy: false, crossOriginResourcePolicy: false, contentSecurityPolicy: false, crossOriginOpenerPolicy: false, crossOriginEmbedderPolicy: false }));

connectDB();

server.listen(process.env.PORT, () => {
    console.log("Server is running on port ", process.env.PORT);
});

