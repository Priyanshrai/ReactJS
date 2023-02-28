
import './App.css';
import Headers from "./MyComponents/Headers" 
import Todos from "./MyComponents/Todos" 
import Footer from "./MyComponents/Footer" 
import AddTodo from "./MyComponents/AddTodo" 
import React, { useState } from 'react';


function App() {
  const onDelete= (todo)=>{
console.log("I AM ON DELETE", todo)
  
    setTodos(todos.filter((e)=>{
       return e!==todo;
    }));
  }

const addTodo = (title,desc)=>{
  console.log(" I am Adding This Todo " , title, desc)
 let sno = todos[todos.length-1].sno + 1;
  const myTodo = {
    sno : sno,
    title: title,
    desc : desc
  }
  setTodos([...todos, myTodo])
  console.log(myTodo);
}


  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "Go to the Market",
      desc:"You Need To go To the Market To do this Job Done"

    },
    {
      sno: 2,
      title: "Go to the Mall",
      desc:"You Need To go To the Market To do this Job Done2"

    },
    {
      sno: 3,
      title: "Go to the Ghat",
      desc:"You Need To go To the Market To do this Job Done3"

    }
  ])
  return (<>
  <Headers title="My Todos List"/>
  <AddTodo addTodo={addTodo}/>
  <Todos todos={todos} onDelete={onDelete}/>
  <Footer/>
  </>
  );
}

export default App;
