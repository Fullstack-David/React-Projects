const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
  console.log("Type event");
};

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  return e.target.value;
};
const TypeEvent = () => {
  return (
    <>
      <button onClick={(e) => handleClick(e)}>Click me</button>
      <input type="text" onChange={handleChange} placeholder="Type evnet..." />
    </>
  );
};

export default TypeEvent;
