// DOM - Document Object Model
//selecionar elementos

const elementoPorId = document.getElementById("meuId");
console.log(elementoPorId);


const elementoPorId2 = document.querySelector("#meuId");
console.log(elementoPorId2);


const elementoPorClasse = document.getElementsByClassName("minhaClasse")
console.log(elementoPorClasse);

const elementoPorClasse2 = document.querySelector(".minhaClasse")
console.log(elementoPorClasse2);

// Manipular conteudo de texto
const texto = document.querySelector("#meuId");
console.log(texto.textContent);


setTimeout(()=> {
    texto.textContent = "Nós somos a Hambiental!"
}, 3000);


// Trabalhando com atributos

const link = document.querySelector("a");
console.log(link);

link.setAttribute("href", "https://canalsolar.com.br");
console.log(link.getAttribute("href"));
console.log(link.hasAttribute("target"));

link.removeAttribute("target");


// Manipulação de classes do CSS 

const elemento = document.querySelector("#meuId");
elemento.classList.add('novaClasse');
elemento.classList.remove('minhaClasse');
elemento.classList.toggle('outraClasse');

elemento.classList.toggle('outraClasse');


// Manipular o CSS

const elemento3 = document.querySelector("#meuId");
elemento3.style.color = "white";
elemento3.style.backgroundColor = "green";


// Navegação entre nós
const elemento4 = document.querySelector("#meuInput");

const pai = elemento4.parentNode
console.log(pai);


// Obter o primeiro filho
const primeiroFilho = pai.firstChild;
console.log(primeiroFilho);


const ultimoFilho = pai.lastChild;
console.log(ultimoFilho);



// Manipulação de estrutura do DOM

const novoElemento = document.createElement("div");

novoElemento.textContent = "Trabalhamos com projetos em energia solar."
console.log(novoElemento);

document.body.appendChild(novoElemento);
document.body.removeChild(elementoPorId);


// Eventos

// Click

/*   

const Botao = document.querySelector("button");

Botao.addEventListener('click', function(){
    console.log("Botão clicado!");
});   

*/


// Mouse

/*

const elemento5  = document.querySelector("meuFormulario");
elemento5.addEventListener("mousehover", function(){
    console.log("O mouse passou aqui!");
});

*/



// Teclado
const campoInput = document.querySelector("#meuInput");
campoInput.addEventListener("keydown" , function(){
    console.log("Tecla pressionada.");
});


// formulário
const form = document.querySelector("form");
form.addEventListener("submit", function(event){
    event.preventDefault();

    console.log("Formulário enviado.")
});


// Propagação de eventos
document.querySelector("#elementoPai").addEventListener("click", function
(){
    console.log("Click capturado pelo pai.")
});




document.querySelector("#elementoFilho").addEventListener("click", function
(event){
    event.stopPropagation();

    console.log("Click capiturado pelo filho. ");
});


document.querySelector("#meuLink").addEventListener("click", function
(event) {
    event.preventDefault();

    console.log("Clicou no link!");
});


// delegação de eventos

document.querySelector("#elementoPai").addEventListener("click", function
(event){
    if(event.target.matches(".classeDosFilhos"));
    console.log("Evento delegado para o filho");
});










