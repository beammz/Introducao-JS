console.log("Conversão de Tipos");

console.log("ano" + 2020);
console.log("2" + "2"); //concatenação
console.log(parseInt("2") + parseInt("2"));

/*
    No caso de divisões, o comportamento do leitor é outro.
    Veremos que o retorno para o caso a seguir é 5, mesmo que
    não tenhamos realizado uma conversão explícita para números
    inteiros, afinal uma divisão só faz sentido com elementos númericos.
*/
console.log("10" / "2"); 
console.log("Beatriz" / "2"); //retorno NaN: not a number, não é um operação possível pois não se trata de números.

/*
    O JavaScript é uma linguagem fracamente tipada, então ele sempre tentará realizar 
    conversões de maneira implícita a fim de executar corretamente as declarações, 
    além disso, podemos forçar a conversão por meio do parseInt.
*/

console.log(6,5); //',' é um caracter especial 
console.log(6.5);