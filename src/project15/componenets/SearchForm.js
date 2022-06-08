import React, { useEffect, useRef, useState } from 'react';
import { useGlobalContext } from '../context';

const SearchForm = () => {
    const { setSearchTerm } = useGlobalContext();
    const searchValue = useRef('');
    const [test, setTest] = useState('')
    const searchCocktail = () => {
        setSearchTerm(searchValue.current.value)
    }
    useEffect(()=> {
        searchValue.current.focus()
    }, [])
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <section className='section search'>
            <form className='search-form' onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="name">search your favorite cocktail</label>
                    <input type="text" id='name' ref={searchValue} onChange={searchCocktail}/>
                </div>
            </form>
        </section>
    );
};

export default SearchForm;