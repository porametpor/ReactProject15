import React, { useState } from "react";
import SingleQuestion from "./components/SingleQuestion.js";
import data from './data.js'
import './app4.css'

const App4 = () => {
    const [questions, setQuestions] = useState(data);
    return (
        <main>
            <div className="container">
                <h3>question and answer about login</h3>
                <section className="info">
                    {questions.map((question)=>
                        <SingleQuestion key={question.id} {...question}/>
                    )}
                </section>
            </div>
        </main>
    );
}

export default App4;