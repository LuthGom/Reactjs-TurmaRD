import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import axios from "axios";
function App() {
  const [value, setValue] = useState({titulo: ""});
  console.log(value);
  function putApi() {
    axios
      .patch("https://api-de-compras.onrender.com/produto/masculino/21",
     value)
      .then((resposta) => console.log(resposta.data))
      .catch((erro) => console.log(erro));
  }

  return (
    <div className="App">
      <button onClick={()=> putApi()}>Atualizar</button>
      <input
        type="text"
        onInput={(e) => setValue({ titulo: e.target.value })}
      />
    </div>
  );
}

export default App;
