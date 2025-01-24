
import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

export default function TodoList() {
    const[todos,settodos] = useState([{id:uuidv4(),task:"SAMPLE TASK"}]);
    const[doneTodos,setDoneTodos] = useState([{id:uuidv4(),task:"DONE TASK"}]);
    let[newTodo,setnewTodo] =useState("");
    function addnewTodo(e){
       let {value} = e.target;
       
       setnewTodo(value);
       
    }
    let addTodo=()=>{

          settodos([...todos,{id:uuidv4(),task:newTodo.toUpperCase()}]);
        setnewTodo("");
    }
   function deleteTdo(id){      
        settodos(todos.filter((todo)=>todo.id!==id));
      //   setDoneTodos(todos.filter((todo)=>todo.id!==id));
    };
   
 function DoneHandler(id){
   // let todo = ;
   let {task} =todos.filter((todo)=>todo.id===id)[0];
   
   console.log(todos.filter((todo)=>todo.id===id)[0].task);
   settodos(todos.filter((todo)=>todo.id!==id));
   let newDoneTodo = {id,task};
   setDoneTodos([...doneTodos,newDoneTodo]);
 }
  return (
   <>


   <div>
   <input type="text"  placeholder='add your task' value = {newTodo}onChange={addnewTodo}/>
   <button onClick={addTodo} >Add</button>
   </div>
   <br /><br /><br /><br /><br />
   <h1>Todo List</h1>
   <hr />
   <div>
    <ul>
       {
        todos.map((todo)=>(
     <li key={todo.id}>{todo.task}   <button  onClick={()=>deleteTdo(todo.id)}>delete</button> <button onClick={()=>DoneHandler(todo.id)}>Mark as Done</button> </li>
  
        ))}
    </ul>
    <hr />
    <br /><br /><br />
    <h3>Done Task</h3>
    <ul>
      {
         doneTodos.map((donetodo)=>(
            <li key={donetodo.id}>{donetodo.task} </li>
         ))
      }
    </ul>
   </div>
   </>
  )
}
