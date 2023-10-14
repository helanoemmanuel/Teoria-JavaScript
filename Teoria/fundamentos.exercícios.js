// Exercícios de fundamentos em javascript




// Exercício 1: 'Olá, mundo!'

// Crie um script que imprima 'Olá, mundo!' no console

console.log('Olá, mundo!');


//Exercício 2: Conversão de tipos

//Dado o valor de uma string "1234" , converta em um número e exiba o tipo de variável no console

const valorString = '1234'
const valorNumber = Number(valorString)

console.log(typeof valorNumber);


//Exercício 3: Manipulação de strings

//Dado uma string "Javascript é incrível", escreva um código que conte quantos caracteres a string tem e quantas palavras existe na frase

const myString = "Javascript é incrivel"
const numeroDeCaracteres = myString.length
const numeroDePalavras = myString.split(' ').length

console.log(`o numero de cacteres é: ${numeroDeCaracteres}`);
//pode ser tambem: console.log(numeroDeCaracteres);
console.log(numeroDePalavras);


//Exercício 4: Loops e Arrays

//Crie um array com cinco nomes. Use um loop para imprimir cada nome no console.

const nomes = ['Helano', 'Emmanuel' ,'Narciso', 'Pinto', 'Souza']

for(i=0; i< nomes.length; i++) {
    console.log(nomes[i]);
}


//Exercício 5: Funções, strings, math

//Criar uma função que aceita uma string representando um horário no formato de 24h (por exemplo "14:30"). 
//A função, ela deve retornar uma string que converta um horário para o formato de 12h (por exemplo "2:30 PM").
//Use o objeto math para auxiliar nesta conversão. Certifique-se de que sua função lida corretamente com
//horarios na meia noite e no meio dia 

function converterHorario (horario24) {

    const [hora, minuto]= horario24.split(":");

    const hora12 = hora % 12 || 12;
    
    let periodo = "AM"

    if(hora > 12) {
        periodo= "PM";
    }

    console.log(`${hora12}:${minuto} ${periodo}`)
}

converterHorario("15:16");
converterHorario("09:55");
converterHorario("22:50")


