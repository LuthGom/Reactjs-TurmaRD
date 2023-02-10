import axios from "axios";
import React from "react";

export default function Delete() {
    // no caso do método delete, criamos a function deleteApi, que com a ajuda do axios, e utilizando o método delete do axios recebe a url da api, especificando o id do item que iremos apagar.

    // recomendo utilizar a url do json-server de vocês para conseguir ver com mais proximidade essa execução acontecendo.
  const deleteApi = () => {
    axios
      .delete("https://api-de-compras.onrender.com/produto/feminino/27")
      .then((resposta) => console.log(resposta))
      .catch((erro) => console.log(erro));
  };
  return (
  <div>
    {/* aqui, com a ajuda do button e em um evento de click, executamos a function deleteApi. */}

    <button onClick={deleteApi}>Deletar</button>
  </div>);
}
