

import React, { useEffect, useState } from 'react'

const TodoListId = () => {
    const [todos, setTodos] = useState([]);
    const [show, setShow] = useState(false);
    const [showTodo, setShowTodo] = useState(null);

    // console.log(todo);

    useEffect(() => {
        const fetchData = async () => {
            try {
                let data = await fetch('https://jsonplaceholder.typicode.com/todos');
                let apidata = await data.json();
                // console.log(apidata);
                setTodos(apidata);

            } catch (err) {
                console.log(`Error in fetching data ${err}`)
            }
        }
        fetchData();
    }, []);

    function todoClickHandler(id) {
        setShowTodo(todos.find(todo => todo.id === id));
        setShow(true);
    }


    return (
        <div>

            <ul>
                {
                    todos.map(todo =>
                        <div key={todo.id}>
                            <button className='btn' onClick={() => todoClickHandler(todo.id)}>{todo.id}</button>
                            {show && showTodo.id === todo.id && <li className='card'>{todo.title}</li>}
                        </div>
                    )
                }
            </ul>

        </div>
    )
}

export default TodoListId
