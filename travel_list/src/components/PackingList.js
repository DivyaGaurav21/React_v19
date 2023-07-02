
import React from 'react'
import Item from './Item'

const PackingList = ({ items , onDeleteItem  , onToggleItem , onClearList}) => {
  return (
    <div className='list'>
      <ul>
        {items.map(item => <Item
         item={item} 
         onDeleteItem={onDeleteItem}
         onToggleItem = {onToggleItem}
         key={item.id}/>)}
      </ul>
      <div className="actions">
        <button onClick={onClearList}>Clear List</button>
        </div>
    </div>
  )
}

export default PackingList;