import React, { useState } from "react";
import data from '../data.js'
import { FaQuoteRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Reviews = () => {
    const [index, setIndex] = useState(0);
    const {id, name, job, image, text} = data[index];
    const checkNumber = (number) => {
        if(number>data.length-1) {
            return 0
        } 
        if (number<0) {
            return data.length - 1
        }
        return number
    }
    const prevData = () => {
        setIndex((prev)=>{
            let newNumber = prev-1;
            return checkNumber(newNumber);
        });
    }
    const nextData = () => {
        setIndex((prev)=>{
            let newNumber = prev+1;
            return checkNumber(newNumber);
        });
    }
    const randomData = () => {
        setIndex(()=>Math.floor(Math.random() * data.length));
    }
    return (
        <article className="review">
            <div className="img-container">
                <img src={image} alt={name} className='person-img'/>
                <span className="quote-icon">
                    <FaQuoteRight />
                </span>
            </div>          
            <h4 className="author">{name}</h4>      
            <p className="job">{job}</p>
            <p className="info">{text}</p>
            <div className="button-container">
                <button className="prev-btn" onClick={prevData}>
                    <FaChevronLeft />
                </button>
                <button className="next-btn" onClick={nextData}>
                    <FaChevronRight />
                </button>
            </div>
            <button className="random-btn" onClick={randomData}>
                suprice me
            </button>
        </article>
    );
}

export default Reviews;