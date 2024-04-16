import { useState, useEffect } from "react"

export default function MessageCounter() {
    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");

    useEffect(() => {
        document.title = (` ${count} new messages ${color}`)
        // return() => {document.title = "new game"}
    }, [count, color]);

    function handleColor() {
    setColor((prevColor) => (prevColor === "green" ? "white" : "green"))
}

    return (
        <div className="message">
            <p style={{ color: color }}>
                Du har { count } <span></span>
                 nya meddelanden och färgen är {color}
            </p>
            <button className="message-btn" onClick={handleColor}>Ändra färg</button>
            <button className="message-btn"
                onClick={() => setCount((prev) => prev + 1)}>
                Lägg till nya meddelanden
            </button>
          
        </div>
    );
}

 