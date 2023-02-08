
const api = fetch("https://pokeapi.co/api/v2/pokemon/12")
  .then((result) => result.json())
  .then((data) => console.log(data))
  // .catch((erro) => console.log(erro));
