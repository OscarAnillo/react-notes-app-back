const express = require('express');
const app = express();
const dotenv = require("dotenv");
const cors = require("cors")
dotenv.config();

const noteRoute = require("./Routes/notes")


const PORT = 3005;

app.use(cors());
app.use(express.json())
app.use("/api/notes", noteRoute)

app.listen(PORT, console.log(`Server running on port ${PORT}`))