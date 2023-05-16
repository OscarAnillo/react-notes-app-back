const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URL)
.then(() => {
    console.log("Connected to DB")
})
.catch((err) => {
    console.log(err)
});

const noteSchema = new mongoose.Schema({
    note: {
        type: String
    },
    date: {
        type: Date
    }
})

module.exports = mongoose.model("Note", noteSchema)