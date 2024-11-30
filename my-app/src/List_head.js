import React from 'react'


const List_head = ({title}) => {
  return (
    <header>
        <h1>{title}</h1>
    </header>
  )
}

List_head.defaultProps={
    title:"Todo list"
}
export default List_head