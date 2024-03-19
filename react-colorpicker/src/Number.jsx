import {useState} from 'react'

const Number = () => {
    const [count, setCount] = useState(0)
    function increment() {
        setCount((prevStat) => prevStat + 2)
        
    }
    function decrement() {
        setCount((prevStat) => prevStat - 1)
        setCount((prevStat) => prevStat - 1)
        setCount((prevStat) => prevStat - 1)
        
    }
    function reset() {
        setCount(0)
    }
        return (
          <div className="counter-container">
            <p className="counter-display">{count}</p>
            <button className="counter-button" onClick={increment}>+</button>
            <button className="counter-button" onClick={reset}>Reset</button>	
            <button className="counter-button" onClick={decrement}>-</button>
          </div>
        );
      
  
}

export default Number