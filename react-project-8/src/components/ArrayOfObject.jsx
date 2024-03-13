import { useState } from "react";

const ArrayOfObject = ({ items }) => {
    // först behöver vi en array frö vår object
    const [computers, setComputers] = useState([]);

    // Sedan behöver vi en states för objektets property
    const [computerYear, setComputerYear] = useState(new Date().getFullYear())
    const [computerBrand, setComputerBrand] = useState("")
    const [computerModel, setComputerModel] = useState("")
    
    
    function handleRemoveComputer(index) {
       setComputers((computers) => computers.filter((_ , i) => i !== index))
   }

    function handleYearchange(e) {
        setComputerYear(e.target.value)
    }
    function handleBrandchange(e) {
        setComputerBrand(e.target.value)
    }
    function handleModelchange(e) {
        setComputerModel(e.target.value)
    }
    function handleAddComputer(e) {
        const newComputer = { year: computerYear, brand: computerBrand, model: computerModel };
        setComputers((computers) => [...computers, newComputer]);

        // För att rensa input
        setComputerYear(new Date().getFullYear())
        setComputerBrand("")
        setComputerModel("")
    }

    return (
        <div className="div-array">
            <h2 className="array-h2">List of computers</h2>
            <ul>
                {computers.map((computer, index) =>
                (<li key={index} onDoubleClick={() => handleRemoveComputer(index)}>
                    Year: {computer.year} <br />
                    Brand: {computer.brand} <br />
                    Model: {computer.model}
                </li>))}
                
            </ul>
            <input
                className="array-input"
                type="number"
                value={computerYear}
                onChange={handleYearchange} />
            <input
                className="array-input"
                type="text"
                value={computerBrand}
                onChange={handleBrandchange}
                placeholder="Enter computer brand" />
            <input
                className="array-input"
                type="text" value={computerModel}
                onChange={handleModelchange}
                placeholder="Enter computer model" />
            <button
                className="array-button"
                onClick={handleAddComputer}>Add a new computer</button>
        </div>
    );
}

export default ArrayOfObject