import React from 'react'
import {FaTrashAlt} from 'react-icons/fa';

const ListItems = ({item,recreate,delete_item}) => {
  return (
    <main>
         <li className='item'>
                    <input type="checkbox" checked= {item.checked} id='right'
                    onChange={()=> recreate(item.id)}

                    />
                    <label 
                    onDoubleClick={()=> recreate(item.id)}
                    style={(item.checked)?{textDecoration:'line-through'}:null}
                    >{item.item}</label>
                    <FaTrashAlt
                        role='button'
                        tabIndex="0"
                        onClick={()=> delete_item(item.id)}
                        aria-label={`delete ${item.item}`}
                    />
                </li>
    </main>
  )
}

export default ListItems