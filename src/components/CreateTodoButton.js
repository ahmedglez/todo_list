import React from 'react';
import '../styles/CreateTodoButton.css';

function CreateTodoButton(props) {



  const onClickButton =()=>{

    if(!props.openModal){
      props.setOpenModal(true)
    }else{
      props.setOpenModal(false)
    }
  }
  

  

  

  return (
    <React.Fragment>
    <button 
    className="CreateTodoButton"
     onClick={onClickButton}>
      +
      </button>
      </React.Fragment>
  );
}

export { CreateTodoButton };
