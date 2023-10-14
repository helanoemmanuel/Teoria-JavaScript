
// Exercício de manipulação de array


// Crie uma lista de compras que é inicialmente vazia
// Adicione 5 itens a lista utilizando push ().
// Agora, remova o primeiro item da lista usando shift().
// Imprima a lista final no console

const listaDeCompras = [];
listaDeCompras.push("pão", "manteiga", "açucar", "café", "leite");
listaDeCompras.shift();

console.log(listaDeCompras);


// Exercício de manipulação de array

// você tem um array de números [3, 7, 14, 21, 29, 36, 42]
// Use a função find() para encontrar o primeiro numero divisível por 7
// e maior que 10

const numero1 = [3, 7, 14, 21, 29, 36, 42];

const numero2 = numero1.find((num)=> num > 10 && num % 7 === 0);

console.log(numero2);


// Exercício de manipulação de array - filter()

//Dado um array de números: [5, 10, 15, 20, 25, 30, 35, 40]
// Use a função filter para criar um novo array que contenha apenas os numeros 
// que são maiores que 20

const numero3 = [5, 10, 15, 20, 25, 30, 35, 40];
const numero4 = numero3.filter((num)=> num > 20);

console.log(numero4);


// Exercícios de manipulação de string - split() , trim()

//Dada uma string: " Bom dia, mundo! "
//Remova os espaços em branco no inicio  e no final da string
//Em seguida , divida a string em palavras.

const string = " Bom dia, mundo! "
const string2 = string.trim().split(" ");

console.log(string2);


 
// Exercício de manipulação de string - starWirt() , endWirt()
// Dada a string: "O rato roeu a roupa do rei de Roma"
// Verifique se a string começa com a palavra "O" e termina com a palavra "Roma"

const relato = "O rato roeu a roupa do rei de Roma"
const verificação1 = relato.startsWith("O");
const verificação2 = relato.endsWith("Roma");

console.log(verificação1);
console.log(verificação2);



