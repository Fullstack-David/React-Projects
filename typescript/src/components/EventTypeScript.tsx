import { useState } from "react";

export default function EventTypeScript() {
  const [inputText, setInputText] = useState("");
  const [buttonText, setButtonText] = useState("Heeej 😍");

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const handleButton = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setButtonText("Helloo");
  };

  return (
    <div>
      <input type="text" onChange={handleInput} value={inputText} />
      <p>{inputText}</p>
      <button onClick={handleButton}>{buttonText}</button>
    </div>
  );
}
