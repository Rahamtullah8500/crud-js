import { useState } from 'react';
import './App.css';
import { Form } from './Form';
import { TodosList} from './TodoList';




function App() {
  const [input,setInput] = useState("")
  const [todos,setTodos] = useState([])
  const [editTodo, setEditTodo] = useState(null)
  const [dueDate, setDueDate]= useState('')
  
  return (
    <div className="App">
      <Form 
         input={input}
         setInput={setInput} 
         todos={todos}
         setTodos={setTodos}
         editTodo={editTodo}
         setEditTodo={setEditTodo}
         dueDate={dueDate}
         setDueDate={setDueDate}
      />
      <TodosList 
        todos={todos} 
        setTodos={setTodos} 
        setEditTodo={setEditTodo}
        />

     
    </div>

    
    
  );
}

export default App;
