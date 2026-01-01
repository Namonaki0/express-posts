import express from "express";
import path from "path";
import posts from "./routes/posts.js";
const port = process.env.PORT || 8000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// setup static folder
// app.use(express.static(path.join(__dirname, "static")));

// Routes
app.use("/api/posts", posts);

app.listen(port, () => console.log(`Server listening on port ${port}`));
