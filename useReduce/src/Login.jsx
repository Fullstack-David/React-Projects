import { useReducer } from 'react'

const initialState = {isLoggedIn: false, name: "", submittedName: ""}

function reducer(state, action) {
    switch (action.type) {
        case "login":
            return { isLoggedIn: true };
        case "logout":
            return { isLoggedIn: false };
        case "changeName":
            return { ...state, name: action.payload }
        case "submitForm":
            return { ...state, submittedName: state.name, name: "" }
        
        default:
            return state;
        }            
}

export default function Login() {

    const [state, dispatch] = useReducer(reducer, initialState);

    function handleLoggin() {    
        dispatch({ type: "login"});
        console.log("Logged in successfully.");
    }
    
    function handleLogout() {       
        dispatch({ type: "logout"});
        console.log("Logged out successfully.");

    }

    function handleChange(e) {
        dispatch({type: "changeName", payload: e.target.value})
    }

    function handleSubmit(e) {
        e.preventDefault();
        dispatch({type: "submitForm"})
    }



    return (
        <div className='login-container'>
            <form onSubmit={handleSubmit}>
                {state.isLoggedIn ?
                    <h1 className='login-header'> {`Welcome ${state.name}`} </h1> :
                    <h1 className='login-header'>{`Goodby ${state.name}`} </h1>
                }
                <label>
                    <input
                        className='login-input'
                        type="text"
                        value={state.name}
                        onChange={handleChange} />
                </label>
                <div>
                    {!state.isLoggedIn ?
                        <button  className='btn' onClick={handleLoggin}>Login</button> :
                        <button  className='btn' onClick={handleLogout}>Logout</button>
                    }
                </div>
            </form>
            {/* <p>Submit Name: {state.submittedName}</p> */}
        </div>
    );
}
