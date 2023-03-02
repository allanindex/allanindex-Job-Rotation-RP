//--Exercício 1--//
var INDICE = 13;
var SOMA = 0;
var K = 0; 

while(K < INDICE){
    K++;
    SOMA += K;
}
//console.log(SOMA)



//--Exercício 2--//
const numeroInformado = 8;

let startFibonacci = [0, 1];
var i = 0;
while(i < startFibonacci.length){
    let ultimoIndice = startFibonacci[startFibonacci.length - 1];
    let penultimoIndice = startFibonacci[startFibonacci.length - 2];
    let novoIndice = ultimoIndice + penultimoIndice;
   
    startFibonacci.push(novoIndice);

    if(novoIndice > numeroInformado){
        //console.log('Esse número não pertence a sequencia de fibonacci');
        break;
    }else
    if(novoIndice == numeroInformado){
        //console.log(startFibonacci);
        //console.log('Esse número pertence à sequencia de fibonacci, sendo o ' + startFibonacci.length + 'º número desta lista');
        break;
    }
}

//--Exercício 5--//
function inverterString(string) {
    let newString = '';
    for (let i = string.length - 1; i >= 0; i--) {
      newString += string[i];
    }
    return newString;
}

let myString = 'Hello, world!';
let myInvertedString = inverterString(myString);
//console.log(myInvertedString);
