import React from 'react'
import { FaMinus } from 'react-icons/fa'
const Add_list = ({newItem,setNewItem,handleSubmit}) => {
  return (
    <form className='addForm' onSubmit={handleSubmit}>
        <label htmlFor="addItem">Add list</label>
        <input 
            type="text"
            autoFocus
            required
            id='addItem'
            placeholder='enter your text'
            value={newItem}
            onChange={(e)=> setNewItem(e.target.value)} 
        />
        <button 
            type='submit'
            aria-label='Add Item'
        >
            <FaMinus/>
        </button>
    </form>
  )
}

export default Add_list