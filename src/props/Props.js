import React from 'react';

const Props = () => {
    const show = (something) => {
        console.log(something);
    }
    return (
        <>
            <Ask name="Poramet" age={23} show={show}/>
        </>
    );
};

const Ask = ({name, age, show}) => {
    return (
        <>
            <h1>name = {name} and Age = {age}</h1>
            <button onClick={()=>show('por')}>console</button>
        </>
    );
}

// กำหนดค่า default ของ props
// Ask.defaultProps = {
//     name: 'Null'
// }

export default Props;