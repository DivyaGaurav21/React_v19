import React from "react";
import Callback2 from "./components/useCallback/Callback2";
// import Callback1 from "./components/useCallback/Callback1";
// import UseStateHooks from "./components/UseStateHooks";
// import UseMemoHooks from "./components/UseMemoHooks";
// import UseRefHooks from "./components/UseRefHooks";

const App = () => {
  return (
    <div>
      {/* <UseStateHooks /> */}
      {/* <UseMemoHooks /> */}
      {/* <UseRefHooks/> */}
      {/* <Callback1/> */}
      <Callback2 />
    </div>
  );
};

export default App;

// --------------------------------------------//

//----------Example for using Custom hooks useForm------------//

// import React from "react";
// import { useForm } from "./components/customHooks/useForm";

// const App = () => {
//   // Define initial form state
//   const initialFormState = {
//     username: "",
//     password: "",
//     email: "",
//     dob:""
//   };

//   // Use the useForm hook
//    const { formValues, handleInputChange, resetForm } = useForm(initialFormState);

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Process the form data (e.g., send it to a server)
//     console.log("Form submitted:", formValues);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Username:
//         <input
//           type="text"
//           name="username"
//           value={formValues.username}
//           onChange={handleInputChange}
//         />
//       </label>
//       <label>
//         Password:
//         <input
//           type="password"
//           name="password"
//           value={formValues.password}
//           onChange={handleInputChange}
//         />
//       </label>
//       <label>
//         Email:
//         <input
//           type="email"
//           name="email"
//           value={formValues.email}
//           onChange={handleInputChange}
//         />
//       </label>
//       <label>
//         Email:
//         <input
//           type="number"
//           name="dob"
//           value={formValues.dob}
//           onChange={handleInputChange}
//         />
//       </label>
//       <button type="submit">Submit</button>
//       <button type="button" onClick={resetForm}>
//         Reset
//       </button>
//     </form>
//   );
// };

// export default App;

// -----------------------------------------------------------//

//----------Example for using Custom hooks useApiData------------//

// import React from "react";
// import { useApiData } from "./components/customHooks/useApiData";
// const App = () => {
//   const { data, loading, error } = useApiData(
//     "https://jsonplaceholder.typicode.com/todos"
//   );
//   return (
//     <div>
//       {loading && <div>Loading.....</div>}
//       {error && <div>Error in fetching data</div>}
//       {data &&
//         data.map((d) => (
//           <div key={d.title}>
//             <p>{d.title}</p>
//           </div>
//         ))}
//     </div>
//   );
// };

// export default App;

// =========================Context Api============================= //
// import React from 'react'
// import ThemeProvider from './contextApi/ThemeProvider'
// import Header from './contextApi/Header'
// import Content from './contextApi/Content'

// const App = () => {
//   return (
//     <ThemeProvider>
//     <div>
//       <Header/>
//       <Content/>
//     </div>
//     </ThemeProvider>
//   )
// }

// export default App
