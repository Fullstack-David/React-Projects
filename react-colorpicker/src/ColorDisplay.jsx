const ColorDisplay = ({ color, isDarkText}) => {


  return (
    <div className='color-display'
      style={{
        backgroundColor: color,
        color: isDarkText ? "#000" : "#fff"
        
      }}>
      {color ? color: "No color set"}
      </div>
  );
}



export default ColorDisplay