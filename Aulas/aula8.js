// array de objetos

let tarefas = [
    {
        id:1,
        texto: "Lavar carro",
        completo: false,
    },
    {
        id:2,
        texto: "Fazer exercicio",
        completo: true,
    },
    {
        id:3,
        texto: "Estudar",
        completo: false,
    }
]

// acessar um vetor de objetos
console.log(tarefas[1].texto)

console.log(JSON.stringify(tarefas))

// formatar um objeto como JSON
JSON.stringify(tarefas)