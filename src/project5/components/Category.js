import React from "react";

const Category = ({filterItem, categorySelect}) => {
    return (
        <div className="btn-container">
            {categorySelect.map((category, index)=>{
                return (
                    <button key={index} className="filter-btn" onClick={()=>filterItem(category)}>{category}</button>
                );
            })}
        </div>
    );
}

export default Category;