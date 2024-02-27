const express = require("express");
const z = require("zod");
const jwt = require("jsonwebtoken");
const { createTODO, updateTODO } = require("./types");
const app = express();
const { todos } = require("./db");
const cors = require("cors")

app.use(express.json());
app.use(cors());


app.post("/addToDo",async (req,res) =>{
    const todo = req.body;
    const validation = createTODO.safeParse(todo);
    if(!validation.success){
        res.status(411).json({
            msg : "invalid inputs"
        })
    }
    // after zod validation insert todo in mongodb
    await todos.create({
        title: todo.title,
        description : todo.description,
        completed : false
    })
    
    res.json({
        msg : "TODO Added"
    })

});

app.get("/todo",async (req,res) => {

    const to = await todos.find({});
    res.json({
     to
 });
 
 });

app.put("/updateToDo",async (req,res) =>{
    const update = req.body;
    const validation = updateTODO.safeParse(update);
    if(!validation.success){
        res.status(411).json({
            msg : "invalid inputs"
        })
    }
    // after zod validation delete todo from mongodb
    // return;

    await todos.updateOne({
        _id : req.body.id
    },{
        completed : true
    });

    res.json({
        msg : "Marked As Completed"
    })
});



app.listen(3000);