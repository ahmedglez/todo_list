
//import './App.css';
import React from "react";
import {TodoCounter} from "./components/TodoCounter";
import {CreateTodoButton} from "./components/CreateTodoButton";
import {TodoList} from "./components/TodoList";
import {TodoSearch} from "./components/TodoSearch"
import {TodoTitle} from "./components/TodoTitle"
import { TodoContext} from "./TodoContext/TodoContext";
import {TodoProvider} from "./TodoContext/TodoContext"
import {TodoModal} from "./components/TodoModal";
import {TodoForm} from "../src/components/TodoForm/index"

/* const defaultItem = [
  {text:'Estudiar React', completed: false},
  {text:'Tomar el curso de React', completed: false},
  {text:'Botar la basura', completed: true},
  {text:'Sacar al perro', completed: true},
  {text:'Regar las plantas', completed: true},
  {text:'Preparar la comida', completed: true}
]; */







function App(props) { 
   
  

  return (
    <TodoProvider>
    <React.Fragment>   

   
        
     <TodoTitle />

     <TodoContext.Consumer>
       {(value) => (
          <div>
            
            
           {console.log(value)}
          <TodoCounter totalItem = {value.totalItem} completedItem = {value.completedItem}/> 



          <TodoSearch searchValue={value.searchValue} setSearchValue={value.setSearchValue} searchedItem={value.searchedItem}/>
          {value.error && <p>Hubo un error....</p>}
         {value.loading && <p>Estamos cargando....</p>}


          <TodoList searchValue={value.searchValue} setSearchValue={value.setSearchValue} searchedItem={value.searchedItem} saveItem={value.saveItem}>         
          {!!value.openModal && <TodoModal><p>Teletransportacion</p></TodoModal>}
         </TodoList>


         <CreateTodoButton setOpenModal={value.setOpenModal} openModal={value.openModal}/>  



         {!!value.openModal &&
          <TodoModal>
           <TodoForm saveItem={value.saveItem} todos={value.Item} setOpenModal={value.setOpenModal}/>          
         </TodoModal>}
         </div>
       )}



    </TodoContext.Consumer>
   
      
    </React.Fragment>
    </TodoProvider>   
  );
}

export default App;
