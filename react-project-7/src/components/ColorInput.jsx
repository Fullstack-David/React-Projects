

const ColorInput = ({color, setColor, isDarkText, setIsDarkText}) => {

    function handleInput(e) {
        setColor(e.target.value)
    }


    return (
        <form>
            <input
                type="text"
                placeholder="Set a color"
                value={color}
                onChange={(e) => handleInput(e)}
            />
            <input
                type="color"
                placeholder="Set a color"
                value={color}
                onChange={(e) => handleInput(e)}
            />
            <button type="button" onClick={() => setIsDarkText(!isDarkText)} >
                Toggle text color
            </button>
        </form>
    );
}

export default ColorInput