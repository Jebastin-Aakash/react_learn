import React from 'react'
import { useState } from 'react'

const Button = () => {
    const [count,setCount]=useState(0);
  
    function increment(){
        //setCount(()=>{ return count+1});
        setCount(prevCount=>prevCount+1);
    }
    function decrement(){
        setCount(()=>{ return count-1});
    }
  return (
    <>
        <div>Button</div>
        <button>click</button>
        <br />
        <button onClick={increment}>+</button>
        <span>{count}</span>
        <button onClick={decrement}>-</button>
    </>
  )
}

export default Button