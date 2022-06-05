import React, { useEffect, useState } from "react";
import { FaAngleDoubleRight } from 'react-icons/fa'
import './app6.css'
const url = 'https://course-api.com/react-tabs-project';

const App6 = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [value, setValue] = useState(0)
    const fetchData = async () => {
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
        setLoading(false)
    }
    useEffect(()=>{
        fetchData();
    },[])
    if(loading) {
        return (
            <h1>loading...</h1>
        );
    }
    const { company, dates, duties, title } = data[value];
    return (
        <section>
            <div className="title">
                <h2>experience</h2>
                <div className="underline"></div>
            </div>
            <div className="job-center">
                <div className="btn-container">
                    {data.map((item, index)=>{
                        return (
                            <button key={index} className={`job-btn ${index===value && 'active-btn'}`} onClick={()=>setValue(index)}>{item.company}</button>
                        );
                    })}
                </div>
                <article className="job-info">
                    <h3>{title}</h3>
                    <h4>{company}</h4>
                    <p className="job-date">{dates}</p>
                    {duties.map((duty, index) => {
                        return (
                            <div key={index} className='job-desc'>
                                <FaAngleDoubleRight className='job-icon' />
                                <p>{duty}</p>
                            </div>
                        );
                    })}
                </article>    
            </div>           
        </section>
    ); 
}

export default App6;