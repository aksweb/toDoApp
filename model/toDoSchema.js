const mongoose = require("mongoose")
const Schema = mongoose.Schema

const toDoSchema = new mongoose.Schema(
    {
        tName: String
    }
)
const toDo = mongoose.model("toDo_V2", toDoSchema)
module.exports = toDo

