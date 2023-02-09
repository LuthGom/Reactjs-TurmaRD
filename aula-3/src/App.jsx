import { useState } from "react";
import "./App.css";
import { Tarefa } from "./componentes/Tarefa";


function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      {/* <button onClick={() => setCount(count + 1)}>{count}</button> */}
      <Tarefa titulo="checkbox"/>
    </div>
  );
}

export default App;

