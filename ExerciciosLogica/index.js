const ListadeTarefas=prompt("Digite sua tarefa")
const ListadeTarefa2=prompt("Digite sua tarefa")
const ListadeTarefa3=prompt("Digite sua tarefa")
const resultado=[ListadeTarefas,ListadeTarefa2,ListadeTarefa3]
console.log(resultado)
const retirar=prompt("qual tarefa deseja retirar")
resultado.splice(retirar,1)
console.log(resultado)