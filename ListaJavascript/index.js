const CalcularArea=(Altura,Largura)=>{
    const area=Altura*Largura
    console.log(area)
}
CalcularArea(2,3)

const CalcularIdade=()=>{
    const Idade=prompt("Digite Ano Atual")
    const IdadeCalcular=prompt("Digite Ano Nascido")
    const erro=Idade-IdadeCalcular
    console.log(erro)
}
CalcularIdade()

const CalcularImc=()=>{
    const Altura=prompt("Digite sua Altura")
    const Peso=prompt("Digite seu peso")
    const Resultado=Peso/(Altura*Altura)
    console.log(Resultado)
}
CalcularImc()

const Perguntas=()=>{
    const SeuNome=prompt("Digite seu nome")
    const Idade=prompt("digite sua idade")
    const Email=prompt("digite seu email")
    console.log(`Meu nome é ${SeuNome}, tenho ${Idade} anos, e o meu email é ${Email}`)
}
Perguntas()
const CoresFavoritas=()=>{
    const Cor1=prompt("Digite uma cor")
    const Cor2=prompt("Digite outra cor")
    const Cor3=prompt("Digite outra cor")
    const resultado=[Cor1,Cor2,Cor3]
    console.log(resultado)
}
CoresFavoritas()

const LetraMaiuscula=()=>{
    const Digitar=prompt("Digite algo")
    const FraseMaiuscula=Digitar.toUpperCase()
    console.log(FraseMaiuscula)
}
LetraMaiuscula()

const Espetaculo=()=>{
    const Pessoas=prompt("Digite quantidade de pessoas")
    const Conta=Pessoas*50-5000
    console.log(Conta)
    const Comprar=Pessoas*50
    console.log(Comprar)
}
Espetaculo()