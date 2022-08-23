import './App.css';
import React, {useState, useEffect, useRef} from 'react';

function App() {
	//state
  const [todos, setTodos] = useState([]);
	const todoText = useRef();

	
	useEffect(() => {
		const existingTodos = JSON.parse(localStorage.getItem('todos'));
		if (existingTodos) {
			setTodos(existingTodos);
		}
	}, []);

	function addTodo(event) {
			event.preventDefault();

			//check empty
			if (todoText.current.value === '') {
				return;
			}
			const next = [...todos,todoText.current.value];
			setTodos(next);
			localStorage.setItem('todos', JSON.stringify(next));
			//clear text box
			todoText.current.value = '';
		}


  return(
		<div>
			<h1>Todo App</h1>
			<ul>
				{
					//map over todos
					todos.map(todo => (<li key={todo}>{todo}</li>))
				}

			</ul>
			<form onSubmit={addTodo}>
				<input type="text" name="todo" ref={todoText} />
				<button type="submit">Add Todo</button>
			</form>
		</div>
	);
}

export default App;
