

import React, { useState } from 'react'
import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from './components/Stats';


const initialItems = [
  {id:1 , description:"passport" , quantity:2 , packed: false},
  {id:2 , description:"suitcase" , quantity:1 , packed: false},
  {id:3 , description:"clothes" , quantity:5 , packed: false}
]

const App = () => {
  const [items , setItems] = useState(initialItems);

  function handleAddItems(item){
    setItems(items=>[...items , item]);
  }

  function handleDeleteItem(id){
    setItems(items=> items.filter(item => item.id !== id));
  }

  function handleToggleItem(id){
    setItems(items =>
       items.map(item =>
         item.id === id ?
          {...item , packed:!item.packed} :
           item
           )
       )
  }

    function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );

    if (confirmed) setItems([]);
   }

  return (
    <div className="app">
      <Logo/>
      <Form onAddItems = {handleAddItems}/>
      <PackingList 
      items={items} 
      onDeleteItem = {handleDeleteItem}
      onToggleItem = {handleToggleItem}
      onClearList = {handleClearList}
      />
      <Stats items={items}/>
    </div>
  )
}

export default App