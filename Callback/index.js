const pokemons = [
 { nome: "Bulbasaur", tipo: "grama" },
 { nome: "Bellsprout", tipo: "grama" },
 { nome: "Charmander", tipo: "fogo" },
 { nome: "Vulpix", tipo: "fogo" },
 { nome: "Squirtle", tipo: "água" },
 { nome: "Psyduck", tipo: "água" },
]
const nomeDosPokemons = pokemons.map((pokemon, indice, array) => {
 return pokemon.nome
})
const pokemons = [
 { nome: "Bulbasaur", tipo: "grama" },
 { nome: "Bellsprout", tipo: "grama" },
 { nome: "Charmander", tipo: "fogo" },
 { nome: "Vulpix", tipo: "fogo" },
 { nome: "Squirtle", tipo: "água" },
{ nome: "Psyduck", tipo: "água" },
]
const nomeDosPokemons = pokemons.map((pokemon, indice, array) => {
 return pokemon.nome
})
const pets= [
   {nome:"Lupin", raca:"Salsicha"},
    {nome:"Polly", raca:"lhasa apson"},
    {nome:"Madame ",raca:"Poodle"},
    {nome:"Quentinho", raca:"salsicha"},
    {nome:"Fluffly",raca:"Poodle"},
    {nome:"Caramelo",raca:"Vira-lata"},
]
const PetsNames=pets.map((pets,indice,array)=>{
    return pets.nome
})
console.log(PetsNames)

const Salsicha=pets.filter((pets,indice,array)=>{
    return pets.nome==="Quentinho"
})
console.log(Salsicha)

const MensagemDesconto=pets.filter(function(pets,indice,array){
   return pets.raca==="Poodle"
    return `${pets.nome} ${pets.raca}`

})
console.log(MensagemDesconto)


const Poodles=pets.filter((pets,indice,array)=>{
    return pets.raca==="Poodle"

})
console.log(Poodles)

const cuponsPoodles = Poodles.map((poodle) => {
   return `Você ganhou um cupom de desconto de 10% para tosar o/a ${poodle.nome}!`;
 });
 console.log(cuponsPoodles)

 const produtos = [
   { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
   { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
   { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
   { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
   { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
   { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
   { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
   { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
   { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
   { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]

const ApenasNome=produtos.filter((produtos,indice)=>{
    return produtos.nome

})
console.log(ApenasNome)

const Bebidas=produtos.filter((produtos,indice)=>{
  return produtos.categoria==="Bebidas"
})
console.log(Bebidas)

const desconto=produtos.map((desconto)=>{
   return `${desconto.nome} recebera desconto de ${desconto.preco/(5*100)}`
 })
 console.log(desconto)