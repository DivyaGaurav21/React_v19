// import { useState } from "react";

// export default function Form({ onAddItems }) {
//   const [description, setDescription] = useState("");
//   const [quantity, setQuantity] = useState(1);

//   function handleSubmit(e) {
//     e.preventDefault();

//     if (!description) return;

//     const newItem = { description, quantity, packed: false, id: Date.now() };

//     onAddItems(newItem);

//     setDescription("");
//     setQuantity(1);
//   }

//   return (
//     <form className="add-form" onSubmit={handleSubmit}>
//       <h3>What do you need for your 😍 trip?</h3>
//       <select
//         value={quantity}
//         onChange={(e) => setQuantity(Number(e.target.value))}
//       >
//         {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
//           <option value={num} key={num}>
//             {num}
//           </option>
//         ))}
//       </select>
//       <input
//         type="text"
//         placeholder="Item..."
//         value={description}
//         onChange={(e) => setDescription(e.target.value)}
//       />
//       <button>Add</button>
//     </form>
//   );
// }



import React, { useState } from 'react'

const Form = ({onAddItems}) => {
  const [description , setDescription] = useState("");
  const [quantity , setQuantitiy] = useState(1);
 

   function handleSubmit(e){
      e.preventDefault();
      if(!description) return;
      const newItem = {description , quantity , packed: false , id:Date.now()}
      // console.log(newItem);
      onAddItems(newItem);
      setDescription("");
      setQuantitiy(1);
   }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select value={quantity} onChange={e=>setQuantitiy(e.target.value)}>
        <option value={1}> 1 </option>
        <option value={2}> 2 </option>
        <option value={3}> 3 </option>
        <option value={4}> 4 </option>
        <option value={5}> 5 </option>
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  )
}

export default Form