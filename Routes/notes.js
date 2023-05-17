const router = require("express").Router();
const Note = require("../Model/Notes-Model")

// Get All notes
router.get("/", async (req, res) => {
    const allNotes = await Note.find({});
    res.status(200).json(allNotes);
})

// Create a note
router.post("/",  async (req, res) => {
    const newNote = new Note(req.body) ;
    try {
        const saveNote = await newNote.save()
        res.status(200).json(saveNote)
    } catch (err) {
        res.status(500).json(err)
    }
})

// Delete a note
router.delete("/:id", async (req, res) => {
    try {
        const deleteNote =  await Note.findById(req.params.id);
        deleteNote.deleteOne();
        res.status(200).json("The note was deleted");
    } catch(err) {
        res.status(500).json(err)
    }
});

module.exports = router;