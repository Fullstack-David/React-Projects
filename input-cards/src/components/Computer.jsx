import React, { useState } from 'react'

const Computer = () => {

    const [computer, setComputer] = useState({
        year: 2020,
        brand: "Apple",
        model: "Macbook Air",        
    })
    // Spread operator skapar en kopia av den nursprungliga 
    // year: 2020,
    // brand: "Apple",
    // model: "Macbook air",
    // year: 2024
    //bestPractice är att skriva "prevState", i detta fallet här nere har vi bara "camputer" eller vi kan lägga in bara "c"
    function handleYearChange(e) {
        setComputer((computer) => ({...computer, year: e.target.value}))
    }
    function handleBrandChange(e) {
        setComputer((computer) => ({...computer, brand: e.target.value}))
    }
    function handleModelChange(e) {
        setComputer((computer) => ({...computer, model: e.target.value}))
    }

    return (
        <div className='div-div-container'>
            <p
                className='computer-para'>My computer is a {""}
                {computer.year} {""}  
                {computer.brand} {""}
                {computer.model} 
            </p>
            <input
                className="input-element"
                type="number"
                value={computer.year}
                onChange={handleYearChange} /><br />
            <input
                className="input-element"
                type="text"
                value={computer.brand}
                onChange={handleBrandChange} /><br />
            <input
                className="input-element"
                type="text"
                value={computer.model}
                onChange={handleModelChange} /><br />
        </div>
    );
}

export default Computer
