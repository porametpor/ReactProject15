import React from "react";
import './app.css'
import Reviews from "./components/Reviews";

const App3 = () => {
    return (
        <main>
            <section className="container">
                <div className="title">
                    <h2>our reviews</h2>
                    <div className="underline"></div>
                </div>
                <Reviews />
            </section>
        </main>
    );
}

export default App3;