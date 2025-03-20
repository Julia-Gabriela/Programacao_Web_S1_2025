let contador = 0;

const spanContador = document.getElementById("counter");
const botaoIncrementar = document.getElementById("increment");
const botaoDecrementar = document.getElementById("decrement");
const entradaTexto = document.getElementById("textInput");
const contadorCaracteres = document.getElementById("charCount");
const botaoAdicionarItem = document.getElementById("addItem");
const tipoItem = document.getElementById("itemType");
const botaoResetar = document.getElementById("reset");
const divSaida = document.getElementById("output");

botaoIncrementar.addEventListener("click", () => {
    contador++;
    spanContador.textContent = contador;
});

botaoDecrementar.addEventListener("click", () => {
    if (contador > 0) {
        contador--;
        spanContador.textContent = contador;
    } else {
        alert("O contador já está em zero!");
    }
});

entradaTexto.addEventListener("input", () => {
    contadorCaracteres.textContent = entradaTexto.value.replace(/\s/g, "").length;
});

entradaTexto.addEventListener("keypress", (evento) => {
    if (evento.key === "Enter" && entradaTexto.value.trim() !== "") {
        const paragrafo = document.createElement("p");
        paragrafo.textContent = entradaTexto.value;
        divSaida.appendChild(paragrafo);
        entradaTexto.value = "";
        contadorCaracteres.textContent = "0";
    }
});

botaoAdicionarItem.addEventListener("click", () => {
    if (entradaTexto.value.trim() === "") return;
    
    let lista;
    if (document.querySelector(tipoItem.value)) {
        lista = document.querySelector(tipoItem.value);
    } else {
        lista = document.createElement(tipoItem.value);
        divSaida.appendChild(lista);
    }
    
    const itemLista = document.createElement("li");
    itemLista.textContent = entradaTexto.value;
    lista.appendChild(itemLista);
    entradaTexto.value = "";
    contadorCaracteres.textContent = "0";
});

botaoResetar.addEventListener("click", () => {
    contador = 0;
    spanContador.textContent = contador;
    entradaTexto.value = "";
    contadorCaracteres.textContent = "0";
    divSaida.innerHTML = "";
});
