import { useState } from "react";
import './App.css';

function App() {
  // const nombre = "Diana"; Variable

  const [numeroUno, setNumeroUno] = useState(0);
  const [numeroDos, setNumeroDos] = useState(0);
  const [resultado, setResultado] = useState(0);

  const handleChangeUno = (event) => {
    setNumeroUno(event.target.value);
  };
  const handleChangeDos = (event) => {
    setNumeroDos(event.target.value);
  };
  const handleSumar = () => {
    setResultado (parseFloat(numeroUno) + parseFloat(numeroDos));
  }
  const handleRestar = () => {
    setResultado (parseFloat(numeroUno) - parseFloat(numeroDos));
  }
  const handleMultiplicar = () =>{
    setResultado(parseFloat(numeroUno) * parseFloat(numeroDos));
  }
  const handleDividir = () =>{
    setResultado(parseFloat(numeroUno) / parseFloat(numeroDos));
  }
  return (
    <>
      <h1>Calculadora</h1>
      {/* {nombre} Variable */}
      <input
        type="text"
        placeholder="Numero1"
        value={numeroUno}
        onChange={handleChangeUno}
      />
      <input
        type="text"
        placeholder="Numero2"
        value={numeroDos}
        onChange={handleChangeDos}
      />
      <hr />
      <button onClick={handleSumar}>Sumar</button>
      <button onClick={handleRestar}>Restar</button>
      <button onClick={handleMultiplicar}>Multiplicar</button>
      <button onClick={handleDividir}>Dividir</button>
      <hr />
      <p>Resultado {resultado}</p>
    </>
  );
}

export default App;
