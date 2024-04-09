import { useReducer } from "react"
import Form from "./Form";
import Login from "./Login";

const initialState = {
  count: 5
};

const reducer = (state, action) => {
  switch (action.type) {
    case "incerement":
      const newCount = state.count - 1;
      const hasMessage = newCount < 0;

      // ett anant sätt att skriva return:

      // return {...state, count: state.count > 0 ? state.count -1 : 0}

      return {
        ...state,
        count: hasMessage ? state.count : newCount,
        error: hasMessage ? "Countdown reached zero" : null,
      }
    case "decrement":
      const newNum = state.count + 1;
      const newEr = newNum > 10;

      return {
        ...state,
        count: newEr ? state.count : newNum,
        error: newEr ? "Maximum has reached" : null,
        
      }
    default:
      return state;
  }
}



function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
    <div className="card-container" >
      <div className="container">
        <h1>Countdown App</h1>
        <div className="btn-btn">

        <button
          className="count-btn"
          onClick={() => dispatch( { type: "incerement" })}>-</button>
        <button
          className="count-btn"
          onClick={() => dispatch({ type: "decrement" })}
        >+</button>
        </div>
        <p className="countdown-p">Count: {state.count}</p>
        {state.error && <p className="countdown-para">{state.error}</p>}
      </div>

      <Form />
    </div>
    <Login/>
    </>

  );
}

export default App
