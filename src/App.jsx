import { useState } from "react";
import "./App.css";

function App() {
    const [numberOne, setNumberOne] = useState(0);
    const [numberTwo, setNumberTwo] = useState(0);
    const [result, setResult] = useState(0);

function sum() {
    setResult(Number(numberOne) + Number(numberTwo));
}

return (
    <div>
        <span className="title"> YEAH DEV SUM </span>

        <div className="buttons">
            <input className="input-one"
            type="number"
            onChange={(event) => setNumberOne(event.currentTarget.value)} />
            
            <span className="plus">+</span>
            
            <input className="input-two"
            type="number"
            onChange={(event) => setNumberTwo(event.currentTarget.value)} />

            <button className="calculate" onClick={sum}>Calcular</button> 
        </div>

        <div className="resultSum">
            <span>O RESULTADO É {result}</span>
        </div>
    </div>
    );
}

export default App;