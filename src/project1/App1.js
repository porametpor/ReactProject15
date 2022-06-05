import React, { useState } from "react";
import List from "./components/List.js";
import { data } from './data.js'
import './app1.css'

function App() {
  const [people, setPeople] = useState(data);
  const handleClick = () => {
    setPeople(()=>[]);
  }
  return (
    <main>
      <section className='container'>
        <h2>{people.length} birthdays today</h2>
        <List people={people}/>
        <button onClick={handleClick}>clear all</button>
      </section>
    </main>
  );
}

export default App;
