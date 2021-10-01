import React from 'react';
import '../styles/TodoCounter.css';






function TodoCounter(props) {
 
 
  return (
   
    <React.Fragment>
      
    <h2 className="TodoCounter">Has completado {props.completedItem.length} de {props.totalItem} TODOs
    </h2>
    </React.Fragment>
  );
}


export { TodoCounter };
