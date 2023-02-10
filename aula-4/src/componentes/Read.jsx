import axios from "axios";
import React, { useState } from "react";

export default function Read() {
  // criamos um state que começa como um array vazio (para conseguirmos manipular usando métodos de array posteriormente)
  const [values, setValues] = useState([]);

  const getApi = () => {
    // utilizando o axios, criamos a function getApi, que recebe como argumento a url da API de onde iremos receber os valores retornados da API.

    // recomendo aqui trocar a url da api pela url do projeto individual de vocês.
    axios
      .get("https://api-de-compras.onrender.com/produtos/femininos/")
      // após receber passar a url para o método get do axios, tratamos nossa Promise com then e catch, para trabalhar com o resultado corretamente recebido ou apresentar nossa erro caso ocorra, respectivamente.
      .then((result) => setValues(result.data.Produtos))
      .catch((erro) => console.log(erro));
  };

  return (
    <div>
      {/* com a ajuda do button, chamamos nossa function getApi responsável por realizar a requisição get, utilizando no evento por meio do onClick do button */}
      <button onClick={getApi}>Buscar Produtos</button>
      <span style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
        {/* dentro do nosso span, que vai ser o elemento pai de cada item retornado da api, usamos nosso state values (que é um array), com o método map, para mapear cada indice do array values (agora com os dados retornados da api) e apresentar no frontend da os atributos que selecionarmos da forma que queremos. */}

        {/* caso troque a url da api pela url do projeto de vocês, se atentem aos nomes dos atributos de cada item que json-server de vocês retorna. Exemplo: no caso da api usada aqui, estamos recebendo titulo, descrição, preço e url_img. No projeto de vocês, o certo é trocar esses nomes pelos nomes que vocês definiram na estrutura do json de vocês. */}
        {values.map((produto) => {
          return (
            <span
              key={produto.id}
              style={{
                width: "200px",
                padding: "1em",
                border: "1px solid white",
                display: "flex",
                flexDirection: "column",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {/* agora com o map, conseguimos retornar o valor de cada item dentro de uma tag HTML, utilizando as {} e dentro passando o parametro produto (definido no começo do map, com os nomes que a API retorna, como titulo e todos os outros) */}
              <h3>{produto.titulo}</h3>
              <p>{produto.descricao}</p>
              <p>{produto.preco}</p>
              <img
                src={produto.url_imagem}
                alt={produto.descricao}
                style={{ width: "100px" }}
              />
            </span>
          );
        })}
      </span>
    </div>
  );
}
