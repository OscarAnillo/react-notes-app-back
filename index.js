const express = require('express');
const app = express();
const dotenv = require("dotenv");
dotenv.config();

const noteRoute = require("./Routes/notes")


const PORT = 3005;

app.use(express.json())
app.use("/api/notes", noteRoute)

app.listen(PORT, console.log(`Server running on port ${PORT}`))