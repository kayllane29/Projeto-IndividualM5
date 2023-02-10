const readline = require ('readline-sync');

let propriedades = [];
let aux = "";

while( aux != 'sair'){

    aux = readline.question('Digite a propriedade css: ')

propriedades.push(aux);

aux = readline.question('Para sair digite "sair" , continuar qualquer tecla');

if(aux == 'Sair'){
    console.log(propriedades.sort().join('\n'));
}


}