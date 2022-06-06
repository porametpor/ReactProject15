import React, { useState } from "react";
import "./app10.css";
import Alert from "./components/Alert";
import List from "./components/List";

const App10 = () => {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!name) {
      showAlert(true, 'please enter value', 'danger');
    } else if(name && isEditing) {
      setList(list.map(item=>{
        if(item.id === editID) {
          return {...item, title: name}
        } 
        return item;
        })
      )
      setEditID(null);
      setIsEditing(false);
      setName('');
    } else {
      showAlert(true, 'item added to the list', 'success');
      const newItem = {id: new Date().getTime().toString(), title: name};
      setList([...list, newItem]);
      setName('');
    }
  };
  const showAlert = (show=false, msg='', type='') => {
    setAlert({show, type, msg})
  }
  const clearList = () => {
    showAlert(true, 'empty list', 'danger');
    setList([]);
  }
  const removeItem = (id) => {
    showAlert(true, 'remove item', 'danger');
    setList(list.filter(item=>item.id !== id));
  }
  const editItem = (id) => {
    const specificItem = list.find(item=>item.id === id);
    setIsEditing(true);
    setEditID(id);
    setName(specificItem.title);
  }
  return (
    <section>
      <form onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list}/>}
        <h3>grocely bud</h3>
        <div className="form-control">
          <input type="text" className="grocery" placeholder="e.g.eggs" value={name} onChange={(e)=>setName(e.target.value)}/>
          <button type="submit" className="submit-btn">
            {isEditing ? "edit" : "submit"}
          </button>
        </div>
      </form>
        {list.length > 0 && 
          <div className="container">
            <List items={list} removeItem={removeItem} editItem={editItem}/>
            <button className="clean-btn" onClick={clearList}>clear items</button>
          </div>
        }
    </section>
  );
};

export default App10;
