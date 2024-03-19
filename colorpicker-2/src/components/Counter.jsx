import { useState } from "react";

export const Counter = () => {

    const [counter, setCounter] = useState()

    function decrement(e) {
        setCounter((prevStat) => prevStat - 2 )
    }

    function increment(e) {
        setCounter(counter + 1)
    }

    function reset(e) {
        setCounter(0)
    }

    return (
        <div className="counter-container">
            <p className="counter-display">{counter}</p>
            <button className="counter-button" onClick={(e) => decrement(e)}>-</button>
            <button className="counter-button" onClick={(e) => reset(e)}>Reset</button>
            <button className="counter-button" onClick={(e) => increment(e)}>+</button>
            
        </div>
    );
  
}
