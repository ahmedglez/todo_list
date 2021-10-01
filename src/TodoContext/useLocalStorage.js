import React from "react";




function useLocalStorage(itemName, initialValue){
    const [Item, setItem] = React.useState(initialValue);
    const [loading, setLoading] = React.useState(true); 
    const [error, setError] = React.useState(false);
  
  
      React.useEffect(()=>{
  
       
        
        setTimeout(()=>{
          try{
            const localStorageItem = localStorage.getItem(itemName)
            let parsedItem;
    
            if(!localStorageItem){
              localStorage.setItem(itemName, JSON.stringify(initialValue))
              parsedItem=initialValue;
            }else{
              parsedItem=JSON.parse(localStorageItem); 
            }
    
            setItem(parsedItem);
            setLoading(false);
          }catch(e){         
            setError(true);
          }
         
        },1000)
      })
  
  
     const saveItem = (newItem) =>{
      try{ 
    const stringifierItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifierItem);
    setItem(newItem);
  }catch(e){
    
    setError(true);
  }
     }
  
  
    return {
      Item,
      saveItem,
      loading,
      error
    };
  
  }


  export {useLocalStorage}
  