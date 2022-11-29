import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function App() {
  const [count, setCount] = useState(0);
  const [respuesta, setRespuesta] = useState({});

  useEffect(() => {
    const chiste = async () => {
      let response = await axios.get("https://api.chucknorris.io/jokes/random");
      setRespuesta(response.data);
    };
    chiste();
  }, [count]);

  const Incrementar = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <h1>HOLA</h1>
      <p>contador: {count}</p>
      <button onClick={Incrementar}>Incrementar</button>
      <h3>Chiste: {respuesta.value}</h3>
    </div>
  );
}

export default App;
