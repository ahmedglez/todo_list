import React from 'react';
import '../styles/TodoList.css'
import {TodoItem} from './TodoItem'

function TodoList(props) {



  
  
const completeTodo = (text, completed) =>{    
  const todoIndex = props.searchedItem.findIndex(todo => todo.text === text);
  const newTodos = [...props.searchedItem];
  if(completed){
    newTodos[todoIndex].completed = false;
  }else{
    newTodos[todoIndex].completed = true;
  } 
  props.saveItem(newTodos);  
}





const deleteTodo = (text) =>{
  const todoIndex = props.searchedItem.findIndex(todo => todo.text === text);
  const newTodos = [...props.searchedItem];
  newTodos.splice(todoIndex,1);
  props.saveItem(newTodos);  
}


let mensaje ='';

if(props.loading){
  mensaje="Estamos cargando..."
}else if(props.error){
  mensaje="Ha ocurrido un error :("
}
else if(props.searchedItem===0 && !props.loading){
  mensaje="No hay TO-DOs"
}
 
  return (
    <React.Fragment>
    <section>
      <ul>
       {mensaje}
        {props.searchedItem.map((todo) => (  
           
          <TodoItem  key={todo.text} name={todo.text} completed={todo.completed} onComplete={()=> completeTodo(todo.text, todo.completed)}  onDelete={() => deleteTodo(todo.text)} />
        )          
        )}
      </ul>
    </section>
    </React.Fragment>
  );
}

export { TodoList };
