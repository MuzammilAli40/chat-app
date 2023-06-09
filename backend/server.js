const express = require("express");
const dotenv = require("dotenv")
const app = express();
const chats = require("./data/data");
const connectDB = require("./config/db");
const colors = require("colors")
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes")
const { notFound, errorHandler } = require("./middleware/errorMiddleware")

dotenv.config();

connectDB()

app.use(express.json());

app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes);

app.use(notFound);
app.use(errorHandler);


const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started in PORT ${PORT}`.yellow.bold))