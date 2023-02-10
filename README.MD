# no componente create temos a function onChangeInput:

```json{
  const onChangeInput = (evento) => {
    setValues({ ...values, [evento.target.name]: evento.target.value });
  };
}
```
## passamos essa function como argumento do onInput em cada input.

## essa function é apenas uma forma reaproveitável de escrever:

```json{
    "<input onInput{(e) => setValues({titulo: e.target.value})} />"
    
    "- dessa maneira, precisariamos escrever personalizadamente em cada input, com a function acima, podemos generalizar a function.
    São formas diferentes de fazer a ambas funcionam.
}
```

