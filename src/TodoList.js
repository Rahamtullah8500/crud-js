import React from "react";
import "./Todo.css";

export const TodosList = ({todos,setTodos,setEditTodo}) => {   

    const handleDelete = ({id})=>{
      setTodos(todos.filter((todo)=> todo.id !== id))
    };

    const handleEdit = ({id}) => {
  
      const findTodo = todos.find((todo) => todo.id ===id);
      setEditTodo(findTodo);
      
    }
     return (
    <>
      
      <div className="TaskData">
          <h1>My Tasks</h1>

          {todos.map((todo) => (

            <ol className="taskList" key={todo.id} >
              <label>Title:</label>
              <p className="tasks"  >{todo.title}</p>
              <label>Before: </label>
              <p className="tasks"  >{todo.date}</p>

              <span>
                <button className="" onClick={()=> handleEdit(todo)}>
                  <i className="fa fa-edit"></i>
                </button> 
                <button className="" onClick={() => handleDelete(todo)}>
                  <i className="fa fa-trash"></i>
                </button> 
                  {/* <input type="checkbox" id="myCheck" onClick={myFunction}></input> */} <br/>
              </span>
           
            </ol> ))
         }
      </div>
    </>
  )
}


/*
    let checkBox = document.getElementById("myCheck");


    const myFunction = () => {
      if (checkBox.checked==true){
        alert("Good Job Keep Going...")
      }
      else{
        alert("Do it now ")
      }
    }

    */