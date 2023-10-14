// Fundamentos
let variavel = 'olá mundo!';
console.log(variavel);

/* comentários */

let num = 42;
let booleano = 'true'

console.log(num);
console.log(num + 10);
console.log(typeof num);


var objeto = {}
var array = []

console.log (typeof objeto);
console.log (typeof array);

let x = 10;
const y = 5;
console.log(x);
console.log (typeof x);
console.log (x , y);

//operadores aritmeticos
console.log(x+y);
console.log(x-y);
console.log(x*y);
console.log(x/y);

//operadores de comparação
console.log (x==y);
console.log(x!=y);
console.log('5' == 5);
console.log('5' === 5);
console.log('5' !== 5);

//operadores lógicos
// 'e'  é representado por &&
// 'ou' é representado pr ||

console.log (10 > 5 && 15 > 5);
console.log (10 > 5 && 15 < 5);

console.log (10 > 5 || 15 > 5);
console.log (10 > 5 || 15 < 5);


//Conversão de tipos

const meuNumero = 123;
const meuNumeroConvertido = Number (meuNumero);

console.log (meuNumero);
console.log ( typeof meuNumeroConvertido);


//Estrutura de condição: if , else , else if

const idade = 16;

if (idade < 13) {

    console.log ('criança');
} 

else if (idade < 18) {
    console.log ('Adolescente');
}

else {
    console.log('adulto');
}

if (true) {
    console.log ('Isso se executa!');
}


//Switch

let fruta = 'banana';

switch (fruta) {
    case 'banana':
    console.log ('banana é a fruta!');

    break;

    case 'laranja':
        console.log ('laranja é a fruta!');
    break;
    default:
        console.log('fruta não encontrada!');
}


// Estruturas de repetição
// 1,2,3,4,5,6.... dependendo de uma condição
// 'for' possui a estrutura de: contador, condição de limite, incremento

for (let i = 0 ; i < 5 ; i++) {


//concatenação
    console.log (' O valor de i é :'  + i )
}

//while 

let k = 0;

while (k<5) {

       console.log(' O valor de k é :' + k);

       k++;
}


// do while

let j = 0;

do {

    j++;

    console.log ('O valor de j é:' + j);

} while (j<5);
    

//funções
// function nome(arg1 , arg2) {corpo}

function cumprimentar (nome) {

    console.log ('olá, ' + nome);
}

//invocação = nome ()
cumprimentar('Hambiental');

//hoisting = içamento

testeHoisting();

function testeHoisting  () {

    console.log('Deu certo!');
}


// arrow function

const testeArrow = () => console.log ('Hambiental Gestão de Negócios')

testeArrow();


//thruty e falsy

const variavel1 = " "; //falsy
const variavel2 = 'Algum texto' 


if (variavel1) {

    console.log('É falso');

}
else {

    console.log('É verdadeiro!')

}

if (variavel2) {

    console.log('É verdadeiro! 2');

}

else {

    console.log('É falso! 2')

}


// array, listas

let numeros = [1,2,3,4,5,6]

console.log(numeros);
console.log(numeros[0]);
console.log(numeros[4]);

numeros.push(7)
console.log(numeros);


// prototype => OBJETO -> objeto2
//ARRAY => nossos arrays

numeros.pop()
console.log(numeros);

// strings
 const myStringNova = 'Olá, mundo...'

 // concatenação = +
 const myStringNova2 = myStringNova  + 'Somos a Hambiental Gestão de Negócios!'

 // interpolação
 const myStringNova3 =` ${myStringNova} Como você está? `

 console.log(myStringNova3);
 console.log(myStringNova.length); //quantidade de caracteres
 console.log(myStringNova[0]);
 console.log(myStringNova.toUpperCase());

 // data e hora
const agora = Date()
console.log(agora);

const natal = new Date(2023, 11, 25)
console.log(natal);


//math
console.log(Math.PI);
console.log(Math.round(4.7));
console.log(Math.sqrt(144));
console.log(Math.pow(2,3));

