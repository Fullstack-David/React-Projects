
const ColorInput = ({color, setColor, isDarkText, setIsDarkText}) => {
    

  function handleColor(e) {
    setColor(e.target.value)
  }

  return (
  
    <form >
      <input type="text" placeholder="Set a color" value={color} onChange={(e) => handleColor(e)} />
      <input type="color" value={color} onChange={(e) => handleColor(e)} />
      <button type="button" onClick={()=> setIsDarkText(!isDarkText)}>Toggle text color</button>
    </form>


  );
}

export default ColorInput