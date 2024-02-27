import { useState } from "react";



export function CreateTodo(){

const [title,setTitle] = useState("");
const [description,setDescription] = useState("");

    return (<div>
        <input style={{
            padding : 10,
            margin : 10
        }} type="text" placeholder="title" onChange={function(e){
            const title = e.target.value;
            setTitle(title);

        }}></input><br />
        <input style={{
            padding : 10,
            margin : 10
        }} type="text" placeholder="description" onChange={function(e){
            const description = e.target.value;
            setDescription(description);

        }}></input><br />
        <button style={{
            margin : 10
        }} onClick={() => fetch("http://localhost:3000/addToDo",{
            method : "POST",
            body : JSON.stringify({
                title : title,
                description : description
            }),
            headers : {
              "Content-type": "application/json"
            }
        })
        .then(async function(res){
          const json = await res.json();
           alert("ToDo Added")
        })}>Add a ToDo</button>
    </div>
)}