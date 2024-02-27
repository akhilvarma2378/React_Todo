export function Todos({todos}){

    return <div>
    {todos.map(function(todos){
        return (<div>
        <h1>{todos.title}</h1>
        <p>{todos.description}</p>
        <button> {todos.completed == true?"completed":"Mark As Completed"}</button>
      </div>)
    })
    }
   </div>
}