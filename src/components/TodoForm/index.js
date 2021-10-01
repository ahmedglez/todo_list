import React from "react";
import "./TodoForm.css"

function TodoForm(props){
 
const [newTodoValue, setNewTodoValue] = React.useState('')

const onCancel = () =>{
    props.setOpenModal(false)
}


const addTodo = (texto) =>{
    const newTodos = [...props.todos];
    if(!!texto){
        newTodos.push({
            completed:false,
            text: texto
        })
        props.saveItem(newTodos);
    }
   
}


const onChange = (event) =>{   
    setNewTodoValue(event.target.value);
}


const onSubmit = (event) =>{
   
    event.preventDefault();
    addTodo(newTodoValue)
    props.setOpenModal(false)
}

    return (
        <form   onSubmit={onSubmit}>
            <label htmlFor="">...</label>
            <textarea onChange={onChange} value={newTodoValue} placeholder="Escribe un nuevo TO-DO"></textarea>
            <div className="TodoForm-buttonContainer">
                <button className="TodoForm-button TodoForm-button-cancel" type="submit" onClick={onCancel}>Cancelar</button>
                <button className="TodoForm-button TodoForm-button-add"  type="submit" onClick={onSubmit}>Añadir</button>
                
            </div>

        </form>
    )
}



export {TodoForm}