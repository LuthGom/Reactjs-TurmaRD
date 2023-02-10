import axios from "axios";
import React, { useState } from "react";

//  dêem uma olhada no exemplo do readme
export default function Create() {
    // O método post é um pouco mais longo, mas vamos por partes;

    // primeiro reparem que definimos um objeto de acordo com as chaves-valor dos itens da api.
    // Dá uma olhada no navegador com a url: "https://api-de-compras.onrender.com/produtos/femininos/", para vocês visualizarem a estrutura.
  const valoresIniciais = {
    titulo: "",
    descricao: "",
    preco: 1,
    url_imagem: "",
  };


//   da mesma maneira que fizemos no método patch, criamos um state que fica responsável por guardar os valores em forma de objeto. Reparem em qual é o valor inicial dele, para entendermos a estrutura que a API espera.
  const [values, setValues] = useState(valoresIniciais);


//   Apesar de não termos visto uma function isolada onChange, percebam que eu estou abstraindo o mesmo que fizemos no onInput lá no componente update. Porém, como agora estamos trabalhando com mais de um input, a ideia foi criar uma function reaproveitável para cada input utilizado nesse componente para realizarmos o post.

// Lá no update, definimos o nome do atributo direto no setValues, no formato: setValues({titulo: e.target.name}). Agora, a ideia é:
// passando [evento.target.name] conseguimos capturar o name que damos a cada input de forma dinâmica. Reparem que mais abaixo, foi necessário definir o atributo name para cada input e, esse name precisa ser igual ao nome do atributo da api. 

// Por exemplo: se a api espera receber um campo chamado titulo, o input que eu definir no meu frontend para capturar o valor de titulo, deverá receber no atributo name a string "titulo", assim, conseguir formar um objeto no seguinte formato: 

// {titulo (pego dinamicamente por meio do nome do input, por causa do [e.target.name]). Lembra que o parametro e significa evento (lembra do addEventListener? e da mesma maneira que eu consigo pegar o valor do input com e.target.value, eu consigo capturar o nome desse input utilizando o[e.target.name])}.

// dessa maneira, conforme o usuário digitar no meu input, vai sendo gerado o objeto que comentamos logo acima, da seguinte forma: {titulo: valor digitado no input}

// Além disso, o que estamos fazendo com o {...values}. Lembram do spread? eu utilizo para espalhar valores dentro um array ou objeto. 
//  eu to passando o próprio state dentro do seu setValues, porque assim, a cada novo atributo adicionado, eu vou ter: o que values já possuía + o que está sendo adicionado agora.

// Exemplo: se até o momento o values, possui o titulo preenchido, assim:

// {titulo "laranja"}, quando eu adicionar descricao, ele vai passar a ser: {titulo: "laranja", descricao: "pokan"}
 
// e assim, sucetivamente, até que eu pare de preencher os inputs e tenha meu objeto completamente preenchido:

// {titulo: "laranja", descricao:"pokan", "preco": 10, url_image": "image"}

  const onChangeInput = (evento) => {
    setValues({ ...values, [evento.target.name]: evento.target.value });
  };

  const postApi = () => {
    // aqui criamos uma function postApi que utilizando o axios, usamos o método post, que espera dois argumentos: primeiro -> a url da api para fazer o post. o segundo -> o objeto que será usado para enviar os dados e criar um novo item. Nesse caso, estamos utilizando o state values.
    axios
      .post("https://api-de-compras.onrender.com/produto/feminino", values)
      .then((resposta) => console.log(resposta))
      .catch((erro) => console.log(erro));
  };

  return (
    <div>
        {/* Aqui vamos nos atentar na estrutura de cada input:
        - primeiro temos definido o tipo de desse input
        - segundo temos que passar o name desse input, que como vimos acima, precisa ser o nome que a api espera como atributo. Então, nesse caso, como a api utilizada espsera receber um titulo, estamos passando como nome desse input a string "titulo".
        - terceiro, estamos utilizando o evento onInput para capturar o valor do input. E como definimos na function onChangeInput lá em cima, além de capturar do valor do input, esse evento vai capturar também o nome do input para definir dentro do nosso state values ( que é um objeto).

        Então, percebam que não preciso definir no onInput setValues({titulo: e.target.name}), mas por causa da nossa function onChangeInput, que é reaproveitável, estamos capturando esse dois valores dinamicamente.

        - Troquem a url dessa api pelo json-server de vocês para conseguir ver esse cadastro com mais proximidade.

        - Percebam que estamos fazendo o mesmo para todos os inputs e que cada input possui o nome de cada atributo que precisamos definir para mandar dados de cadastro para nossa api. Então, nesse caso definimos cada input para: titulo, descricao, preco e url_imagem. Façam o mesmo para json-server de vocês.
        */}
      <span>
        <label htmlFor="titulo">
          Titulo:{" "}
        </label>
        <input
          type="text"
          name="titulo"
          onInput={(e) => onChangeInput(e)}
        />
      </span>
      <span>
        <label htmlFor="descricao">
          "descricao":{" "}
        </label>
        <input
          type="text"
          name="descricao"
          onInput={(e) => onChangeInput(e)}
        />
      </span>
      <span>
        <label htmlFor="preco">
          "preco":{" "}
        </label>
        <input
          type="text"
          name="preco"
          onInput={(e) => onChangeInput(e)}
        />
      </span>
      <span>
        <label htmlFor="url_imagem">
          "url_imagem":{" "}
        </label>
        <input
          type="text"
          name="url_imagem"
          onInput={(e) => onChangeInput(e)}
        />
      </span>


        {/* finalmente, com a ajuda do buttom, chamaos a function postApi como argumento do nosso evento de click. */}
      <button onClick={postApi}>Cadastrar Produto</button>
    </div>
  );
}
