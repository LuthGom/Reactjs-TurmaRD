import "./App.css";
import Create from "./componentes/Create";
import Delete from "./componentes/Delete";
import Read from "./componentes/Read";
import Update from "./componentes/Update";

function App() {
  return (
    <div className="App">
      {/* para visualizar cada componente com mais clareza, sempre deixe apenas um descomentado e os outros 3 comentados. */}
      {/* <Read />
      <Update /> */}
      {/* <Create /> */}
      {/* <Delete /> */}
      <Create />
    </div>
  );
}

export default App;
