import React, { useState, useEffect } from "react";

const SingleColors = ({rgb, weight, index}) => {
    const [alert, setAlert] = useState(false);
    const bcg = rgb.join(',');
    useEffect(()=>{
        const timeout = setTimeout(()=>{
            setAlert(false)
        }, 3000);
    }, [alert]);
    const handleAlert = () => {
        navigator.clipboard.writeText(bcg);
        setAlert(true);
    }
    return (
        <article className="color" style={{backgroundColor: `rgb(${bcg})`}} onClick={handleAlert}>
            <p className="percent-value">
                {weight}%
            </p>
            {alert && <p>copy to clipboard</p>}
        </article>
    );
}

export default SingleColors;