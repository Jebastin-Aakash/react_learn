import React from 'react'

const BioHead = () => {
    function name(){
        const varity=['avi','naveen','joe','kishore'];
        const choose=Math.floor(Math.random()*4);
        return varity[choose];
    }
    function age(){
        const num=Math.floor(Math.random()*22);
        if(num>=16){
            return num;
        }else if(num>10){
            return num+6;
        }else{
            return num+10;
        }
    }
    const year=new Date();
  return (
    <>
        <div>
            <p>my name is {name()}</p>
            <p>i am just {age()} years old only</p>
            <b>the current year is &copy; {year.getFullYear()}</b>
        </div>
    </>
  )
}

export default BioHead