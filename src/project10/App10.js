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

    } else if(name && isEditing) {

    } else {
        const newItem = {id: new Date().getTime().toString(), title: name};
        setList([...list, newItem]);
        setName('');
    }
  };
  return (
    <section>
      <form onSubmit={handleSubmit}>
        {alert.show && <Alert />}
        <h3>grocely bud</h3>
        <div className="form-control">
          <input type="text" className="grocery" placeholder="e.g.eggs" value={name} onChange={(e)=>setName(e.target.value)}/>
          <button type="submit" className="submit-btn">
            {isEditing ? "edit" : "submit"}
          </button>
        </div>
      </form>
      <div className="container">
        <List items={list} />
        <button className="clean-btn">clear items</button>
      </div>
    </section>
  );
};

export default App10;
