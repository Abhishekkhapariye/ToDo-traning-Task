import React, { useState } from 'react';
import './App.css';
import View from './View'
import About from './About';




function App() {
   const [inputList, setInputList] = useState()   //initial data,updated data,current data
  const [items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value)
  };

  const listOfItem = () => {
    console.log("Added!!")
    setItems((oldItems) => {
      console.log(oldItems)
      return [...oldItems, inputList];
      
    });
    setInputList("");
  };

const delItems = (id) => {
  console.log("deleted!!")
  setItems((oldItems) => {
    return oldItems.filter(( arrElm ,index) =>{
      return index !== id;
    });
  });
};



  return (
    <>
      <div className="App">
        <div className="center_div">
          <br />
          <h1>
          <About/>
            ToDo List
            <br />
          </h1>
          <input type='text' placeholder='add Items' value={inputList} onChange={itemEvent}></input>
          
          <button onClick={listOfItem}  > + </button>
         

          <ol>
          <h2>{inputList}</h2>
            {items.map((itemVal,index) => {   //element, index of elem,array dealing with,this
              return <View
              id = {index}
              key = {index}
              text = {itemVal} 
              onSelect ={delItems} />;

            })}
            
          </ol>
        </div>
      
      </div>
    </>
  )
};


export default App;
