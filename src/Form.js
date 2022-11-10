import { useEffect} from 'react';
import './Form.css';
import {v4 as uuidv4} from "uuid";

export const Form = ({input, setInput,todos,setTodos, editTodo, setEditTodo,dueDate,setDueDate}) => {

    const updateTodo = (title, id,date) => {
        const newTodo = todos.map((todo) =>
            todo.id === id ? {title, id, date} : todo
        );
        setTodos(newTodo);
        setEditTodo("");
    };

    useEffect(() => {
        
        if (editTodo) {
            setInput(editTodo.title);
            setDueDate(editTodo.date);
        }
        else {
            setInput("");
        }
    }, [setInput, editTodo]);

    const onInputChange = (event) =>{
        setInput(event.target.value);
    };

    const dateChange = (event) => {
        setDueDate(event.target.value)
    }

    const onFormSubmit = (event) => {
        event.preventDefault();

        if (!editTodo) {
            setTodos([...todos, {id:uuidv4(), title:input,date:dueDate}]);
            alert(input)
        }
        else{
            updateTodo(input, editTodo.id,dueDate)
        }

        setInput("");
        setDueDate("");

    }



  return (
    <>

    <div className='body'>
     
        <div className='formdata'>

            <form className='contact'id='form' onSubmit={onFormSubmit}  >

                <h1>ToDo-App</h1><br/>
                <div className='taskdata'>
                    <h3>Add New Task</h3>
                    <input type='text' value={input}  placeholder='Text here..' name='name'  required autoComplete='off' id='input' onChange={onInputChange} /><br/>
                     <br/>
                    <h3>Due Date</h3>
                    <input type="date" value={dueDate} onChange={dateChange} required />
                </div>
                <button type='submit' className='button'>
                    {editTodo ? "Update" : "Add"}
                </button>  

            </form>
        </div>
    </div>

    </>

  )
}