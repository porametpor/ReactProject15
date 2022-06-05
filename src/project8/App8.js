import React, { useState } from "react";
import data from './data.js'
import './app8.css'

const App8 = () => {
    const [count, setCount] = useState(0);
    const [text, setText] = useState([]);
    const handleSubmit = (e) => {
        e.preventDefault();
        let amount = parseInt(count);
        if(amount<=0) {
            amount = 1;
        }
        if(amount>8) {
            amount = 8;
        }
        setText(data.slice(0, amount));
    };
    return (
        <section>
            <h3>tired of boring lorem ipsum?</h3>
            <form className="lorem-form" onSubmit={handleSubmit}>
                <label htmlFor="amount">
                    paragraphs: 
                </label>
                <input type="number" id="amount" name="amount" onChange={(e)=>setCount(e.target.value)} value={count}/>
                <button type="submit" className="btn">generate</button>
            </form>
            <article>
                {text.map((item, index)=> {
                    return <p key={index}>{item}</p>
                })}
            </article>
        </section>
    );
}

export default App8;