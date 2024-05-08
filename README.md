# 🌟 Desafio Classificador de Nível de Herói

## O Que foi utilizado:

- Variáveis
- Operadores
- Estruturas de Decisões

## Objetivo

Criar uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

- Se XP for menor do que 1.000 = Ferro
- Se XP for entre 1.001 e 2.000 = Bronze
- Se XP for entre 2.001 e 5.000 = Prata
- Se XP for entre 5.001 e 7.000 = Ouro
- Se XP for entre 7.001 e 8.000 = Platina
- Se XP for entre 8.001 e 9.000 = Ascendente
- Se XP for entre 9.001 e 10.000 = Imortal
- Se XP for maior ou igual a 10.001 = Radiante

## Saída

Ao final deveria exibir a seguinte mensagem:
"O Herói de nome **{nome}** está no nível de **{nivel}**"

---

## Exemplo de Uso

```javascript
let nome = "Carina";
let quantidadeExperiencia = 2000;
let nivel = "";

if (quantidadeExperiencia < 1000) {
    nivel = "Ferro";
} else if (quantidadeExperiencia <= 2000) {
    nivel = "Bronze";
} else if (quantidadeExperiencia <= 5000) {
    nivel = "Prata";
} else if (quantidadeExperiencia <= 7000) {
    nivel = "Ouro";
} else if (quantidadeExperiencia <= 8000) {
    nivel = "Platina";
} else if (quantidadeExperiencia <= 9000) {
    nivel = "Ascendente";
} else if (quantidadeExperiencia <= 10000) {
    nivel = "Imortal";
} else {
    nivel = "Radiante";
}

console.log("O Herói de nome " + nome + " está no nível de " + nivel);
```

## Autores

- [@Carinavif](https://www.github.com/Carinavif)
