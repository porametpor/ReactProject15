import React, { useState } from "react";
import './app5.css'
import Category from "./components/Category";
import Menu from "./components/Menu";
import data from './data.js'

const allCategory = ['all', ...new Set(data.map(item=>item.category))];

const App5 = () => {
    const [menuItems, setMenuItems] = useState(data);
    const [categorySelect, setCategorySelect] = useState(allCategory);
    const filterItem = (category) => {
        if(category==='all') {
            setMenuItems(data)
            return;
        }
        setMenuItems(()=>{
            const newCategory = data.filter(item=>{
                return item.category === category;
            })
            return newCategory;
        })
    }
    return (
        <main>
            <section className="menu section">
                <div className="title">
                    <h2>Our Menu</h2>
                    <div className="underline"></div>
                </div>
            </section>
            <Category filterItem={filterItem} categorySelect={categorySelect}/>
            <Menu items={menuItems}/>
        </main>
    );
}

export default App5;