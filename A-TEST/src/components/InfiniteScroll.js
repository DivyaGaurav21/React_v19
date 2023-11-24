// import React, { useEffect, useState } from 'react'

// const InfiniteScroll = () => {
//     const [todos, setTodos] = useState([]);
//     const [isLoading, setIsLoading] = useState(false);
//     const [page, setPage] = useState(1);



//     const loadMoreTodos = () => {
//         if (!isLoading) {
//             setIsLoading(true)
//             fetch('https://jsonplaceholder.typicode.com/todos')
//                 .then(response => response.json())
//                 .then(newTodos => {
//                     setTodos(prev => [...prev, ...newTodos])
//                     setIsLoading(false);
//                     setPage(prevPage => prevPage + 1)
//                 })
//                 .catch(error => {
//                     console.log('Error in fetching')
//                     setIsLoading(false)
//                 })
//         }
//     }

//     useEffect(() => {
//         loadMoreTodos();
//     }, []);

//     useEffect(() => {
//         window.addEventListener('scroll', handleScroll)
//     }, [todos])


//     const handleScroll = () => {
//         if (window.innerHeight === document.documentElement.offsetHeight) {
//             loadMoreTodos();
//         }
//     }

//     const initialTodo = todos.slice(0, 10);

//     return (
//         <div>
//             <h1>Infinite Scroll</h1>
//             <ul className='items'>
//                 {initialTodo.map(todo => (
//                     <li key={todo.id} className='item-list'>{todo.title}</li>
//                 ))}
//             </ul>
//             {isLoading && <p>Loading...</p>}
//         </div>
//     )
// }

// export default InfiniteScroll



// ---------------------------------------------------------//
import React, { useEffect, useState } from 'react';

const InfiniteScroll = ({ setValidate }) => {
    const [todos, setTodos] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [page, setPage] = useState(1);

    const loadMoreTodos = () => {
        if (!isLoading) {
            setIsLoading(true);
            fetch(`https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=10`)
                .then(response => response.json())
                .then(newTodos => {
                    setTodos(prev => [...prev, ...newTodos]);
                    setIsLoading(false);
                    setPage(prevPage => prevPage + 1);
                })
                .catch(error => {
                    console.log(`Error in fetching ${error}`);
                    setIsLoading(false);
                });
        }
    };

    useEffect(() => {
        loadMoreTodos();
    }, []);

    const handleScroll = () => {
        const windowHeight = window.innerHeight;
        const scrollHeight = document.documentElement.scrollHeight;
        const scrollTop = document.documentElement.scrollTop;

        if (scrollTop + windowHeight >= scrollHeight - 100) {
            loadMoreTodos();
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [todos]);

    const initialTodo = todos.slice(0, 10);

    return (
        <div>
            <h1>Infinite Scroll
                <button onClick={() => setValidate(true)}>LogOut</button>
            </h1>
            <ul className='items'>
                {initialTodo.map(todo => (
                    <li key={todo.id} className='item-list'>{todo.title}</li>
                ))}
            </ul>
            {isLoading && <p>Loading...</p>}
        </div>
    );
};

export default InfiniteScroll;
