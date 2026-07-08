//const pokemons = [
// { nome: "Bulbasaur", tipo: "grama" },
// { nome: "Bellsprout", tipo: "grama" },
// { nome: "Charmander", tipo: "fogo" },
// { nome: "Vulpix", tipo: "fogo" },
// { nome: "Squirtle", tipo: "água" },
// { nome: "Psyduck", tipo: "água" },
//]
//const nomeDosPokemons = pokemons.map((pokemon, indice, array) => {
// return pokemon.nome
//})
//const pokemons = [
// { nome: "Bulbasaur", tipo: "grama" },
// { nome: "Bellsprout", tipo: "grama" },
// { nome: "Charmander", tipo: "fogo" },
// { nome: "Vulpix", tipo: "fogo" },
// { nome: "Squirtle", tipo: "água" },
//{ nome: "Psyduck", tipo: "água" },
//]
//const nomeDosPokemons = pokemons.map((pokemon, indice, array) => {
// return pokemon.nome
//})
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