import React, { useState } from "react";
import Values from "values.js";
import "./app9.css";
import SingleColors from "./components/SingleColor";

const App9 = () => {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);
  const handleSubmit = (event) => {
    event.preventDefault();
    try {
        let colors = new Values(color).all(10)
        setList(colors);
        setError(false)
    } catch (error) {
        setError(true)
    }
    
  };
  return (
    <>
      <section className="container">
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder="#f12364"
            className={`${error ? 'error' : null}`}
          />
          <button className="btn" type="submit">
            submit
          </button>
        </form>
      </section>
      <section className="colors">
        {list.map((color, index)=>{
            return <SingleColors key={index} {...color} index={index}/>
        })}
      </section>
    </>
  );
};

export default App9;
