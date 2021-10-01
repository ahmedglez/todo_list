import React from 'react';
import '../styles/TodoSearch.css';

function TodoSearch({searchValue, setSearchValue, total}) {  

  const onSearchValueChange = (event) => {
   
    setSearchValue(event.target.value)
  };


  let message = "Aún no hay TO-DO's";
    if(total!==0){
      message="Buscar TO-DO";
    }
  
 
  return (
    <React.Fragment>      
    <input   
     className="TodoSearch"
     placeholder= {message}
     value={searchValue}
     onChange={onSearchValueChange}
      />     
      </React.Fragment>

  );
}

export { TodoSearch };
