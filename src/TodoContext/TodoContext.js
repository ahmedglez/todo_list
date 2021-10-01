import React from "react";
import { useLocalStorage } from "./useLocalStorage";


const TodoContext = React.createContext();

function TodoProvider(props){



    const {Item, saveItem, loading, error} = useLocalStorage('TODOS_V1', []);
    const [openModal, setOpenModal] = React.useState(false); 
 
    const [searchValue, setSearchValue] = React.useState('');
    
    const completedItem = Item.filter(todo => !!todo.completed)
    const totalItem = Item.length;
  
  
    let searchedItem =[];
  
    if(!searchValue.length >= 1){
      searchedItem=Item;
    }else{
      searchedItem = Item.filter(todo =>{
        const todoText = todo.text.toLowerCase()
        const searchText = searchValue.toLowerCase();
        return todoText.includes(searchText);
      })
  
     
     
    }
  
  
   
  
  
  
  
  


    return(
    <TodoContext.Provider value={{ loading, error, totalItem, completedItem, searchValue,setSearchValue,searchedItem, saveItem, openModal, setOpenModal, Item}}>
        {props.children}
    </TodoContext.Provider>
    );
}


function TodoConsumer(props){
<TodoContext.Consumer>
</TodoContext.Consumer>
}


export {TodoContext, TodoProvider}
