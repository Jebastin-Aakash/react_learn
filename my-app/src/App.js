//import logo from './logo.svg';
//import './App.css';
import { useState } from 'react';
import './list.css';
import List_footer from './List_footer';
import List_head from './List_head';
import List_key from './List_key';
import Add_list from './Add_list';
import SearchItem from './SearchItem';
//import { useState } from 'react';
//import BioHead from "./BioHead";
//import Button from './Button';
//import { Prototype } from "./Prototype";


function App() {
  // function TimeRanges(){
  //   const arr=['first','second','third'];
  //   const num=Math.floor(Math.random()*3);
  //   return arr[num];
  // }
 const [items,setItems]=useState(JSON.parse(localStorage.getItem('todo_list')));
//     [{
//         id:1,
//         checked:true,
//         item:"learn react language"
//     },
//     {
//         id:2,
//         checked:false,
//         item:"write a record"
//     },
//     {
//         id:3,
//         checked:true,
//         item:"learn react language"
//     }
// ]

const [newItem,setNewItem]=useState('');
const [search,setSearch]=useState('');
const addItem = (item)=>{
  const id=items.length?items[items.length-1].id + 1 : 1;
  const addNewItem={id,checked:false,item};
  const listItem=[...items,addNewItem];
  setItems(listItem);
  localStorage.setItem("todo_list",JSON.stringify(listItem));
}

function recreate(id){
    const change=items.map((item)=> item.id===id?{...item,checked:!item.checked}:item);
    setItems(change);
    localStorage.setItem("todo_list",JSON.stringify(change));
    sessionStorage.setItem("project",JSON.stringify(change));
}
function delete_item(id){
    const remove=items.filter((item)=>item.id!==id);
    setItems(remove);
    localStorage.setItem("todo_list",JSON.stringify(remove));
}

const handleSubmit=(e)=>{
  e.preventDefault()
  if(!newItem) return;
  console.log(newItem);
  addItem(newItem);
  setNewItem('');
}
  return (
    // <div className="App">
    //   {/* <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //       {/* <h1>create a app</h1> }
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header> */}
    //   <p>my {TimeRanges()} project</p>
    //   {/* <Prototype/>
    //   <BioHead/> */}
       
    // </div>
    <>
     <div>
        <List_head title="project"/>
        <Add_list
          newItem={newItem}
          setNewItem={setNewItem}
          handleSubmit={handleSubmit}
        />
        <SearchItem
          search={search}
          setSearch={setSearch}
        />
        <List_key
          items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
          delete_item={delete_item}
          recreate={recreate}
        />
        <List_footer length={items.length}/>
     </div>
    {/* <Button/> */}
    </>
  );
}

export default App;
