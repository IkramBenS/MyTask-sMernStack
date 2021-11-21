const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const connectDB = require("./database/db");

const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const projectRoutes = require("./routes/project");
const taskRoutes = require("./routes/task");

// middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser()); 

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/project", projectRoutes);
app.use("/api/task", taskRoutes);

connectDB();

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on port ${port}`));
