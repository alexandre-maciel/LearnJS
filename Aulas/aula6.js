// vetores / Arrays são sequencias de multiplos valores armazenados numa variavel
// eles são acessados por indices entre chaves começando no [0]

let frutas = ['Maça', 'Banana', 'Uva']

console.log(frutas[1])
console.log(frutas[2])

// função push adiciona um valor ao final do vetor
frutas.push("Manga")

console.log(frutas)

frutas.pop() // remove o ultimo vetor

console.log(frutas)

frutas.unshift('Morango') // adiciona um valor ao inicio

console.log(frutas)

frutas.shift() // remove do inicio

console.log(frutas)

frutas.splice() // remove algum vetor

