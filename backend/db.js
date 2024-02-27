const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://akhil:sharat321@cluster0.iftc0k3.mongodb.net/todos");

const todoSchema = mongoose.Schema({
    title : String,
    description : String,
    completed : Boolean
});

const todos = mongoose.model(`todos` , todoSchema);

module.exports = {
    todos
}