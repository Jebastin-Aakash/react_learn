import React from 'react'
import List_content from './List_content'
//import { useState } from 'react';
//import {FaTrashAlt} from 'react-icons/fa';

const List_key = ({items,recreate,delete_item}) => {
    //const year=new Date();
  return (
    <>
        
        {(items.length)?(
        <List_content
            items={items}
            delete_item={delete_item}
            recreate={recreate}
        />
        ):(
            <p style={{margin:'13% 5% 13% 13%',fontFamily:"monospace",alignItems:"center",fontSize:"4rem",justifyContent:"center"}}>the list is empty</p>
        )}
        
    </>
  )
}

export default List_key