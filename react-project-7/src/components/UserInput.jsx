import { useState } from "react";

const UserInput = () => {
    const [textInput, setTextInput] = useState('')

    function handleInput(e){
        setTextInput(e.target.value)
    }
    return (
        <div className="div-userinput">
            <h1 className="output-userinput">{textInput}</h1>
            <hr style={{
                marginBottom: "2rem"
            }} />
            
            <input
                className="userinput"
                type="text"
                placeholder="Write your name"
                value={textInput}
                onChange={(e) => handleInput(e)}
            />
            
        </div>
        
    );
}

export default UserInput