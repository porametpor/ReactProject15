import React, { useEffect, useState } from "react";
import Loading from "./components/Loading";
import './app2.css'
import Tours from "./components/Tours";
const url = 'https://course-api.com/react-tours-project';

const App2 = () => {
    const [loading, setLoading] = useState(true);
    const [tours, setTours] = useState([]);
    const fetchData = async () => {
        setLoading(()=>true)
        const response = await fetch(url);
        const tourData = await response.json();
        setTours(()=>tourData);
        setLoading(()=>false)
    };
    useEffect(()=>{
        fetchData();
    }, []);
    const removeTour = (id) => {
        const newTour = tours.filter((tour)=>tour.id!==id);
        setTours(()=>newTour);
    }
    if(loading) {
        return (
            <main>
                <Loading />
            </main>
        );
    }
    if(tours.length===0) {
        return (
            <main>
               <div className="title">
                   <h2>no tours left</h2>
                   <div className="underline"></div>
                   <button className="btn" onClick={()=>fetchData()}>refresh</button>
               </div>
            </main>
        );
    }
    return (
        <main>
            <Tours tours={tours} removeTour={removeTour}/>
        </main>
    );
}

export default App2;