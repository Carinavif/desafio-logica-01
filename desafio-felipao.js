console.log("## Desafio do Herói ##\n");

let nome = "Carina";
let quantidadeExperiencia = 12.000;
let nivel = "";

if (quantidadeExperiencia < 1.000) {
    nivel = "Ferro";
} else if (quantidadeExperiencia > 1.001 && quantidadeExperiencia <= 2.000) {
    nivel = "Bronze";
} else if (quantidadeExperiencia >  2.001 && quantidadeExperiencia <= 5.000) {
    nivel = "Prata";
} else if (quantidadeExperiencia >  5.001 && quantidadeExperiencia <= 7.000) {
    nivel = "Ouro";
} else if (quantidadeExperiencia >  7.001 && quantidadeExperiencia <= 8.000) {
    nivel = "Platina";
} else if (quantidadeExperiencia >  8.001 && quantidadeExperiencia <= 9.000) {
    nivel = "Ascendente";
} else if (quantidadeExperiencia >  9.001 && quantidadeExperiencia <= 10.000) {
    nivel = "Imortal";
} else if (quantidadeExperiencia >= 10.001) {
    nivel = "Radiante";
}
    
console.log("O Herói de nome " + nome + " está no nível de " + nivel);
