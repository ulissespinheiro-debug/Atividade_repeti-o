import * as readlineSync from 'readline-sync';

console.log('===Pesquisa sobre Renda e Filhos em parnamimirmj===')
let num_familias_filhos = 0
let renda_familia = 0
let filhos_familia = 0
let mediafilhos = 0
let mediarenda = 0
while(true){
    let renda: number = readlineSync.questionInt('Qual a renda da sua familia? ') 
    let filhos: number = readlineSync.questionInt('Quantos filhos tem sua família? ')
    renda_familia += renda
    filhos_familia += filhos
    num_familias_filhos += 1
    let parar: string = readlineSync.question('Deseja continuar s/n? ')
    if (parar === 'n'){
        break
    }else{
        continue
    }
}
mediafilhos = filhos_familia/num_familias_filhos
mediarenda = renda_familia/num_familias_filhos
console.log(`A média de filhos por família em parnamirim é igual a ${mediafilhos.toFixed(2)}`)
console.log(`A média de renda por família em parnamirim é igual a ${mediarenda.toFixed(2)}`)