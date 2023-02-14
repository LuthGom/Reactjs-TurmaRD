import axios from 'axios';
import React, { useState } from 'react'

export default function Update() {
// definimos um state que inicia como um objeto vazio ( que é o tipo de dado que enviaremos como body para a requisição do nosso patch (lembra lá do postman quando precisamos escrever um objeto para enviar dados para uma api?))

const [value, setValue] = useState({});

// definimos uma function patchApi( poderia ter sido put, mas o patch é o que essa api em específico espera. Se trocar pelo projeto json-server de vocês podem utilizar o patch ou o put.). A function patchApi utiliza o axios para criar uma requisição de update. O método patch espera dois argumentos: o primeiro -> a url que define o caminho e o id do item em especico que será atualizado. o segundo -> um objeto ( que o próprio axios já faz o parse por debaixo dos panos), que será enviado como valor a ser atualizado no banco de dados. Esse objeto possui a estrutura: {nome do(s) atributo(s) de acordo como está definido na api ou no json-server: novo valor a ser substituído no banco de dados}
    const patchApi = () =>{
        axios
        .patch("https://api-de-compras.onrender.com/produto/masculino/21", value)
        // aqui estamos tratando essa Promise, que se der certo vai resultar em um status 200 (lembra o que status HTTP 200 significa?), e caso, ocorra um erro, o esperado é que o catch capture esse erro e nos mostre no console.
        .then(resposta =>console.log(resposta))
        .catch(erro => console.log(erro))
    }

  return (
    <div>
      {/* com a ajuda do input, capturamos o valor digitado nele (pensa na interação do usuário), com a ajuda do atributo onInput e com a function de atualizar o nosso state values, o setValues, passamos para ele o valor que será digitado. */}
        <input type="text" onInput={(e)=> setValue({titulo: e.target.value})} />
    {/* E, com toda nossa estrutura de requisição e captura de valor do input definidos, utilizamos um button com evento de click para chamar a executar a function patchApi  */}
        <button onClick={patchApi}>Atualizar</button>
    </div>
  )
}
