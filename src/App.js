
import './App.css';
import React, { useState } from 'react'
import useList from './Components/useList'


function App() {
  const {list,push,pull}=useList()
  const [todo,setTodo]=useState()
  const onSubmit=(event)=>{
    event.preventDefault()
    
    push(todo)
    setTodo("")
    
  }
  
  return (
    <div >
      <header className='App-header'>
        TODO LIST
      </header>
    <div className="body">
      
      <form onSubmit={onSubmit} >
       
       <input required id='inp' placeholder='Add Element Here!!!' type="text" value={todo} onChange={(eve)=>{setTodo(eve.target.value)}}/>
       
       <button className='add-btn' type='submit'>Add</button>
      </form>
      <h2>
        { list.map((listItem,index)=>{
          return (
            <div className='itemList'>
            <ul className='listData' key={index}>{listItem}</ul>
            <button className='rmv-btn' onClick={()=>{pull(index)}}>Remove</button>
            <br></br>
            <br></br>
            </div>
          )
        })}
      </h2>
      
    </div>
    </div>
  )
}

export default App






