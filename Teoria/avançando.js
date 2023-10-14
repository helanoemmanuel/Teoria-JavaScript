// Avançando em javascript

// Manipulação de arrays

const frutas = ['maçã' , 'uva', 'banana']

frutas.unshift ('acerola');

console.log(frutas);

frutas.shift('');

console.log(frutas);


// map , filter , reduce -> arrow function

const number = [1,2,3,4,6];

const numerosPares = number.filter((num) => num % 2 === 0);
console.log(numerosPares);


const numeroPar = number.find((num)=> num % 2 === 0);
console.log(numeroPar);



// Manipulação de strings

const frase = ' Olá,  Mundo! '

const palavras = frase.trim().split(" ");

console.log(frase);
console.log(palavras);


const frase2 = 'Javascript é incrível!'

console.log(frase2.startsWith('Java'));
console.log(frase2.endsWith('!'));
console.log(frase2.endsWith('l'));


// Exceções e tratamentos de erros


try {
    const idade = 15;

    if (idade < 18){
        throw new error("Você deve ter pelo menos 18 anos!") ;
    }}

    catch (error) {
        console.log(error);
    }

    console.log("Continuando o programa...");


    // Callback => Função

     function cumprimentar (nome, Callback) {
        console.log ("Olá, " + nome);
        Callback()
    }

    function mostrarSaudacao (){
        console.log("Como você está?")
    }

    cumprimentar ("Helano", mostrarSaudacao);


    // settimeout => depois de um tempo executa algo, uma vez

    function mostrarMensagem (){
        console.log ("Essa mensagem será exibida após 3 segundos.")
    }

    mostrarMensagem();

   
   
    function mostrarMensagem2 (){
        console.log ("Olá, somos a Hambiental Gestão de Negócios.")
    }

    // 1000ms = 1s
    setTimeout (mostrarMensagem2, 3000);


    // Promises

    const promessa = new Promise ((resolve, reject) => {
        const condicao = true;

        if (condicao) {
            resolve ("A condição é verdadeira!");
        }
        else{
            reject ("A condição é falsa!");
        }
    })

    promessa.then((mensagem)=> {
        console.log(mensagem);
    })


    // Bibliotecas feitas que são "promise based"

    const promise1 = Promise.resolve(3);
    const promise2 = new Promise((resolve, reject)=> {
        setTimeout(resolve, 2500, "testando...");
    })

    Promise.all([promise1,promise2]).then((valores)=> console.log(valores));




    // Async Await

     async function obterValor () {

        const promessa = new Promise ((resolve, reject) => {
            const condicao = true;
    
            if (condicao) {
                resolve ("A condição é verdadeira!");
            }
            else{
                reject ("A condição é falsa!");
            }
        })}

        // Json (Javascript Object Notation)
        // {nome: "teste"} => {"nome": "teste"}
        // padroniza a comunicação front-end e back-end em uma linguagem só

        


    




