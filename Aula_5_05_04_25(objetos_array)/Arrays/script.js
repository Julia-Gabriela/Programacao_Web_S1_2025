//Array
let numeros = [10, 20, 30, 40];
let nomes = ["Ana", "Maria", "Joao"];

console.log(numeros);
console.log(nomes);

let lista = [];
lista[0] = "item 1";
lista[1] = "item 2";
console.log(lista);
console.log(lista[1]);

let cores = new Array("Vermelho", "Azul", "Verde");
console.log(cores);

//metodos
numeros.push(50); //adiciona numero no final
console.log(numeros);

numeros.unshift(0); //adiciona numero no inicio
console.log(numeros);

numeros.splice(1, 0, 5); //adiciona elemento no meio
console.log(numeros);

numeros.pop(); //remove ultimo elemento
console.log(numeros);

numeros.shift(); //remove primeiro elemento
console.log(numeros);

numeros.splice(2,1); //adiciona elemento no meio
console.log(numeros);

console.log(numeros.includes(2));
let maiorQue10 = numeros.find(num => num> 10);
console.log(maiorQue10);

for (let i = 0; i<numeros.length; i++){
    console.log(numeros[i]);
}

for (let numero of numeros){
    console.log(numero);
}

