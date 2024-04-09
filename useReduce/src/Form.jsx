import { useReducer } from "react"

const initialState = { name: "", submittedName: ""}

const reducer = (state, action) => {
    switch (action.type) {
        case "changeName":
            return { ...state, name: action.payload }
        case "submitForm":
            return {...state, submittedName: state.name, name: ""}        
        default:
            return state;
    }
}

export default function Form() {
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleChange = (e) => {
        dispatch({type: "changeName", payload: e.target.value})

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({type: "submitForm"})
    }

    return (
        <div className="form-container">
            <h1 className="form">Form App</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Name
                    <input
                        className="form-input"
                        type="text"
                        value={state.name}
                        onChange={handleChange} />
                </label>
                <button type="submit" className="btn">Submit</button>
            </form>
            <p className="submitted">Submitted Name: {state.submittedName }</p>
        </div>
    );
}
