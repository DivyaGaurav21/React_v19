// import React, { useContext } from 'react'
// import { CounterContext } from './context/CountContextProvider';
// import Counter from './components/Counter';

// const App = () => {
//   const counterState = useContext(CounterContext);
//   const { count, setCount } = counterState;
//   return (
//     <div>
//       <p>Count is : {count}</p>
//       <Counter />
//     </div>
//   )
// }

// export default App;

// ================================//
// by using context custom  Hooks

// import React from 'react';
// import { useCounter } from './context/CountContextProvider';

// const App = () => {
//   const counterContext = useCounter();
//   const { count, setCount } = counterContext;
//   return (
//     <div>
//       <button onClick={() => setCount(curr => curr - 1)}>DEC</button>
//       <p>Count is : {count}</p>
//       <button onClick={() => setCount(curr => curr + 1)}>INC</button>
//     </div>
//   )
// }

// export default App

// ===============================//
//by using context Theme

// import React from 'react'
// import { useTheme } from './context/ThemeContextProvider'

// const App = () => {
//   const themeContextObject  = useTheme( );
//   const {theme , toggleTheme} = themeContextObject;
//   return (
//     <div>
//       <p className={`${theme === "light" ? "text-black bg-slate-200" : "text-red-400 bg-yellow-300"} p-4`}>
//           Lorem ipsum dolor sit, amet consectetur adipisicing elit.
//       </p>
//       <button onClick={toggleTheme}>Toggle Theme</button>
//     </div>
//   )
// }

// export default App

// ===============================//
// by using Auth Context

// import React, { useState } from 'react';
// import { useUserAuth } from './context/UserContextProvider';
// import SignUp from './components/SignUp';
// import LogIn from './components/Login';
// import Profile from './components/Profile';

// const App = () => {
//   const { user } = useUserAuth();
//   const [showSignUp, setShowSignUp] = useState(true);

//   const toggleForm = () => {
//     setShowSignUp(prev => !prev);
//   };

//   if (user) {
//     return <Profile />;
//   }

//   return (
//     <div className="flex justify-center items-center">
//       {showSignUp ? (
//         <div className='flex flex-col gap-2'>
//           <SignUp />
//           <p className="mt-4 text-center text-gray-600">
//             Already have an account?
//             <button
//               onClick={toggleForm}
//               className="ml-2 text-blue-500 hover:underline"
//             >
//               Sign In
//             </button>
//           </p>
//         </div>
//       ) : (
//         <div className='flex flex-col gap-2'>
//           <LogIn />
//           <p className="mt-4 text-center text-gray-600">
//             Don't have an account?
//             <button
//               onClick={toggleForm}
//               className="ml-2 text-blue-500 hover:underline"
//             >
//               Sign Up
//             </button>
//           </p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;

// ============================//
// Cart Example 
// import React from 'react'
// import ItemList from './components/ItemList';
// import Cart from './components/Cart';

// const App = () => {
//   return (
//     <div className="min-h-screen bg-gray-100 p-8">
//       <h1 className="text-4xl font-bold mb-8 text-center">Shopping Cart Example</h1>
//       <div className="flex justify-between">
//         <ItemList />
//         <Cart />
//       </div>
//     </div>
//   )
// }

// export default App


// TODO LIST BY USE REDUCER 

// src/App.js
import React, { useReducer } from 'react';
import AddTodoForm from './components/todoComp/AddTodoForm';
import TodoList from './components/todoComp/TodoList';

// Initial state with predefined todos
export const initialState = [
  { id: 1, text: "Learn React" },
  { id: 2, text: "Build Todo App" },
];

// Reducer function to handle actions
export const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.payload];

    case 'EDIT_TODO':
      return state.map((todo) =>
        todo.id === action.payload.id ? { ...todo, text: action.payload.text } : todo
      );

    case 'DELETE_TODO':
      return state.filter((todo) => todo.id !== action.payload);

    default:
      return state;
  }
};


const App = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState);

  const handleAddTodo = (newTodo) => {
    dispatch({ type: 'ADD_TODO', payload: newTodo });
  };
  const handleEditTodo = (updatedTodo) => {
    dispatch({ type: 'EDIT_TODO', payload: updatedTodo });
  };
  const handleDeleteTodo = (id) => {
    dispatch({ type: 'DELETE_TODO', payload: id });
  };

  return (
    <div>
      <AddTodoForm onAdd={handleAddTodo} />
      <TodoList todos={todos} onEdit={handleEditTodo} onDelete={handleDeleteTodo} />
    </div>
  );
};

export default App;
