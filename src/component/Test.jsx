import React, { useState } from 'react'

export default function Test() {
    // let name = props.name;
 const[moves,setMoves]  = useState({blue:0,yellow:0,green:0,red:0});
 function clickHnadler(e){
  let id = e.target.id;
  if(id==="blue"){
 
    setMoves(
      {...moves, blue:moves.blue+1}
    );
  }
  else if(id==="yellow"){
 
    setMoves({...moves,yellow:moves.yellow+1});
  }
  else if(id==="green"){
  
    setMoves({...moves,green:moves.green+1});
  }
  else{
    
    setMoves({...moves, red:moves.red+1})}
  }
 
  return (
    <> <div>
     <div><div>blue:{moves.blue}</div>
      <button id='blue' style={{backgroundColor:"blue"}} onClick={clickHnadler}>+1</button></div>
     <div><div>yellow:{moves.yellow}</div>
      <button  id='yellow' style={{backgroundColor:"yellow"}} onClick={clickHnadler}>+1</button></div>
     <div><div>green:{moves.green}</div>
      <button id='green' style={{backgroundColor:"green"}} onClick={clickHnadler}>+1</button></div>
     <div><div>moves:{moves.red}</div>
      <button id='red' style={{backgroundColor:"red"}} onClick={clickHnadler}>+1</button></div>
    </div>
    </>
  )
}
