const mongoose = require("mongoose");

mongoose.connect("mongodburl");

const todoSchema = mongoose.Schema({
    title : String,
    description : String,
    completed : Boolean
});

const todos = mongoose.model(`todos` , todoSchema);

module.exports = {
    todos
}
