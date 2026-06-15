const ListadeTarefas=prompt("Digite sua tarefa")
const ListadeTarefa2=prompt("Digite sua tarefa")
const ListadeTarefa3=prompt("Digite sua tarefa")
const resultado=[ListadeTarefas,ListadeTarefa2,ListadeTarefa3]
console.log(resultado)
const retirar=prompt("qual tarefa deseja retirar")
resultado.splice(retirar,1)
console.log(resultado)

const DigiteNome=prompt("Digite seu nome")
const DigiteEmail=prompt("Digite seu email")
console.log(`Seja bem vindo ${DigiteNome}, seu email ${DigiteEmail} foi cadastrado com sucesso`)

const ComidaFavorita=["arroz","feijao","batata","macarrao","soja"]
console.log(ComidaFavorita)
const Adicionar=prompt("digite sua outra comida favorita")
ComidaFavorita.splice(1,1,Adicionar)
console.log(ComidaFavorita)

