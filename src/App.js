import React, {useState} from 'react';
import './App.css';
import ToDoLists from './ToDoList';

const App = () => {

  const [inputList, setInputList] = useState("");
  
  const [items, setItems] = useState([]);

  const inputEvent = (event) => {
    setInputList(event.target.value);
  }

  const listOfItems = () => {
    setItems((oldItems) => {

      return [...oldItems, inputList];
    });
    setInputList("");
  }

  const deleteItems = (id) => {
    setItems ((oldItems) => {
      return(
        oldItems.filter((arr, index) => {
          return ( index !== id )
        }) 
        )
    })
  };

  return (
    <div className="main_div">
      <div className="center_div">
        <h1>ToDo List</h1>
        <input type="text" placeholder="Add a Item" value={inputList} onChange={inputEvent}/>
        <button onClick={listOfItems}>+</button>

        <ol>
        { items.map( (itemVal, index) => {
          return (
            <ToDoLists 
              key = {index}
              id = {index}
              text = {itemVal}
              onSelect = {deleteItems}
            />
          )
        })
        }
        </ol>
      </div>
    </div>
  );
}

export default App;
