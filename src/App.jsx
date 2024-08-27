import { useState } from 'react'

function App() {
  const [text, setText] = useState("");
  const [todo, setTodo] = useState([]);

  const addTodo = (event) => {
    event.preventDefault();
    todo.push(text);
    setTodo([...todo]);
    console.log(todo);
    setText("");
  }

  const delTodo = (index) => {
    todo.splice(index, 1);
    setTodo([...todo])
  }

  const editTodo = (index) => {
    const newTodo = prompt("Edit your Todo", todo[index]);
    todo[index] = newTodo;
    setTodo([...todo]);
  }



  return (
    <>
      <h1>Todo App</h1>
      <div id='todo-div'>
        <form onSubmit={addTodo}>
          <input type="text" placeholder='Enter Todo' onChange={(e) => setText(e.target.value)} value={text} />
          <button type='submit'>Add Todo</button>
        </form>
        <ul>
          {todo.map((item, index) => {
            return (
              <li>
                <>
                  <span>{item}</span>
                </>
                <>
                  <span>
                    <button onClick={() => delTodo(index)} >Delete</button>
                    <button onClick={() => editTodo(index)} >Edit</button>
                  </span>
                </>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )


}

export default App;