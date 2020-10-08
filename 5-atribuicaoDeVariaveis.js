console.log("Trabalhando com atribuição de variáveis");

const nome = "Beatriz";
//let nome = "Beatriz";
const sobrenome = "Medeiros"

//console.log(nome + " " + sobrenome);
console.log(nome, sobrenome);
console.log(`Meu nome é ${nome} ${sobrenome}`);

let contador = 0
contador = contador + 1;

const nomeCompleto = nome + sobrenome;
console.log(nomeCompleto);

/*
    Diferença entre const e let:
    No primeiro caso os valores da variável não podem se modificar,
    e no segundo cado sim. 
*/

let idade; //declarando variável
idade = 26; //atribuindo valor
idade = idade + 1;
console.log(idade);