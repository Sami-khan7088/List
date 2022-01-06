import { useState } from 'react/cjs/react.development';
import Deleteit from './Del.js';
import './App.css';

function App() {
 
  const [itemVal,setState]= useState("");
  const [itemdata,setData]=useState([]);
  function inputVal(e) {
    setState(e.target.value);
  }
  function listItem() {
    if(itemVal===" "){
      alert("please enter data")
    }
    else{
    setData((oldItem)=>{
      return [...oldItem,itemVal]
    }
    )
    setState(" ");
  }
  }
  function deleteItem(id) {
    setData((oldItem)=>{
      return oldItem.filter((cur,index)=>{
        return id !==index
      })


    })
  }
  function enter(e) {
    if(e.keyCode===13)
    {
      if(itemVal===" ")
      {
        alert("please enter data")
      }
      else{
      setData((oldItem)=>{
        return [...oldItem,itemVal]
      }
      )
      setState(" ");
    }
      
    }
    
  }
  return (
   <div className='main-div' onKeyDown={enter}>
     <div className='center-div'>
       <h1>React To do List</h1>
       <div className='header'>
       </div>
       <input type="text" className='input' placeholder='Add Item' value={itemVal} onChange={inputVal} />
       <button className='btn' onClick={listItem}><i className="fas fa-plus fa-lg" id='icon'  ></i></button>
       <ul style={{listStyle:"none"}} className='ul'>
       {
         itemdata.map((currn,index)=>{
           return <> 
           <Deleteit text={currn} key={index} id={index} onselect={deleteItem}/>
           </>
         })
       }
       
       </ul>
     </div>
   </div>
  );
}

export default App;

