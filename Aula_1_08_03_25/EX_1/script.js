console.log("Olá mundo");

var animal = "gato";
console.log(animal);
console.log(typeof animal);

const valor = 10;
//valor = 20;

var nomeCompleto = window.prompt("Nome:");
var idade = parseInt(window.prompt("Idade:"));

console.log(nomeCompleto);
console.log(idade);
console.log(typeof idade);

console.log(`Você se chama ${nomeCompleto} e tem ${idade} anos.`)

var linhas = parseInt(prompt("Linhas"));

for(let i = 1; i<= linhas; i++){
    let linha = '';
    for(let j = 1; j<=i; j++){
        linha += '*';
    }
    console.log(linha);
}






