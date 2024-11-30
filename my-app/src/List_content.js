import React from 'react'
import ListItems from './ListItems'

const List_content = ({items,recreate,delete_item}) => {
  return (
    <main>
        <ul>
            {items.map((item) => (
               <ListItems
               item={item}
               key={item.id}
               recreate={recreate}
               delete_item={delete_item}
            />
            ))}
        </ul>
    </main>
  )
}

export default List_content